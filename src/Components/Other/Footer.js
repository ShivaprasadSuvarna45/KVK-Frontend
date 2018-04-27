import React,{Component} from 'react';


export default class Footer extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div style={{backgroundColor:"#4a4a4a"}} className="container-fluid">
					<div className="row" style={{padding:"30px"}}>
							<div className="col-sm-5 col-lg-5" style={{paddingLeft:"20%"}}>
								<div style={{textAlign:"left"}}>
									<p className="footer_head">CONTACT US</p>
									<span className="footer_desc">The organizing committe</span>
									<br/>
									<span className="footer_desc">can be reached at</span>
									<br/>
									<span className="footer_desc">KVK.info@.com</span>
							  </div>
							</div>
							<div className="col-sm-7 col-lg-7 visit_fb">
									<p className="footer_head">VISIT KVK PAGE ON FACEBOOK</p>
									<i className="fab fa-facebook-square footer_fbIcon"></i>
							</div>
					</div>
			</div>
			)
	}
}
