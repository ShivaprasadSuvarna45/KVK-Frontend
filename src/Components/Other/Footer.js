import React,{Component} from 'react';


export default class Footer extends Component{

	constructor(props){
		super(props)
		this.openFB = this.openFB.bind(this);
	}

	openFB(){
		window.open('https://www.facebook.com/Kendriya-Vidyalaya-Kudremukh-309258902933509/', "_blank");
	}

	render(){
		return (
			<div style={{backgroundColor:"#00a756"}} className="container-fluid">
					<div className="row" style={{padding:"30px"}}>
							<div className="col-sm-5 col-lg-5" style={{paddingLeft:"20%"}}>
								<div style={{textAlign:"left"}}>
									<p className="footer_head">CONTACT US</p>
									<span className="footer_desc">The organizing committe</span>
									<br/>
									<span className="footer_desc">can be reached at</span>
									<br/>
									<span className="footer_desc">kvk.reu@gmail.com</span>
							  </div>
							</div>
							<div className="col-sm-7 col-lg-7 visit_fb" onClick={this.openFB.bind(this)}>
									<p className="footer_head" style={{cursor:"pointer"}}>VISIT KVK PAGE ON FACEBOOK</p>
									<i className="fab fa-facebook-square footer_fbIcon" style={{cursor:"pointer"}}></i>
							</div>
					</div>
			</div>
			)
	}
}
