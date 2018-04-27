import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';

export default class FAQ extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{width:"100%"}}>
                <Header/>
                <div className="container" style={{paddingTop:"6%",paddingBottom:"2%"}}>
                    <p className="subtext">What is this website about?</p>
                    <p className="text">This is the website for the Chota School Bada Reunion - of the alumni of Kendriya Vidyalaya Kudremukh from 1978 to 2015.</p>

                    <p className="subtext">How do I register for this website?</p>
                    <p className="text">If you have not enrolled yourself into the KVK database enrolment, then you need to register giving the details about yourself, the year you passed your X (whether in KVK or elsewhere as we are using X pass as the reference year), your father’s name (Kudremukh being the small place it was most of us knew each other’s families), your email address and phone number. </p>
                    <p className="text">The details you entered will be verified and post verification (It will take 3-4 days) you will receive a OTP in your registered email to login to the website.</p>
                    <p className="text">If you have already enrolled yourself into the KVK database, then you do not need to register. We have your details. Just enter the email address you gave at the time of enrolment and you will receive the login and password in your mailbox.</p>

                    <p>What do I do the first time I login to the site?</p>
                    <p className="subtext">When You login to the site the first time:</p>

                    <ul>
                        <li><p className="text">Upload your profile photo (Put up a good one as others will see this photo of yours first when they browse through the profiles)</p></li>
                        <li><p className="text">Upload some more photographs maybe some from the past in Kudremukh and some more recent ones. These will automatically show up when folks are browsing through the people and the gallery.</p></li>
                        <li><p className="text">Write a few lines about your journey from KVK to now.</p></li>
                        <li><p className="text">And Tick the “Yes I am attending” the reunion. That’s the option your friends would like you to tick the most, else you will be missed.  We would not like to take “Not Attending” as an answer unless serious global issues prevent you from attending.</p></li>
                        <li><p className="text">Change your password to something you can remember more easily.</p></li>
                    </ul>
                    <p className="text">You are now set to explore more of the site – like see who else has uploaded his profile from your batch, see the official gallery etc.</p>

                    <p className="subtext">What else can I do with the website?</p>
                    <p className="text">Well you can browse and search for who from your batch are attending. You can check for friends who you want to meet and reach out to them to join the reunion. </p>
                    <p className="text">You must indicate the size of your jacket/hoody for the souvenir. Inputs from here will be used for ordering.</p>
                    <p className="text">Once you make your payment you need to update the transfer references and the amount transferred, in your profile page.</p>
                    <p className="text">Let us know your professional background. This will help us arrange the professional meet-ups we are planning around specific topics.</p>
                    <p className="text">Blog – write about memories and anecdotes on KVK and Kudremukh. Write a tribute to a teacher. Many would like to read and learn about your experiences.</p>

                    <p className="subtext">Are there guidelines for content for the website or blog?</p>
                    <p className="text">In general be civic about your posts. On topics keep it to theme of reunion, the school, Kudremukh, work, family. Content that is deemed offensive will be removed by the moderators of the website.</p>
                </div>
                <Footer/>
            </div>
        );
    }
}