import React,{Component} from 'react';
import {BrowserRouter as Router , Link ,Route } from 'react-router-dom'

export default class Header extends Component{
	constructor(props){
		super(props)

		this._submitmail = this._submitmail.bind(this);
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
		this._regOpen = this._regOpen.bind(this);

		this.state = {
			submitState: false,
			login:false
		}
	}
	componentDidMount(){

	}

	_submitmail(){
		console.log("Hi");
		this.setState({submitState:true})

	}
	_regOpen(){
		console.log("Hi");
		this.setState({submitState:false})
	}
	_logout(){
		console.log("Hi");
		this.setState({login:false})
	}

	_login(){
		console.log("Hi");
		this.setState({login:true})
	}

	_renderLogin(){
		if(this.state.login){
			return(
				<ul className="nav navbar-nav" style={{float:"right"}}>
					<li><Link className="head_font_color" to="/">Home</Link></li>
					<li><Link className="head_font_color" to="/About">About</Link></li>
					<li><Link className="head_font_color" to="/Profile">My Profile</Link></li>
					<li onClick={this._logout}><Link className="head_font_color" to="/">Logout</Link></li>
				</ul>
			)
		}
		else{
			return(
				<ul className="nav navbar-nav" style={{float:"right"}}>
					<li><Link className="head_font_color" to="/">Home</Link></li>
					<li><Link className="head_font_color" to="/About">About</Link></li>
					<li><Link className="head_font_color" to="/FAQ">FAQ</Link></li>
					<li><Link className="head_font_color" to="/Gallery">GALERY</Link></li>
					<li><Link className="head_font_color" to="/Profile">My Profile</Link></li>
					<li><a className="head_font_color" href="#" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">Register</a></li>
					<li className="dropdown removpos">
							<a className="dropdown-toggle head_font_color" data-toggle="dropdown" href="#">Login
							<span className="caret"></span></a>
							<div className="dropdown-menu dropdwn_setting">

									<form>
											<p>Email</p>
											<input type="email" placeholder="Enter email id" className="modal1_inputemail" style={{width:"250px"}}/><br/><br/>
											<p>Password</p>
											<input type="password" placeholder="Enter password" className="modal1_inputemail" style={{width:"250px"}}/>
											<br/><br/>
											<button onClick={this._login} type="submit" className="modal1_submit" style={{width:"250px",marginTop:"15px"}}>Submit</button>
									</form>
								</div>

					 </li>
				</ul>
			);
		}
	}

	render(){
		if(this.state.submitState === false){
			this.modalData = <div className="modal-content" style={{marginTop:"30px"}}>
												<div className="modal-header modal1_head" style={{border:"none",textAlign:"center"}}>
													<button type="button" className="close close_btn" data-dismiss="modal">&times;</button>

												</div>
												<div className="modal-body" style={{textAlign:"left",paddingLeft:"98px"}}>
													<span className="modal-title modal1_head">Enter your Email ID to Register</span><br/><br/>
													<input type="email" placeholder="Enter email id" className="modal1_inputemail"/><br/><br/>
													<span className="modal-title modal1_head">Enter your Batch</span><br/><br/>
													<input type="text" placeholder="passed out year" className="modal1_inputemail"/><br/><br/>
													<span className="modal-title modal1_head">Enter your Name</span><br/><br/>
													<input type="text" placeholder="Enter Name" className="modal1_inputemail"/><br/><br/>
												</div>
												<div className="modal-footer modal1_bottom_container" style={{border:"none",textAlign:"center"}}>
													<button type="button" style={{marginRight:"9%"}} className="modal1_submit" onClick={this._submitmail}>Submit</button>
												</div>
											</div>
		}
		else {
			this.modalData = <div className="modal-content" style={{marginTop:"30px"}}>
												<div className="modal-header modal1_head" style={{border:"none",textAlign:"center"}}>
													<button type="button" className="close close_btn" data-dismiss="modal" onClick={this._regOpen}>&times;</button>
													<img src="./images/sucess.png" style={{width:"80px",height:"80px",marginTop:"15px"}} />
												</div>
												<div className="modal-body" style={{textAlign:"center",}}>
													<div className=".modal1_thanks">
													<p style={{width:"75%",paddingLeft:"20%"}}>Thanks for registering. You will receive an email with user ID and Password</p>
												</div></div>
												<div className="modal-footer modal1_bottom_container" style={{border:"none",textAlign:"center"}}>
												</div>
											</div>
		}


		return (
				<div style={{width:"100%"}}>
					<nav className="navbar navbar-inverse head_nav_style" style={{borderRadius:0,marginBottom:0}}>
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand" href="#"></a>
							</div>
							{this._renderLogin()}
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
