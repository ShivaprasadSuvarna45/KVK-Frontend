import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import cloudinary from 'cloudinary';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import API_UTIL from "../../API/Api";
import {loginUSer} from "../../Store/Actions/LoginAction";
import store from "../../Store/store";

class Profile extends Component{

	constructor(props){
        super(props);
        this.state ={
            default_src:"http://res.cloudinary.com/dldgtfchi/image/upload/v1524131050/KVK/profile.png",
            album_imgs : [],
            loading : false,
        }
        this.previewProfileImage = this.previewProfileImage.bind(this);
        this.uploadProfileToCloudinary = this.uploadProfileToCloudinary.bind(this);
        this.previewAlbumImage = this.previewAlbumImage.bind(this);
        this.uploadAlbumToCloudinary = this.uploadAlbumToCloudinary.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.setAllValues = this.setAllValues.bind(this);
    }

    componentDidMount(){
        cloudinary.config({ 
            cloud_name: 'doifpsy95', 
            api_key: '512551122167763', 
            api_secret: 'z-o3BS3F8VtbViNk8U9KO7lGIHo' 
        });
        console.log(this.props.userDetails);
        if(this.props.userDetails.username){
            this.setAllValues();
        }
    }

    changePassword(){
        let newDetails = {}
        newDetails.email = this.props.userDetails.email;
        newDetails.password = document.getElementById("newpwd").value.trim();
        API_UTIL.chagePassword(newDetails);
    }

    updateValues(){
        let updVal = {}
        updVal.email = this.props.userDetails.email;
        updVal.name = document.getElementById("updname").value.trim();
        updVal.branch = document.getElementById("updbranch").value.trim();
        updVal.city = document.getElementById("updcity").value.trim();
        updVal.country = document.getElementById("updcountry").value.trim();

        updVal.profile_photo = this.state.default_src;

        updVal.description = document.getElementById("upddesc").value.trim();

        var radios = document.getElementsByName('group1');        
        for (var i = 0, length = radios.length; i < length; i++)
        {
            if (radios[i].checked)
            {
                updVal.attend_event = radios[i].value;
                break;
            }
        }
        var e = document.getElementById("updmeal");
        updVal.meal_preference = e.options[e.selectedIndex].text;
        var e1 = document.getElementById("updspouse");
        updVal.spouse = e1.options[e1.selectedIndex].text;
        updVal.family_members = document.getElementById("updFamily").value.trim();      
        updVal.contribution_amount = parseInt(document.getElementById("updconamt").value.trim());      
        updVal.paid_via = document.getElementById("updpaidvia").value.trim();      
        updVal.confirmation_code = document.getElementById("updconfmcode").value.trim();      
        updVal.payment_date = document.getElementById("updpaydate").value;      
        updVal.album_imgs = this.state.album_imgs;
        
        API_UTIL.updateDetails(updVal);
    }
    
    _triggerFile(){
        $("#profile_id").click();
    }

    previewProfileImage( uploader ) {   
        let _that = this;
        console.log(document.getElementById("profile_id").files[0]);
        let imageFile = document.getElementById("profile_id").files[0];
        var oFReader = new FileReader();
        oFReader.readAsDataURL(imageFile);
        oFReader.onload = function (oFREvent) {
            _that.setState({default_src:oFREvent.target.result});
            _that.uploadProfileToCloudinary(oFREvent.target.result);
        };
        
    }

    uploadProfileToCloudinary(imageFile){
        let _that = this;
        var formData = new FormData();
        debugger;
        formData.append('file', imageFile);
        cloudinary.uploader.upload(imageFile, function(result) { 
            if(result.error){
                if(result.error.http_code == 400){
                    alert("Cannot upload image which is more than 9MB");
                }
            }
            else{
                _that.setState({default_src:result.secure_url});
            }
            
        });
    }

    _triggerAlbum(){
        $("#album_id").click();
    }

    uploadAlbumToCloudinary(imageFile){
        let _that = this;
        var formData = new FormData();
        this.setState({loading:true});
        debugger;
        formData.append('file', imageFile);
        cloudinary.uploader.upload(imageFile, function(result) { 
            //_that.setState({default_src:result.secure_url});
            console.log(result);
            _that.setState({loading:false});
            if(result.error){
                if(result.error.http_code == 400){
                    alert("Cannot upload image which is more than 9MB");
                }
            }
            else{
                _that.setState({
                    album_imgs: [..._that.state.album_imgs, result.secure_url]
                });
            }
            
        });
    }

