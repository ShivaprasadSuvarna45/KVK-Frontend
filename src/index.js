import ReactDOM from 'react-dom';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import style from './stylesheets/style.scss';
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './Store/store';
import {App} from './Components/app';
//ReactDOM.render(
   
  //       <BrowserRouter> 
    //          <Provider store={store}> 
      //             <Route  path="/" component={App}/>
        //      </Provider> 
        //</BrowserRouter>,document.getElementById("root")
//)

ReactDOM.render(<App/>, document.getElementById('root'));