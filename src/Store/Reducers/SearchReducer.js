export function SearchReducer(state={img_links: [],album_profile: []},
    action){
    switch(action.type)
    {
         case "SEARCH_RESULT":
         {
                console.log(action.payload);
                return {...state,img_links:action.payload}   
                break;           
         }
         case "SET_SLICK":
         {
                console.log(action.payload);
                return {...state,album_profile:action.payload}   
                break;           
         }
         case "SEARCH_NOT_FOUND":
         {
                //alert(action.payload);
                return {...state,album_profile:[]}   
                break;           
         }
    }
    return state;
    
}