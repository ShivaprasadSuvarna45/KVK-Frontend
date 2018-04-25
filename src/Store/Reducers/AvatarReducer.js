export function AvatarReducer(state={
  avatarList:[]
},action){
    switch(action.type)
    {
         case "AVATAR_GET_ALL_SUCCEEDED":
         {
                return {...state,avatarList:action.payload}
         }
    }
    return state;
}