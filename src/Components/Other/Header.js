import React,{Component} from 'react';
import {BrowserRouter as Router , Link ,Route } from 'react-router-dom'
import store from "../../Store/store";
import {loginUSer} from "../../Store/Actions/LoginAction";
import {registerUSer,changeRegState} from "../../Store/Actions/RegisterAction";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import API_UTIL from "../../API/Api";

class Header extends Component{
	constructor(props){
		super(props)

		this._submitmail = this._submitmail.bind(this);
		this._submitAllData = this._submitAllData.bind(this)
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
		this._regOpen = this._regOpen.bind(this);
		this.changeRegisterState = this.changeRegisterState.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.state = {
			islogin:false,
			regDeails : {
				email: '',
				batch: '',
				name:''
			},
			isTop: true,
			checked : true,
		}
	}
	componentDidMount(){
		let isTop = false;
		document.addEventListener('scroll', () => {
			if (window.scrollY < 100) {
				$("#headnav").addClass("navtransparent");
				//$(".navbar-inverse").css("background","transparent");
			}
			else{
				$("#headnav").removeClass("navtransparent");
				//$(".navbar-inverse").css("background","#fff");
			}
		  });

	}

	handleCheck() {
		this.setState({checked: !this.state.checked});
	}

	_submitAllData(){
		let regVals = {	};
		let myreg = document.getElementById("regemail").value.trim();
		regVals.email = myreg.toLowerCase();
		regVals.batch = document.getElementById("regbatch").value.trim();
		regVals.name = document.getElementById("regname").value.trim();
		regVals.phone = document.getElementById("regphone").value.trim();
		API_UTIL.registerNewUser(regVals);
	}

	_submitmail(){
		let regVals = {	};
		let myreg = document.getElementById("regemail1").value.trim();
		regVals.email = myreg.toLowerCase();
		API_UTIL.registerUser(regVals);
	}
	_regOpen(){
		//console.log("Hi");
	}
	changeRegisterState(){
		store.dispatch({type:"CHANGE_REG_STATE"});
	}
	_logout(){
		//this.setState({islogin:false});
		store.dispatch({type:"LOGOUT_USER"});
	}

	_login(){
		let loginCred = {};		
		//this.setState({islogin:true});
		let shdlwrcase = document.getElementById("loginemail").value.trim();
		loginCred.email = shdlwrcase.toLowerCase();
		loginCred.password = document.getElementById("loginpassword").value.trim();
		API_UTIL.loginUser(loginCred);
	}

	_renderLogin(){
		if(this.props.islogin){
			return(
				<ul id="newid" className="nav navbar-nav navblack" style={{float:"right",paddingTop:"27px",background: "#fff"}}>
					<li><Link className="head_font_color" to="/">Home</Link></li>
					<li><Link className="head_font_color" to="/Searchfriend">SearchFriend</Link></li>
					<li><Link className="head_font_color" to="/About">About</Link></li>
					<li><Link className="head_font_color" to="/FAQ">FAQ</Link></li>
					<li><Link className="head_font_color" to="/Gallery">Gallery</Link></li>
					<li><Link className="head_font_color" to="/Profile">My Profile</Link></li>
					<li onClick={this._logout}><Link className="head_font_color" to="/">Logout</Link></li>
				</ul>
			)
		}
		else{
			return(
				<ul id="newid" className="nav navbar-nav navblack" style={{float:"right",paddingTop:"27px",background: "#fff"}}>
					<li><Link className="head_font_color" to="/">Home</Link></li>
					<li><a className="head_font_color" href="#" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">Register</a></li>
					<li className="dropdown removpos">
							<a className="dropdown-toggle head_font_color" data-toggle="dropdown" href="#">Login
							<span className="caret"></span></a>
							<div className="dropdown-menu dropdwn_setting" style={{marginTop:"-30px",marginRight:"23px"}}>

									<form>
											<p>Email</p>
											<input id="loginemail" type="email" placeholder="Enter email id" className="modal1_inputemail" style={{width:"250px"}}/><br/><br/>
											<p>Password</p>
											<input id="loginpassword" type="password" placeholder="Enter password" className="modal1_inputemail" style={{width:"250px"}}/>
											<br/><br/>
											<button onClick={this._login} type="button" className="modal1_submit" style={{width:"250px",marginTop:"15px"}}>Submit</button>
									</form>
								</div>

					 </li>
				</ul>
			);
		}
	}

