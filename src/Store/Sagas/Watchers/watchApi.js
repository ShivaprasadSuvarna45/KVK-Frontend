import {takeEvery} from 'redux-saga/effects';
import {fetchAvatar,fetchInterest,fetchSchedule} from '../Triggers/fetchApi';
export function* watchAvatar(){
    yield takeEvery("AVATAR_GET_ALL",fetchAvatar);
}
export function* watchSchedule(){
    yield takeEvery("SCHEDULE_GET_ALL",fetchSchedule);
}
export function* watchInterest(){
    yield takeEvery("INTEREST_GET_ALL",fetchInterest);
}