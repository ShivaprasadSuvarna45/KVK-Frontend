export function BotReducer(state={
  Avatarmessage:""
},action){
    switch(action.type)
    {
         case "AVATAR_BOT_MESSAGE_RECEIVED":
         {
                return {...state,Avatarmessage:action.payload}
         }
    }
    return state;
}