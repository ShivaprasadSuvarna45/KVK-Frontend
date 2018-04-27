import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
export default class About extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
      <div style={{width:"100%"}}>
      <Header/>
      <div className="container padAbt">

        <p className="text-about">About</p>

        <p className="text">
        Chota school Bada Reunion is the reunion event of the all students of Kendriya Vidyalaya Kudremukh across batches 1978-2015.
        </p>

        <p className="text">Mining activity has ceased in Kudremukh now for over a decade and the place hardly has any employees from the company there anymore. The Kudremukh township bears no resemblance to the bustling project that we grew up in. The school that we studied in is now closed, forever.</p>

        <p className="text">We have set up an “Association of Persons” titled “NITK 1991 Batch Reunion” with the organizing batchmates as authorized signatories (any two jointly) to sign agreements, operate the bank accounts, and appoint event managers, agencies, auditors etc.</p>

        <p className="text">The reunion is to bring the alumni of school together for a day, for them to meet, renew old bonds, forge new personal and professional ties and felicitate our teachers who laid the foundations for the learning that has enabled us to lead our lives the way we have.</p>

        <p className="subtext">Governance</p>

        <p className="text">We have setup a bank account at __________ operated jointly by _________________________ for collecting contributions and paying suppliers for the event.
        </p>

        <p className="text">
        All contributions and expenses will be tracked and records kept for the same. Any alumni who wishes to have a look at the expenses and account books can reach out to us and do so.
        </p>

        <p className="text">If there is an eventual surplus the same will be donated for a charitable cause as contribution from the Alumni of KVK.</p>

        <p className="subtext">Estimated Expenses and Minimum Contributions</p>

        <p className="text">We have been in discussions and negotiations with hotels, resorts, convention centres, caterers, event managers, sound and light suppliers, professional music and entertainment groups, DJs, photographers, souvenir suppliers etc. to estimate the expenses for the reunion. The estimated expenses are as follows</p>

        <table>
            <thead>
            <tr>
                <th>SL No.</th>
                <th>Description</th>
                <th>Estimated Expenses</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Venue and All Day Food</td>
                <td>7.75L</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Decoration and Theme based Setting of the venue, Stages, Lights, Sound, Event Management</td>
                <td>4.5L</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Souvenirs (Reunion Memorabilia and Goodies) for Alumni and Teacher Felicitation with Souvenirs</td>
                <td>4L</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Contingency</td>
                <td>0.5L</td>
            </tr>
            <tr>
                <td></td>
                <td>Total</td>
                <td>16.75L</td>
            </tr>
            </tbody>
        </table>

        <p className="text">To work out the suggested minimum contribution per alumni we have worked on the assumption that about 200 alumni, 35 spouses and 25 teachers will be attending.</p>

        <p className="text">The suggested minimum contribution in Rupees per alumni is detailed below. The relatively younger ones amongst have a lower suggested contribution.</p>
        <p className="text">All of you are welcome to contribute more than the minimum suggested amounts below.</p>
        <table>
            <tr>
                <td>Alumni who passed X standard (in KVK or otherwise) in the year 2005 or earlier</td>
                <td>7750</td>
            </tr>
            <tr>
                <td>Alumni who passed X standard (in KVK or otherwise) in the year 2006 or later</td>
                <td>5750</td>
            </tr>
            <tr>
                <td>Spouse of Alumni</td>
                <td>4250</td>
            </tr>
        </table>

        <p className="text">The additional contribution from you will go towards higher budgetary outlay for Teacher souvenirs, taking care of travel and stay for some teachers if there is a need, better outlay for decoration, sets, music and event management and such aspects that will make the day more special and memorable. </p>
        <p className="text">Those alumni who wish to attend but have genuine difficulty in meeting the minimum suggested contribution can reach out to us. We will try and work out to the extent possible.</p>
        <p className="text">Please note that the above expenses do not include alcoholic drinks or non-alcoholic beverages. Drink coupons will be available separately at the venue. We will be working with the venue on an optimal way to make these available.</p>

        <p className="subtext">Payments and Payment Updates</p>
        <p className="text">Please make your payments by 31st of May 2018 – the last day for booking your place at the reunion by making payments. </p>
        <p className="text">You need to pay using NEFT/UPI to the bank details mentioned above and update the payment reference numbers in your “Profile”. We are not using a payment gateway to save on payment gateway charges which can be used for reunion purposes.</p>
        <p className="text">We will be verifying the payment reference details submitted by you with the bank statements and publishing the “Payment Received List” on a regular basis.</p>
        <p className="text">We urge you to complete your payment early and not wait till the end. The earlier we receive 200 confirmed alumni payments we can start the work towards booking of venues and all other related activity. We have just two months to complete all the tasks required for August 11th 2018 – and every extra day matters.</p>

      </div>
      <Footer/>
      </div>
    )
  }
}
