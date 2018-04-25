import {ScheduleReducer} from './ScheduleReducer';
import {AvatarReducer} from './AvatarReducer';
import {InterestReducer} from './InterestReducer';
import {BotReducer} from './BotReducer';
import {combineReducers}from 'redux';
 
 export default combineReducers({
      ScheduleState:ScheduleReducer,
      InterestState:InterestReducer,
      AvatarState:AvatarReducer,
      BotState:BotReducer
 })