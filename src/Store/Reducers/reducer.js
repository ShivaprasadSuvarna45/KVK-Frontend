import {ScheduleReducer} from './ScheduleReducer';
import {AvatarReducer} from './AvatarReducer';
import {InterestReducer} from './InterestReducer';
import {BotReducer} from './BotReducer';
import {LoginReducer} from './LoginReducer';
import {RegisterReducer} from './RegisterReducer';
import {SearchReducer} from './SearchReducer';
import {combineReducers}from 'redux';
 
 export default combineReducers({
      ScheduleState:ScheduleReducer,
      InterestState:InterestReducer,
      AvatarState:AvatarReducer,
      LoginState:LoginReducer,
      RegisterState:RegisterReducer,
      SearchState:SearchReducer,
      BotState:BotReducer
 })