    previewAlbumImage( uploader ) {   
        let _that = this;
        console.log(document.getElementById("album_id").files[0]);
        let imageFile = document.getElementById("album_id").files[0];
        var oFReader = new FileReader();
        oFReader.readAsDataURL(imageFile);
        oFReader.onload = function (oFREvent) {
            //_that.setState({default_src:oFREvent.target.result});
            _that.uploadAlbumToCloudinary(oFREvent.target.result);
        };
        
    }

    renderAlbums(){
        
    }
    setAllValues(){
        if(this.props.userDetails.profile_photo){
            this.setState({default_src:this.props.userDetails.profile_photo});
        }
        if(this.props.userDetails.album_imgs){
            this.setState({album_imgs:this.props.userDetails.album_imgs});
        }
        if(this.props.userDetails.username){
            document.getElementById("updname").value = this.props.userDetails.username;
        }
        if(this.props.userDetails.batch){
            document.getElementById("updbranch").value = this.props.userDetails.batch;
        }
        if(this.props.userDetails.city){
            document.getElementById("updcity").value = this.props.userDetails.city;
        }
        if(this.props.userDetails.country){
            document.getElementById("updcountry").value = this.props.userDetails.country;
        }
        if(this.props.userDetails.description){
            document.getElementById("upddesc").value = this.props.userDetails.description;
        }
        if(this.props.userDetails.attend_event){
            $('input[name="group1"][value="' + this.props.userDetails.attend_event + '"]').prop('checked', true);
        }
        
        if(this.props.userDetails.meal_preference){
            var e = document.getElementById("updmeal");
            e.options[e.selectedIndex].text = this.props.userDetails.meal_preference;
        }
        if(this.props.userDetails.spouse){
            var e1 = document.getElementById("updspouse");
            e1.options[e1.selectedIndex].text = this.props.userDetails.spouse;
        }
        if(this.props.userDetails.family_members){
            document.getElementById("updFamily").value = this.props.userDetails.family_members;
        }
        if(this.props.userDetails.contribution_amount){
            document.getElementById("updconamt").value = this.props.userDetails.contribution_amount; 
        }
        if(this.props.userDetails.paid_via){
            document.getElementById("updpaidvia").value = this.props.userDetails.paid_via;
        }
        if(this.props.userDetails.confirmation_code){
            document.getElementById("updconfmcode").value = this.props.userDetails.confirmation_code;
        }
        if(this.props.userDetails.payment_date){
            document.getElementById("updpaydate").value = this.props.userDetails.payment_date; 
        }
    }

