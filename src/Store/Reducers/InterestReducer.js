export function InterestReducer(state={
    interestList:[]}
    ,action){
    switch(action.type)
    {
         case "INTEREST_GET_ALL_SUCCEEDED":
         {
                return {...state,interestList:action.payload}
         }
    }
    return state;
}