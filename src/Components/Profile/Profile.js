import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import cloudinary from 'cloudinary';
export default class Profile extends Component{

	constructor(props){
        super(props);
        this.state ={
            default_src:"http://res.cloudinary.com/dldgtfchi/image/upload/v1524131050/KVK/profile.png",
        }
        this.previewProfileImage = this.previewProfileImage.bind(this);
        this.uploadProfileToCloudinary = this.uploadProfileToCloudinary.bind(this);
    }

    componentDidMount(){
        cloudinary.config({ 
            cloud_name: 'dldgtfchi', 
            api_key: '132714543514181', 
            api_secret: 'vE6kExM67asY6EV1VmZRJU0-sFQ' 
        });
    }
    
    _triggerFile(){
        $("#profile_id").click();
    }

    uploadProfileToCloudinary(imageFile){
        let _that = this;
        var formData = new FormData();
        debugger;
        formData.append('file', imageFile);
        cloudinary.uploader.upload(imageFile, function(result) { 
            _that.setState({default_src:result.secure_url});
        });
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

  render(){
    return(

      <div style={{width:"100%"}}>
          <Header/>
          <div className="container-fluid" style={{paddingLeft:"10%"}}>
              <h3 style={{paddingLeft:"5%",paddingTop:"3%"}}>My Profile</h3>
              <div className="row">
                  <div className="col-sm-4 col-lg-4" style={{textAlign:"center !important",marginTop:"10px"}}>
                        <div style={{textAlign:"center",paddingTop:"10px"}}>
                          <img src={this.state.default_src} id="profile_img" onClick={this._triggerFile} alt="KVK" style={{width:"200px",height:"200px",display:"block",margin:"auto",padding:"10px",backgroundColor:"rgb(216, 216, 216)",cursor:"pointer"}} />
                          <input id="profile_id" type="file" style={{visibility:"hidden"}} onChange={this.previewProfileImage.bind(this)} />
                        </div>
                  </div>
                  <div className="col-sm-8 col-lg-8" style={{textAlign:"left",marginTop:"25px"}}>
                        <input className="profile_inputs" type="text" placeholder="Name" /><br/><br/><br/>
                        <input className="profile_inputs" type="text" placeholder="Branch"/><br/><br/><br/>
                        <input className="profile_inputs" type="text" placeholder="Bangalore"/><br/><br/><br/>
                        <input className="profile_inputs" type="text" placeholder="country"/><br/><br/><br/>
                  </div>
              </div>
          </div>

          <div style={{padding:"100px",paddingLeft:"16%",paddingTop:"10px"}}>
            <p className="profile_desc">Journey Since Graduation</p><br/>
            <p className="profile_desc">Describe your life after KREC - what you have been doing professionally and personally in the subsequent 25 years. This will go into the E-book that will be given to each alumni. Feel free to elaborate, it works best if it is limited to about half a page (A4) or less.</p>
            <br/>
            <textarea className="profile_textarea"></textarea><br/><br/>
            <div className="row" style={{width:"72%"}}>
                <div className="col-sm-4 col-lg-4">
                    <span>Would like to attend the event?</span><br/><br/>
                    <input type="radio" name="group1" value="attending" checked/> <span>Attending</span><br/>
                    <input type="radio" name="group1" value="notAttending"/> <span>Not Attending</span><br/>
                    <input type="radio" name="group1" value="notDecided"/> <span>Not Decided</span>
                </div>
                <div className="col-sm-4 col-lg-4">
                    <span>Expected Arrival</span><br/>
                    <input className="profile_arrival" type="text" /><br/>
                    <span>Meal Preference</span><br/>
                    <input className="profile_arrival" type="text" /><br/><br/>
                    <span>Coming with Spouse?</span><br/>
                    <input className="profile_arrival" type="text" /><br/>
                </div>
                <div className="col-sm-4 col-lg-4">
                    <span>Expected Arrival time</span><br/>
                    <input className="profile_arrival" type="text" /><br/>
                    <span>T-Shirt Size</span><br/>
                    <input className="profile_arrival" type="text" /><br/>
                    <span>Number of accompanying family members (excluding you)</span><br/>
                    <input className="profile_arrival" type="text" /><br/>
                </div>
            </div>
						<div style={{marginTop:"40px"}}>
								<p className="profile_Accom">Accommodation  Preference - 1</p>
								<select className="profile_Accom_dropDown">
									<option value="volvo">Basic Hotel-near surathkal</option>

								</select>
						</div>
						<div style={{marginTop:"20px"}}>
								<p className="profile_Accom">Accommodation  Preference - 2</p>
								<select className="profile_Accom_dropDown">
									<option value="volvo">Start Hotel in Mangalore</option>

								</select>
						</div>
						<div style={{marginTop:"20px"}}>
								<p className="profile_Accom">Accommodation  Preference - 3</p>
								<select className="profile_Accom_dropDown">
									<option value="volvo">Will make our own arrangement</option>

								</select>
						</div>
						<div style={{marginTop:"40px"}}>
								<p className="profile_Accom">My Contribution (in rupees)</p>
								<p style={{fontSize:"16px",letterSpacing:"1px"}}>Suggested amount is Rs10,000 for indivuduals and Rs13,000 for alumini with families</p>
								<p style={{fontSize:"16px",letterSpacing:"1px"}}>If you are an overseas alumini, please convert your contribution to equivalent amount in Indian Rupees.</p>
								<input className="profile_Accom_dropDown profile_amts" type="text" placeholder="15000.00" />
								<p className="profile_Accom">Payment Date:</p>
								<input className="profile_Accom_dropDown profile_amts" type="date" name="paymentDate" />
								<p className="profile_Accom">Paid Viad</p>
								<input className="profile_Accom_dropDown profile_amts" type="text" placeholder="NEFT" />
								<p className="profile_Accom">Confirmation Code</p>
								<input className="profile_Accom_dropDown profile_amts" type="text" placeholder="N256160186654768 N256160186728582" />
								<br/><br/>
								<button type="button" className="profile_update_btn">Update</button>
						</div>
          </div>
          <Footer/>
      </div>
    )
  }
}
