import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import Slider from "react-slick";
import {BrowserRouter as Router , Link ,Route } from 'react-router-dom'

export default class Home extends Component{

	constructor(props){
    super(props);
    this.state = {
      gotToSearch : true,
    }
	}

	componentDidMount(){
	}

	render(){
		var settings = {
			lazyLoad: 'ondemand',
		  slidesToShow: 3,
		  slidesToScroll: 1,
			autoplay: true,
  		autoplaySpeed: 1500,
			arrows:false
    };
		return (
      <div style={{width:"100%"}}>


          <div className="container" style={{width:"100%", padding:0}}>
              <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">

                  <ol className="carousel-indicators" style={{bottom:"0px"}}>
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
										<li data-target="#myCarousel" data-slide-to="3"></li>
										<li data-target="#myCarousel" data-slide-to="4"></li>
                  </ol>


                  <div className="carousel-inner" style={{height:"541px"}} >
                      <div className="item active" style={{height:"541px"}}>
                        <p className="home_carosal_desc">Where we learnt the alphabet of language</p>
                        <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683847/KVK1.jpg" alt="KVK1" style={{width:"100%",height:"541px"}}/>
                      </div>

                      <div className="item" style={{height:"541px"}}>
                        <p className="home_carosal_desc">And the Math for Life</p>
                        <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524684042/KVK4.jpg" alt="KVK2" style={{width:"100%", height:"541px"}}/>
                      </div>

                      <div className="item" style={{height:"541px"}}>
                        <p className="home_carosal_desc">Played as if there was no morrow</p>
                        <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683975/KVK3.jpg" alt="KVK3" style={{width:"100%", height:"541px"}}/>
                      </div>

											<div className="item" style={{height:"541px"}}>
                        <p className="home_carosal_desc">Grew amidst the bounties of nature</p>
                        <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524684413/KVK_12.jpg" alt="KVK4" style={{width:"100%", height:"541px"}}/>
                      </div>

											<div className="item" style={{height:"541px"}}>
                        <p className="home_carosal_desc">And made lifelong friends</p>
                        <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524684136/KVK6.jpg" alt="KVK5" style={{width:"100%", height:"541px"}}/>
                      </div>
                  </div>


                  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                  </a>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row" style={{backgroundColor:"#4a4a4a",paddingTop:"15px",paddingBottom:"13px"}}>
              <div className="col-xs-7 col-sm-7" style={{textAlign:"center"}}>
                  <div>
                    <span className="rewindFont">Rewind Reunite Relive</span><br/>
                    <span className="countdownFont">The count down has begun. Scroll down to see the details!</span>
                  </div>
              </div>
              <div className="col-xs-5 col-sm-5">
                  <div className="row">
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span className="home_countdown_letter">365</span>
                          </div>
                          <span className="home_days">DAYS</span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span className="home_countdown_letter">13</span>
                          </div>
                          <span className="home_days">HOURS</span>
                          </div>
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span className="home_countdown_letter">48</span>
                          </div>
                          <span className="home_days">MINUTES</span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span className="home_countdown_letter">45</span>
                          </div>
                          <span className="home_days">SECONDS</span>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8 col-lg-8" style={{padding:"30px",paddingTop:"40px"}}>
                    
                    <p className="home_description">No one in this world is rich enough to buy his own childhood and youth back. Only old friends help to recreate those moments from time to time.</p>
                    <p className="home_description">And to do this - The first grand reunion of all of us who went to study in Kendriya Vidyalaya Kudremukh is happening on August 11th 2018 at Bengaluru – for you to Relive the years spent at the school and Kudremukh in a one day time-lapse, if you will.</p>
                    <p className="home_description">From 1978 to 2015 the school was the nursery that nurtured and shaped young minds. The harvest from that nursery is now spread out across the world engaged in their pursuit of life. However far we may have come from there, the school and the place remain an inseparable part of our lives.</p>
                    <p className="home_description">While we cannot go back there as the school is closed and Kudremukh is now a reserve forest area the magic of our childhood will be recreated on August 11th 2018 at the “Chota school Bada Reunion”</p>
                    <p className="home_description">Be there. With your spouses. Relive the time of your life.</p>
                </div>
								
                <div className="col-sm-3 col-lg-3" style={{padding:"30px",paddingTop:"2%",marginLeft:"30px"}}>
											<p className="home_description">Lots Of Friends are coming</p>
                      <span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>1978-1985</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
											    <span className="sr-only">50</span>
											  </div>
											</div>

											<span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>1986-1995</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
											    <span className="sr-only">75</span>
											  </div>
											</div>

											<span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>1996-2000</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"87%"}}>
											    <span className="sr-only">87</span>
											  </div>
											</div>

                      <span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>2001-2005</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"87%"}}>
											    <span className="sr-only">87</span>
											  </div>
											</div>

                      <span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>2006-2010</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"87%"}}>
											    <span className="sr-only">87</span>
											  </div>
											</div>

                      <span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>2011-2015</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"87%"}}>
											    <span className="sr-only">87</span>
											  </div>
											</div>


                </div>
                <div className="col-sm-1 col-lg-1"></div>
            </div>
        </div>

        <div style={{marginLeft:"7%",maginBottom:"2%"}}>
					<Slider {...settings}>
					  <div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249661/KVK/chethan1.jpg"/>
									<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524249652/KVK/chethan_profile.jpg" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249666/KVK/chethan2.jpg"/>
									<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524249652/KVK/chethan_profile.jpg" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249681/KVK/chethan3.jpg"/>
									<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524249652/KVK/chethan_profile.jpg" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249690/KVK/chethan4.jpg"/>
									<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524249652/KVK/chethan_profile.jpg" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249694/KVK/chethan5.jpg"/>
									<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524249652/KVK/chethan_profile.jpg" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249714/KVK/chethan6.jpg"/>
									<img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524249652/KVK/chethan_profile.jpg" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>

					</Slider>
				</div>
        <div className="home_want_to_see">
          <Link className="home_want_to_see" to={{ pathname: "/Gallery", state: { gotToSearch: true} }}>Want to see who is coming....?</Link>
        </div>
      </div>
    )
	}
}
