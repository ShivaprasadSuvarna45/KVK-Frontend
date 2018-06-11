import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import API_UTIL from "../../API/Api";
import store from "../../Store/store";
import {loginUSer} from "../../Store/Actions/LoginAction";
import {registerUSer} from "../../Store/Actions/RegisterAction";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Searchfriend extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name : "",
            batch : "",
            description : "",
            profile_photo : "",
            profession : ""
        }
        this.searchResult = this.searchResult.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
    }

    renderInfo(element){
        //console.log(element);
        this.setState({profile_photo:element.profile_photo});
        this.setState({name:element.username});
        this.setState({batch:element.batch});
        this.setState({description:element.description});
        this.setState({profession:element.profession});
    }

    searchResult(){
        let searchData = {};
        searchData.batch = document.getElementById("srchBatch").value.trim();
        searchData.username = document.getElementById("srchUser").value.trim();   
        var e = document.getElementById("srchAttendr");
        searchData.attend_event = e.options[e.selectedIndex].value; 
        if(searchData.batch || searchData.username ||searchData.attend_event){
            API_UTIL.getSerachResults(searchData); 
        }   
        else{
            alert("Please enter some input")
        }
           
    }

    componentDidMount(){
        let searchData = {};
        searchData.username = "";
        searchData.attend_event = "";
        if(this.props.userDetails){
            if(this.props.userDetails.batch){
                searchData.batch = this.props.userDetails.batch;
                API_UTIL.getSerachResults(searchData);
            }
        }
    }

    render(){
        var renderImages = <div></div>
        if(this.props.img_links.length>0){
            renderImages = this.props.img_links.map((element,index) => {
                if(element.profile_photo){
                    return(
                        <div className="col-sm-3 col-lg-3 col-xs-12" style={{marginTop:"2%"}}>
                            <img src={element.profile_photo} style={{width:"100%",height:"175px",cursor:"pointer"}} data-toggle="modal" data-target="#descModal" onClick={this.renderInfo.bind(this,element)}/>
                        </div>
                    )
                }
            });
        }
        return(
            <div style={{width:"100%"}}>
                <Header/>   

                <div id="searchdiv" className="searchfriend" style={{paddingLeft:"6%",paddingBottom:"2%"}}>
                    <p className="subtext"> Search Friends : </p>
                    <input id="srchBatch" className="gallery_search_design" type="text" placeholder="By Batch"/>
                    <input id="srchUser" className="gallery_search_design" type="text" placeholder="By Name"/>
                    
                    <select id="srchAttendr" className="gallery_search_design">
                        <option value=""></option>
                        <option value="attending">Attending</option>
                        <option value="notAttending">Not Attending</option>
                        <option value="notDecided">Not Decided</option>
                    </select>
                    <button className="profile_album_btn ser_frnd_btn" onClick={this.searchResult.bind(this)} type="button">Search</button>
                </div>
                <div className="container" style={{paddingBottom:"2%",paddingLeft:"6%"}}>
                    <div className="row">
                        {renderImages}
                    </div>
                </div>

                <div className="modal fade" id="descModal" role="dialog">
                    <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-4 col-lg-4">
                                            <div style={{width:"100%"}}>
                                                <img style={{width:"100%",height:"200px"}} src={this.state.profile_photo}/>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-8 col-lg-8">
                                            <span>Name : </span><span>{this.state.name}</span> <br/><br/>
                                            <span>Batch : </span><span>{this.state.batch}</span> <br/><br/>
                                            <span>Description : </span><span>{this.state.description}</span> <br/><br/>
                                            <span>Profession : </span><span>{this.state.profession}</span> <br/><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                    </div>
                </div>
                
                <Footer/>
            </div>
        );
    }
}

export function mapStateToProps(state){
	return {
        img_links : state.SearchState.img_links,
        userDetails : state.LoginState.userDetails
	}
}

export function mapDispatchProps(dispatch)
{
	return bindActionCreators({
		loginUSer,
		registerUSer
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchProps)(Searchfriend)