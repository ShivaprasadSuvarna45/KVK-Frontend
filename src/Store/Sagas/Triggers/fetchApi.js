import {put,call} from 'redux-saga/effects';
import {getAllAvatar,getAllInterest,getAllSchedule} from '../../../API/Api';
export function* fetchAvatar(action) {
  yield put({type: "AVATAR_GET_ALL_FETCHING"})
   try {
      const user = yield call(getAllAvatar, action.payload);
      yield put({type: "AVATAR_GET_ALL_SUCCEEDED", payload: user.data});
    } 
   catch (e) {
     console.log(e);
      yield put({type: "AVATAR_GET_ALL_FAILED", message: e.message});
   }
}
export function* fetchInterest(action) {
  yield put({type: "INTEREST_GET_ALL_FETCHING"})
   try {
      const user = yield call(getAllInterest, action.payload);
      yield put({type: "INTEREST_GET_ALL_SUCCEEDED", payload: user.data});
    } 
   catch (e) {
     console.log(e);
      yield put({type: "INTEREST_GET_ALL_FAILED", message: e.message});
   }
}
export function* fetchSchedule(action) {
  yield put({type: "SCHEDULE_GET_ALL_FETCHING"})
   try {
      const user = yield call(getAllSchedule, action.payload);
      yield put({type: "SCHEDULE_GET_ALL_SUCCEEDED", payload: user.data});
    } 
   catch (e) {
     console.log(e);
      yield put({type: "SCHEDULE_GET_ALL_FAILED", message: e.message});
   }
}