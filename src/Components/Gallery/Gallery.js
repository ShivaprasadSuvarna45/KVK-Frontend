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
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div style={{width:"100%"}}>
                <Header/>
                    <div className="container searchfriend" style={{paddingBottom:"3%"}}>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1986</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527157378/IMG-20180404-WA0014.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1986</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527157486/IMG-20180417-WA0001.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">1987</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527157692/IMG-20180428-WA0014.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1988</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527157875/IMG_20180419_114349.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}}>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1988</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158089/New_Doc_2018-04-19_2__1.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1989</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158300/Class10_Group_Photo_1989.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">1998</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158376/Photo_from_Vidhya_Kmukh.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1990</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158467/IMG-20180426-WA0000.jpg" style={{width:"100%",height:"190px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}} >
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1991</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158792/IMG-20140620-WA0004.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1991</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158837/IMG-20160718-WA0015.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">1992</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158907/FB_IMG_1523598939006.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1993</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527158979/IMG-20160426-WA0015.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}} >
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1993</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527159131/IMG-20160414-WA0009.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">1996</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527159757/image2.png" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">1997</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527159867/image1.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2001</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527159956/3033_82289864523_5413795_n.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{paddingBottom:"3%"}} >
                        <div className="row">
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2002</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527160101/KVK_2002.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2002</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527160136/KVK-2002.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                            <p className="subtext">2003</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527160197/2018-04-26-PHOTO-00000006.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3" style={{textAlign:"center"}}>
                                <p className="subtext">2004</p>
                                <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1527160263/KVK_2004_Batch_10B_2.jpg" style={{width:"100%"}} />
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