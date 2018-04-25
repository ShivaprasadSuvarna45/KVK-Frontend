import {fork} from 'redux-saga/effects';
import {watchAvatar,watchInterest,watchSchedule} from  './Watchers/watchApi';

export default function* indexSaga() {
    yield [
        fork(watchAvatar),
        fork(watchInterest),
        fork(watchSchedule)
    ];
}












