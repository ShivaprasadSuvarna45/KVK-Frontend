import axios from 'axios';
import store from '../Store/store';
const WebScoketURI="WSS://abudhabi-server.herokuapp.com";
const URL="https://abudhabi-server.herokuapp.com";

const KVKURL = "http://localhost:8000";

class Api{
      registerUser(data){
            axios.post(KVKURL+'/register',{
                "mail":data.email,
                "username":data.name,
                "batch":data.batch  
            })
            .then(function(res){
                  store.dispatch({type:"REGISTER_USER",payload:"registered"});                  
            })
            .catch(function(error){
                  store.dispatch({type:"REGISTER_USER",payload:"invalid details"});
            })
      }

      loginUser(data){
            axios.get(KVKURL+'/login?mail='+data.email+"&password="+data.password)
            .then(function(res){
                  if(res.data === "Invalid Login Details"){
                        alert("Invalid Login Details")
                  }
                  else{
                        store.dispatch({type:"LOGIN_USER",payload:{res:res,msg:"success"}});
                  }
                  
            })
            .catch(function(error){
                  store.dispatch({type:"LOGIN_USER",payload:{msg:"failure",error:error}});
            })
      }

      chagePassword(data){
            axios.post(KVKURL+'/changepassword',{
                  "mail":data.email,
                  "password":data.password
            })
            .then(function(res){
                  store.dispatch({type:"CHANGE_PASSWORD",payload:{res:res,msg:"success"}});
            })
            .catch(function(error){
                  store.dispatch({type:"CHANGE_PASSWORD",payload:{msg:"failure",error:error}});
            })
      }

      updateDetails(data){
            axios.post(KVKURL+'/updatevalues',{
                  "data":data
            })
            .then(function(res){
                  store.dispatch({type:"UPDATED",payload:{msg:"Values updated sucessfully",res:res}});
            })
            .catch(function(error){
                 // store.dispatch({type:"UPDATED",payload:error});
            })
      }
      getSerachResults(data){
            let img_links = [];
            axios.get(KVKURL+'/getalbums?batch='+data.batch+"&username="+data.username+"&attend_event="+data.attend_event)
            .then(function(res){
                  for(let i=0;i<res.data.length; i++){
                        img_links.push(res.data[i].profile_photo)
                  }
                  console.log(img_links);
                  store.dispatch({type:"SEARCH_RESULT",payload:img_links});
            })
            .catch(function(error){
                  store.dispatch({type:"SEARCH_NOT_FOUND",payload:"no seach results"});
            })
      }
      getAllRecords(data){
            let albm_pf = [];
            axios.get(KVKURL+'/getalldetails')
            .then(function(res){
                  for(let i=0;i<res.data.length; i++){
                        for(let j=0; j< res.data[i].album_imgs.length; j++){
                              albm_pf.push({profile_photo:res.data[i].profile_photo,album_img:res.data[i].album_imgs[j]});
                        }
                  }
                  console.log(albm_pf);
                  store.dispatch({type:"SET_SLICK",payload:albm_pf});
            })
            .catch(function(error){
                  store.dispatch({type:"SEARCH_NOT_FOUND",payload:"no seach results"});
            })
      }
}

export default new Api();

export function getAllSchedule(){
      let URI=URL+`/schedule`;
      return axios.get(URI);
}

export function getAllInterest(){
     let  URI=URL+`/interests`;
      return axios.get(URI);
}

export function getAllAvatar(){
      let URI=URL+`/avatars`;
      return axios.get(URI);
}

export  const connection =new WebSocket(WebScoketURI);

