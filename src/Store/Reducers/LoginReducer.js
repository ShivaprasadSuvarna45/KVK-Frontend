export function LoginReducer(state={userDetails: {},islogin:false},action){
    switch(action.type)
    {
         case "LOGIN_USER":
         {
             if(action.payload.msg === "success"){
                return {...state,userDetails:action.payload.res.data,islogin:true}
             }
             else if(action.payload.msg === "failure"){
                console.log(action.payload.error);
                alert("Invalid Login details");
                return {...state,userDetails:{},islogin:false}
             }
            break;
         }
         case "LOGOUT_USER":{
            return {...state,userDetails:{},islogin:false};
            break;
         }
         case "CHANGE_PASSWORD":
         {  
            if(action.payload.msg === "success"){
                alert("Password Updated Succesfully");
                return {...state};
            }
            else{
                alert("Password Not Updated");
                return {...state};
            }
             
         }

        case "UPDATED" :{
            alert("Profile updated successfully")
            return { ...state};
        }
    }
    return state;
}