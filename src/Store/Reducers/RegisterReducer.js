import API_UTIL from "../../API/Api";

export function RegisterReducer(state={isregisterd: false},
    action){
    switch(action.type)
    {
         case "REGISTER_USER":
         {
                console.log(action.payload);
                if(action.payload === "registered"){
                    return {...state,isregisterd:true}
                }
                else{
                    alert("Invalid details");
                    return {...state,isregisterd:false}
                }
                
         }
    }
    return state;
}