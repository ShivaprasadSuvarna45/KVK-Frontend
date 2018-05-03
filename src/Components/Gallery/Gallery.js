import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import API_UTIL from "../../API/Api";
import store from "../../Store/store";
import {loginUSer} from "../../Store/Actions/LoginAction";
import {registerUSer} from "../../Store/Actions/RegisterAction";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Gallery extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width:"100%"}}>
                <Header/>
                    <div className="container" style={{paddingTop:"3%",paddingBottom:"3%"}}>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1992</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1993</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">1994</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1995</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}}>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1996</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1997</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">1998</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1999</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}} >
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2000</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2010</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">2012</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2015</p>
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>

                <Footer/>
            </div>
        )
    }
}

export function mapStateToProps(state){
	return {
		
	}
}

export function mapDispatchProps(dispatch)
{
	return bindActionCreators({
		loginUSer,
		registerUSer
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchProps)(Gallery)