    render(){

        console.log("Hi    " +this.state.album_imgs);
        var renderALbum = <div></div>
        if(this.state.album_imgs){
            if(this.state.album_imgs.length > 0){
                renderALbum = this.state.album_imgs.map((image,index) => {
                    return(
                        <div className="col-sm-4 col-lg-4" style={{width:"20%"}} >
                            <img src={image} style={{width:"100%",height:"120px"}} />
                        </div>
                    )
                });
                
            }
        }       


        if(this.state.loading){
            this.load = <div className="profile_loading">
                            <div className="loader"></div>
                        </div>
        }
        else{
            this.load = <div></div>
        }
        return(        
        <div style={{width:"100%"}}>
            <Header/>
            {this.load}
            <div className="container-fluid profile_container">

                <span className="myprofileheading">My Profile</span>
                <button type="button" className="modal1_submit chng_pwd_btn" data-toggle="modal" data-target="#changePasswordModal" data-backdrop="static" data-keyboard="false">Change Password</button>
                        <div id="changePasswordModal" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{marginTop:"30px"}}>
                                    <div className="modal-header">
                                        <button type="button" className="close close_btn" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body" style={{textAlign:"left",paddingLeft:"98px"}}>
                                        <span className="modal-title modal1_head" >Enter new password</span><br/><br/>
                                        <input id="newpwd" type="text" placeholder="Enter new password" className="modal1_inputemail"/><br/><br/>
                                    </div>
                                    <div className="modal-footer modal1_bottom_container" style={{border:"none",textAlign:"center"}}>
                                        <button type="button" style={{marginRight:"9%"}} data-dismiss="modal" className="modal1_submit" onClick={this.changePassword.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                <div className="row">
                    <div className="col-sm-4 col-lg-4" style={{textAlign:"center !important",marginTop:"10px"}}>
                            <div style={{textAlign:"center",paddingTop:"10px"}}>
                            <img src={this.state.default_src} id="profile_img" onClick={this._triggerFile} alt="KVK" style={{width:"200px",height:"200px",display:"block",margin:"auto",padding:"10px",backgroundColor:"rgb(216, 216, 216)",cursor:"pointer"}} />
                            <input id="profile_id" type="file" style={{visibility:"hidden"}} onChange={this.previewProfileImage.bind(this)} />
                            </div>
                    </div>
                    <div className="col-sm-8 col-lg-8" style={{textAlign:"left",marginTop:"25px"}}>
                            <input id="updname" className="profile_inputs" type="text" placeholder="Name" /><br/><br/><br/>
                            <input id="updbranch" className="profile_inputs" type="text" placeholder="Batch"/><br/><br/><br/>
                            <input id="updcity" className="profile_inputs" type="text" placeholder="Location"/><br/><br/><br/>
                            <input id="updcountry" className="profile_inputs" type="text" placeholder="country"/><br/><br/><br/>
                    </div>
                </div>

                    <div className="row" style={{paddingLeft:"8%"}}>
                        <button id="btmAlbum" className="profile_album_btn" type="button" onClick={this._triggerAlbum}>Add your memories</button><span style={{paddingLeft:"6px"}}>Photo size less than 9MB  (Click on Update button to save images)</span>
                        <input id="album_id" type="file" style={{visibility:"hidden"}} onChange={this.previewAlbumImage.bind(this)} />
                        {renderALbum}
                    </div>
            </div>

            <div className="journey_head">
                <p className="profile_desc">Journey Since Graduation</p><br/>
                <p className="profile_desc">Describe your life after KREC - what you have been doing professionally and personally in the subsequent 25 years. This will go into the E-book that will be given to each alumni. Feel free to elaborate, it works best if it is limited to about half a page (A4) or less.</p>
                <br/>
                <textarea id="upddesc" className="profile_textarea"></textarea><br/><br/>
                <div className="row" style={{width:"72%"}}>
                    <div className="col-sm-4 col-lg-4">
                        <span>Would like to attend the event?</span><br/><br/>
                        <input type="radio" name="group1" value="attending" checked/> <span style={{paddingLeft:"5%"}} >Attending</span><br/>
                        <input type="radio" name="group1" value="notAttending"/> <span style={{paddingLeft:"5%"}}>Not Attending</span><br/>
                        <input type="radio" name="group1" value="notDecided"/> <span style={{paddingLeft:"5%"}}>Not Decided</span>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                        <span>Meal Preference</span><br/>
                        <select id="updmeal" className="profile_Accom_dropDown">
                            <option value="vegetarian">Vegetarian</option>
                            <option value="nonvegetarian">Non Vegetarian</option>
                        </select><br/><br/>
                        <span>Coming with Spouse?</span><br/>
                        <select id="updspouse" className="profile_arrival">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select><br/><br/>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                        <span>Your current profession</span><br/>
                        <input id="updFamily" className="profile_arrival" type="text" /><br/>
                    </div>
                </div>

                <div style={{marginTop:"40px"}}>
                        <p className="profile_Accom">My Contribution (in rupees)</p>
                        <p style={{fontSize:"16px",letterSpacing:"1px"}}>Suggested amount is Rs10,000 for indivuduals and Rs13,000 for alumini with families</p>
                        <p style={{fontSize:"16px",letterSpacing:"1px"}}>If you are an overseas alumini, please convert your contribution to equivalent amount in Indian Rupees.</p>
                        <input id="updconamt" className="profile_Accom_dropDown profile_amts" type="text" placeholder="15000.00" />
                        <p className="profile_Accom">Payment Date:</p>
                        <input id="updpaydate" className="profile_Accom_dropDown profile_amts" type="date" name="paymentDate" />
                        <p className="profile_Accom">Paid Via</p>
                        <input id="updpaidvia" className="profile_Accom_dropDown profile_amts" type="text" placeholder="NEFT" />
                        <p className="profile_Accom">Confirmation Code</p>
                        <input id="updconfmcode" className="profile_Accom_dropDown profile_amts" type="text" placeholder="N256160186654768 N256160186728582" />
                        <br/><br/>
                        <button type="button" className="profile_update_btn" onClick={this.updateValues.bind(this)}>Update</button>
                </div>
            </div>
            <Footer/>
        </div>
        )
  }
}

export function mapStateToProps(state){
	return {
		userDetails : state.LoginState.userDetails
	}
}

export function mapDispatchProps(dispatch)
{
	return bindActionCreators({
		loginUSer,
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchProps)(Profile)