	render(){
		if(this.props.myregstate === false){
			if(this.state.checked){
				this.enrollData = (<div>
										<span className="modal-title modal1_head">Enter your Email ID to Register</span><br/><br/>
										<input id="regemail1" type="email" placeholder="Enter email id" className="modal1_inputemail" /><br/><br/>
									</div>);
				this.enrollBtn = (<div><button type="button" style={{marginRight:"9%"}} className="modal1_submit" onClick={this._submitmail.bind(this)}>Submit</button></div>);
			}
			else{
				this.enrollData = (<div>
										<span className="modal-title modal1_head">Enter your Email ID to Register</span><br/><br/>
										<input id="regemail" type="email" placeholder="Enter email id" className="modal1_inputemail" /><br/><br/>
										<span className="modal-title modal1_head" >Enter your Batch</span><br/><br/>
										<input id="regbatch" type="text" placeholder="Your Batch – X pass year" className="modal1_inputemail"/><br/><br/>
										<span className="modal-title modal1_head" >Enter your Name</span><br/><br/>
										<input id="regname" type="text" placeholder="Enter Name" className="modal1_inputemail"/><br/><br/>
										<span className="modal-title modal1_head" >Enter your Phone number</span><br/><br/>
										<input id="regphone" type="text" placeholder="Enter Phone Number" className="modal1_inputemail"/><br/><br/>
									</div>);
				this.enrollBtn = (<div><button type="button" style={{marginRight:"9%"}} className="modal1_submit" onClick={this._submitAllData.bind(this)}>Submit</button></div>);

			}
			this.modalData = <div className="modal-content" style={{marginTop:"30px"}}>
												<div className="modal-header modal1_head" style={{border:"none"}}>
													<button type="button" className="close close_btn" data-dismiss="modal" onClick={this.changeRegisterState.bind(this)}>&times;</button>
													<div style={{paddingLeft:"14%",paddingTop:"10%"}}><input type="checkbox" onChange={this.handleCheck.bind(this)}  defaultChecked={this.state.checked}/> <span> : For enrolled user</span></div>
												</div>
												<div className="modal-body regPad" style={{textAlign:"left"}}>
													{this.enrollData}
												</div>
												<div className="modal-footer modal1_bottom_container" style={{border:"none",textAlign:"center"}}>
													{this.enrollBtn}
												</div>
											</div>
		}
		else {
			this.modalData = <div className="modal-content" style={{marginTop:"30px"}}>
												<div className="modal-header modal1_head" style={{border:"none",textAlign:"center"}}>
													<button type="button" className="close close_btn" data-dismiss="modal" onClick={this._regOpen}>&times;</button>
													<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524741632/bitmap.png" style={{width:"80px",height:"80px",marginTop:"15px"}} />
												</div>
												<div className="modal-body" style={{textAlign:"center",}}>
													<div className=".modal1_thanks">
													<p style={{width:"75%",paddingLeft:"20%"}}>{this.props.regMsg}</p>
												</div></div>
												<div className="modal-footer modal1_bottom_container" style={{border:"none",textAlign:"center"}}>
												</div>
											</div>
		}


		return (
				<div style={{width:"100%"}}>
					<nav className="navbar navbar-inverse head_nav_style" id="headnav" style={{height:"108px",position:"fixed"}}>
						<div className="container-fluid">
							<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{top:"25px"}}>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>                        
							</button>
							<a className="navbar-brand" href="#">
									<img style={{width:"115px",height:"94px",marginTop:"-7px"}} src="http://res.cloudinary.com/dldgtfchi/image/upload/v1525245186/logo.png" />
							</a>
							</div>
							<div className="collapse navbar-collapse" id="myNavbar">
								{this._renderLogin()}
							</div>
						</div>
						</nav>

					<div id="myModal" className="modal fade" role="dialog">
						<div className="modal-dialog">

									{this.modalData}

						</div>
					</div>
				</div>
			)
	}
}

export function mapStateToProps(state){
	return {
		myregstate : state.RegisterState.isregisterd,
		regMsg : state.RegisterState.regMsg,
		islogin : state.LoginState.islogin
	}
}

export function mapDispatchProps(dispatch)
{
	return bindActionCreators({
		loginUSer,
		registerUSer,
		changeRegState,
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchProps)(Header)