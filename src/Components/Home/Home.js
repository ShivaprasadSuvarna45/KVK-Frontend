import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import Slider from "react-slick";
import API_UTIL from "../../API/Api";
import store from "../../Store/store";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {BrowserRouter as Router , Link ,Route } from 'react-router-dom'

class Home extends Component{

	constructor(props){
    super(props);
    this.state = {
      gotToSearch : true,
    }
	}

	componentDidMount(){
   
    window.scrollTo(0, 0);
  
    API_UTIL.getAllRecords();
    let _that = this;

    var countDownDate = new Date("Aug 11, 2018 13:30:00").getTime();
    var x = setInterval(function() {
      
          // Get todays date and time
          var now = new Date().getTime();
          
          // Find the distance between now an the count down date
          var distance = countDownDate - now;
          
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          // Output the result in an element with id="demo"
          //document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
          $("#days").text(days);
          $("#hours").text(hours);
          $("#minutes").text(minutes);
          $("#seconds").text(seconds);
          // If the count down is over, write some text 
          if (distance < 0) {
              clearInterval(x);
              //document.getElementById("demo").innerHTML = "EXPIRED";
          }
      }, 1000);
  }

	render(){

    this.render_slick = <div></div>
    this.render_table = <div></div>
    //console.log(this.props.album_profile);
    if(this.props.album_profile.length > 3){
          this.render_slick = this.props.album_profile.map((ele,index) => {
            return(              
                    <div style={{position:"relative"}}>
                        <div className="hme_mvng">
                          <img style={{width:"100%",height:"100%",borderRadius:"5px"}}  src={ele.album_img}/>
                          <img src={ele.profile_photo} style={{width:"50px",height:"50px",position:"absolute",right:"6px",bottom:"3%",borderRadius:"50%"}} />
                        </div>
                    </div>
            )
          });
    }
    
    if(this.props.islogin){
        this.render_table = <div className="home_prg_divv">
                                <p className="home_prg_pp">PROGRAM</p>
                                <table id="home_prg_tbl">
                                  <tbody>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>8:30 AM to 10:30 AM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Arrivals and Registrations – Collect your badges and coupons</p> 
                                      <p>Meet & Greet / Hugs & Kisses with old pals you can recall and …those you cannot recall (but they can!).</p>
                                      <p>Dig into Breakfast or just have coffee or tea</p>
                                      <p>Take Selfies/Groufies wherever you like or specially at the photo stations.</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>10:30 AM to 12.30 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Gather in the banquet hall</p> 
                                      <p>The formal ceremony starts with Lighting of the lamp and Invocation to the Almighty</p>
                                      <p>Some of our teachers and alumni share a few words</p>
                                      <p>Felicitation of teachers present for the occasion</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>12:30 onwards till 6 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Formal Group photos of each batch begins and will continue through till 6 PM while the rest of events continue in parallel.</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>12:30 PM to 2:30 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Relaxed Lunch with friends, teachers – New conversations, Peals of laughter on old times and new.</p> 
                                      <p>Walk around and forge new ties – personal and professional</p>
                                      <p>More pictures, More Selfies, More Memories to take back for life</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>2:30 PM to 4 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Cultural activities and competitions</p> 
                                      <p>Bring on the competitive spirit of the Houses at school for the CCA activities.</p>
                                      <p>Be like then.</p>
                                      <p>Entertain and be Entertained!</p>
                                      <p>Batch-wise Group photos continue at the Group Photo booth</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>4PM to 6 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Sports Activities and competitions</p> 
                                      <p>As the August sun goes down – time for some outdoors.</p>
                                      <p>Gents - Put on the Sacks to race and Ladies - keep the lemon on the spoon and plenty more.</p>
                                      <p>Theme based Professional meet-up tracks on the Sidelines – meet and network with alumni around various themes/tracks</p>
                                      <p>Batch-wise Group photos continue at the Group Photo booth</p>
                                      <p>High Tea starts at 5 PM</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>6:30 PM to 8:30 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>Gala Evening with Sunset Sangeeth</p> 
                                      <p>The darkness of sunset gives way to the array of lights, strobes and smoke machines on the stage.</p>
                                      <p>Enjoy the musical performance of professional Singers.</p>
                                      <p>Relax with your fav drink and friends on tables laid out; or Put on your dancing shoes for the dance floor.</p>
                                      <p>Dinner starts at 8:30 PM</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="home_tbl_dtls" style={{width:"17%"}}>8:45 PM to 10:30 PM</td>
                                    <td className="home_tbl_dtls" style={{width:"64%"}}>
                                      <p>The DJ takes over…</p> 
                                      <p>… and the Dancing continues…</p>
                                      <p>Amidst goodbyes and promises to meet again, until the next time…. <i>Kabhi Alvida Na Kehna</i></p>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                                <i>Above is an Indicative Program; May change depending on availability of resources;</i>
                             </div>
    }
    else{
          this.render_table = <div className="home_prg_divv">                                  
                                  <p className="subtext">How do I register at this website for a login?</p>
                                  <p className="text">If you have already enrolled yourself into the KVK database, then you do not need to register. We have your details. Just enter the email address you gave at the time of enrolment and you will receive the login and password in your mailbox.</p>
                                  <p className="text">If you have not enrolled yourself into the KVK database enrolment form we have been circulating since January 2018, then uncheck the "For Enrolled User" check-box and register giving the details about yourself, the year you passed your X (whether in KVK or elsewhere as we are using X pass as the reference year), your email address and phone number.</p>
                                  <p className="text">The details you entered will be verified and post verification (It will take 3-4 days) you will receive a OTP in your registered email to login to the website.</p>
                             </div>
    }

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


          <div className="container" style={{width:"100%", padding:0,paddingTop:"108px"}}>
              <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="3500">

                  <ol className="carousel-indicators" style={{bottom:"0px"}}>
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
										<li data-target="#myCarousel" data-slide-to="3"></li>
										<li data-target="#myCarousel" data-slide-to="4"></li>
                  </ol>


                  <div className="carousel-inner crsl-heigt">
                      <div className="item active crsl-heigt">
                        <p className="home_carosal_desc1">Kendriya Vidyalaya Kudremukh</p>
                        <p className="home_carosal_desc">Where we learnt the alphabet of language...</p>
                        <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1525335249/Picture1.png" alt="KVK1" style={{width:"100%"}} className="crsl-heigt" />
                      </div>

                      <div className="item crsl-heigt">
                        <p className="home_carosal_desc1">Kendriya Vidyalaya Kudremukh</p>
                        <p className="home_carosal_desc">...And the Math for Life.</p>
                        <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1525335393/Picture2.png" alt="KVK2" style={{width:"100%"}} className="crsl-heigt" />
                      </div>

                      <div className="item crsl-heigt">
                        <p className="home_carosal_desc1">Kendriya Vidyalaya Kudremukh</p> 
                        <p className="home_carosal_desc">Where we played as if there was no morrow...</p>
                        <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1525335499/Picture3.png" alt="KVK3" style={{width:"100%"}} className="crsl-heigt" />
                      </div>

											<div className="item crsl-heigt">
                        <p className="home_carosal_desc1">Kendriya Vidyalaya Kudremukh</p>
                        <p className="home_carosal_desc">Grew amidst the bounties of nature...</p>
                        <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1525335624/Picture4.png" alt="KVK4" style={{width:"100%"}} className="crsl-heigt" />
                      </div>

											<div className="item crsl-heigt">
                        <p className="home_carosal_desc1">Kendriya Vidyalaya Kudremukh</p>
                        <p className="home_carosal_desc">... And made lifelong friends</p>
                        <img src="http://res.cloudinary.com/doifpsy95/image/upload/v1525335688/Picture5.png" alt="KVK5" style={{width:"100%"}} className="crsl-heigt"/>
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
            <div className="row" style={{backgroundColor:"#00a756",paddingTop:"15px",paddingBottom:"13px"}}>
              <div className="col-xs-12 col-sm-7 col-lg-7" style={{textAlign:"center"}}>
                  <div>
                    <span className="rewindFont">Chota School Bada Reunion - Be Like Then</span><br/>
                    <span className="countdownFont">The count down has begun. Scroll down to see the details!</span>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-5 col-lg-5 ticktop">
                  <div className="row">
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span id="days" className="home_countdown_letter"></span>
                          </div>
                          <span className="home_days">DAYS</span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span id="hours" className="home_countdown_letter"></span>
                          </div>
                          <span className="home_days">HOURS</span>
                          </div>
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span id="minutes" className="home_countdown_letter"></span>
                          </div>
                          <span className="home_days">MINUTES</span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-lg-3 home_align_col_center">
                          <div className="home_countdown_block">
                              <span id="seconds" className="home_countdown_letter">45</span>
                          </div>
                          <span className="home_days">SECONDS</span>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="container-fluid">
    
            <div className="row">
                <div className="col-sm-12 col-lg-12 col-xs-12 school_desc">
                    
                    <p className="home_description">No one in this world is rich enough to buy his own childhood and youth back. Only old friends help to recreate those moments from time to time.</p>
                    <p className="home_description">And to do this - The first grand reunion of all of us who went to study in Kendriya Vidyalaya Kudremukh is happening on August 11th 2018 at Bengaluru – for you to Relive the years spent at the school and Kudremukh in a one day time-lapse, if you will.</p>
                    <p className="home_description">From 1978 to 2015 the school was the nursery that nurtured and shaped young minds. The harvest from that nursery is now spread out across the world engaged in their pursuit of life. However far we may have come from there, the school and the place remain an inseparable part of our lives.</p>
                    <p className="home_description">While we cannot go back there as the school is closed and Kudremukh is now a reserve forest area the magic of our childhood will be recreated on August 11th 2018 at the “Chota school Bada Reunion”</p>
                    <p className="home_description">Be there. With your spouses. Relive the time of your life.</p>
                </div>
            </div>
        </div>
        <div style={{marginLeft:"7%",maginBottom:"2%"}}>
                  <Slider {...settings}>
                      {this.render_slick}
                  </Slider>
        </div>

        
        {this.render_table}
      </div>
    )
	}
}
export function mapStateToProps(state){
	return {
    album_profile : state.SearchState.album_profile,
    islogin : state.LoginState.islogin
	}
}

export function mapDispatchProps(dispatch)
{
	return bindActionCreators({
	
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchProps)(Home)