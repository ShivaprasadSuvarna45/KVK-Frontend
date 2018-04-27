export function SearchReducer(state={img_links: []},
    action){
    switch(action.type)
    {
         case "SEARCH_RESULT":
         {
                console.log(action.payload);
                return {...state,img_links:action.payload}   
                break;           
         }
    }
    return state;
}