import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer  from './Reducers/reducer';
import indexSaga from './Sagas/indexSaga';
import {AvatarAction} from './Actions/AvatarAction';
import {InterestAction} from './Actions/InterestAction';
import {ScheduleAction} from './Actions/ScheduleAction';
const sagaMiddleware = createSagaMiddleware()
let store={};
/*
   Redux-Store:Data Structure which stores application data 
*/

if(process.env.NODE_ENV=="production")
{
    //Avoiding  Devtools to run on Production
       store=createStore(reducer);
       //Registering All Sagas to Store
        //sagaMiddleware.run(indexSaga);
        store.dispatch({type:"ADD"})
}
else{
    // logger adds REDUX event logs to console
    store=createStore(reducer,applyMiddleware(logger));
        //sagaMiddleware.run(indexSaga);
        store.dispatch(AvatarAction());
        //store.dispatch(InterestAction())
        //store.dispatch(ScheduleAction())
}

export default store;