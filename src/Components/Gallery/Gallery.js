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
        this.searchResult = this.searchResult.bind(this);
    }
    searchResult(){
        let searchData = {};
        searchData.batch = document.getElementById("srchBatch").value.trim();
        searchData.username = document.getElementById("srchUser").value.trim();   
        var e = document.getElementById("srchAttendr");
        searchData.attend_event = e.options[e.selectedIndex].value;      
        API_UTIL.getSerachResults(searchData);    
    }
    componentDidMount(){
        if(this.props.location){
            if(this.props.location.state){
                if(this.props.location.state.gotToSearch){
                    var myDiv = $("#searchdiv");
                    var scrollto = myDiv.offset().top + (myDiv.height() / 2);
                    myDiv.animate({ scrollTop:  scrollto});
                }
            }
        }
    }
    render(){
        var renderImages = <div></div>
        if(this.props.img_links.length > 0){
            renderImages = this.props.img_links.map((image,index) => {
                return(
                    <div className="col-sm-4 col-lg-4" style={{width:"20%"}} >
                        <img src={image} style={{width:"100%"}} />
                    </div>
                )
            });
        }
        return(
            <div style={{width:"100%"}}>
                <Header/>
                    <div className="container" style={{paddingTop:"6%",paddingBottom:"3%"}}>
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
                    <div id="searchdiv" style={{paddingLeft:"6%",paddingBottom:"2%"}}>
                        <p className="subtext"> Search Friends : </p>
                        <input id="srchBatch" className="gallery_search_design" type="text" placeholder="By Batch"/>
                        <input id="srchUser" className="gallery_search_design" type="text" placeholder="By Name"/>
                        
                        <select id="srchAttendr" className="gallery_search_design">
                            <option value=""></option>
                            <option value="attending">Attending</option>
                            <option value="notAttending">Not Attending</option>
                            <option value="notDecided">Not Decided</option>
                        </select>
                        <button className="profile_album_btn" style={{marginLeft:"6%",width:"10%"}} onClick={this.searchResult.bind(this)} type="button">Search</button>
                    </div>
                    <div className="container" style={{paddingBottom:"2%",paddingLeft:"6%"}}>
                        <div className="row">
                            {renderImages}
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export function mapStateToProps(state){
	return {
		img_links : state.SearchState.img_links
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