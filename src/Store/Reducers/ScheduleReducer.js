export function ScheduleReducer(state={
    scheduleList:[]},action)
{
    switch(action.type)
    {
         case "SCHEDULE_GET_ALL_SUCCEEDED":
         {
                return {...state,scheduleList:action.payload}
         }
    }
    return state;
}