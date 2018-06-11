import API_UTIL from "../../API/Api";

export function RegisterReducer(state={isregisterd: false,regMsg:''},
    action){
    switch(action.type)
    {
         case "REGISTER_USER":
         {
                //console.log(action.payload);
                if(action.payload === "registered"){
                    return {...state,isregisterd:true,regMsg:"Thanks for registering. You will receive an email with user ID and Password"}
                }
                else{
                    alert("Invalid details");
                    return {...state,isregisterd:false,regMsg:"Your not an enrolled user"}
                }
                break;
                
         }
         case "REGISTER_NEW_USER":
         {
                //console.log(action.payload);
                if(action.payload === "registered"){
                    return {...state,isregisterd:true,regMsg:"Thanks for registering. Your details will be varified by the administrator"}
                }
                break;
        }
         case "CHANGE_REG_STATE" :
         {
            return {...state,isregisterd:false}   
            break;
         }
    }
    return state;
}