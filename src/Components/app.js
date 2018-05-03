import React,{Component} from 'react';
import Home from './Home/Home';
import About from './About/About';
import Profile from './Profile/Profile';
import FAQ from './FAQ/FAQ';
import Gallery from './Gallery/Gallery';
import Header from './Other/Header';
import Searchfriend from './Searchfriend/Searchfriend';
import Footer from './Other/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component{
    render(){
         return(
            <Router>
    		      <Switch>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/faq' component={FAQ}/>
                    <Route exact path='/gallery' component={Gallery}/>
                    <Route exact path='/searchfriend' component={Searchfriend}/>
                    <Route component={DefaultContainer}/>
      		    </Switch>
    	      </Router>
             
         )
    }
}

const DefaultContainer = () =>(
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )