import axios from 'axios';
const WebScoketURI="WSS://abudhabi-server.herokuapp.com";
const URL="https://abudhabi-server.herokuapp.com";

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

