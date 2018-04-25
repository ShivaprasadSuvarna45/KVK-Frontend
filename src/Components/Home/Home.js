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
              <div id="myCarousel" className="carousel slide" data-ride="carousel">

                  <ol className="carousel-indicators" style={{bottom:"0px"}}>
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
										<li data-target="#myCarousel" data-slide-to="3"></li>
										<li data-target="#myCarousel" data-slide-to="4"></li>
                  </ol>


                  <div className="carousel-inner" style={{height:"400px"}} >
                      <div className="item active" style={{height:"400px"}}>
                        <p className="home_carosal_desc">Where we learnt the alphabet of language</p>
                        <img src="./public/images/KVK1.jpg" alt="KVK1" style={{width:"100%",height:"400px"}}/>
                      </div>

                      <div className="item" style={{height:"400px"}}>
                        <p className="home_carosal_desc">And the Math for Life</p>
                        <img src="./public/images/KVK2.jpg" alt="KVK2" style={{width:"100%", height:"400px"}}/>
                      </div>

                      <div className="item" style={{height:"400px"}}>
                        <p className="home_carosal_desc">Played as if there was no morrow</p>
                        <img src="./public/images/KVK3.jpg" alt="KVK3" style={{width:"100%", height:"400px"}}/>
                      </div>

											<div className="item" style={{height:"400px"}}>
                        <p className="home_carosal_desc">Grew amidst the bounties of nature</p>
                        <img src="./public/images/KVK4.jpg" alt="KVK4" style={{width:"100%", height:"400px"}}/>
                      </div>

											<div className="item" style={{height:"400px"}}>
                        <p className="home_carosal_desc">And made lifelong friends</p>
                        <img src="./public/images/KVK6.jpg" alt="KVK5" style={{width:"100%", height:"400px"}}/>
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
                <div className="col-sm-8 col-lg-8" style={{padding:"30px"}}>
                    <div style={{textAlign:"center"}} ><img src="./public/images/KVK_logo.png" style={{width:"250px",height:"200px"}} /></div><br/>
                    <p className="home_description">Yes. It is. Happening. On the 22nd of December 2016, a group of dapper men and elegant women from all over the world will gather at the Karnataka Regional Engineering College, Surathkal.</p>
                    <p className="home_description">The 1987 monsoon season was in full flow. 350 wide-eyed girls and boys from all over the country made their way to this college on the beach. To study engineering, they would have told you. In the years that followed, these young men and women learnt to experience and appreciate mess food, sunsets on the beach (or maybe sunrises?), night-outs, weekly SAC movies, food supplements (Basheer, Purusha,…), spiritual nourishment, music, photography, sports, cultural fests, rock shows, cosy library corners and so much more. In the midst of all this activity, they found the time to write some exams and earn their engineering degrees.</p>
                    <p className="home_description">And then they left. Dispersed to the nine winds like so many fungal spores. Carrying some of the best moments and memories of their lives, and some of their most cherished and valued friendships.</p>
                    <p className="home_description">And now, a full circle later, KREC calls again!
So mark the dates in your calendars, ladies and gentlemen. We will meet on campus, from the 22nd to the 24th of December, 2016. To celebrate our time together at KREC, to toast to the 25 years that have gone by, to renew ourselves and our friendships.</p>
                    <p className="home_description">Be there. With your families. Relive your story.</p>
                </div>
								
                <div className="col-sm-3 col-lg-3" style={{padding:"30px",paddingTop:"22.5%",marginLeft:"30px"}}>
											<p className="home_description">Lots Of Friends are coming</p>
                      <span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>1990-2000</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
											    <span className="sr-only">50</span>
											  </div>
											</div>

											<span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>2000-2010</span><br/>
											<div className="progress">
											  <div className="progress-bar" role="progressbar" aria-valuenow="70"
											  aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
											    <span className="sr-only">75</span>
											  </div>
											</div>

											<span style={{float:"left"}}>Batch</span>
                      <span style={{float:"right"}}>2010-2015</span><br/>
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
									<img src="./public/images/chethan_profile.png" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249666/KVK/chethan2.jpg"/>
									<img src="./public/images/chethan_profile.png" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249681/KVK/chethan3.jpg"/>
									<img src="./public/images/chethan_profile.png" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249690/KVK/chethan4.jpg"/>
									<img src="./public/images/chethan_profile.png" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249694/KVK/chethan5.jpg"/>
									<img src="./public/images/chethan_profile.png" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
								</div>
						</div>
						<div style={{position:"relative"}}>
								<div style={{width:"250px",height:"250px",position:"relative"}}>
									<img style={{width:"100%",height:"100%",borderRadius:"5px"}} src="https://res.cloudinary.com/dldgtfchi/image/upload/v1524249714/KVK/chethan6.jpg"/>
									<img src="./public/images/chethan_profile.png" style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
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
