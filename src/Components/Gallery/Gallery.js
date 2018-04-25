import React,{ Component } from 'react';
import Footer from '../Other/Footer';
import Header from '../Other/Header';

export default class Gallery extends Component{
    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.location){
            if(this.props.location.state){
                if(this.props.location.state.gotToSearch){
                    var myDiv = $("#searchdiv");
                    var scrollto = myDiv.offset().top + (myDiv.height() / 2);
                    myDiv.animate({ scrollTop:  scrollto});
                }
            }
        }
    }
    render(){
        return(
            <div style={{width:"100%"}}>
                <Header/>
                    <div className="container" style={{paddingTop:"6%",paddingBottom:"3%"}}>
                        <p className="subtext">Batch 1990 - 2000</p>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}}>
                        <p className="subtext">Batch 1990 - 2000</p>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{paddingBottom:"3%"}} >
                        <p className="subtext">Batch 1990 - 2000</p>
                        <div className="row">
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                            <div className="col-sm-3 col-lg-3">
                                <img src="http://res.cloudinary.com/dldgtfchi/image/upload/v1524683650/KVK_grp.jpg" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div id="searchdiv" style={{paddingLeft:"6%",paddingBottom:"2%"}}>
                        <p className="subtext"> Search Friends : </p>
                        <input className="gallery_search_design" type="text" placeholder="By Batch"/>
                        <input className="gallery_search_design" type="text" placeholder="By Name"/>
                    </div>    
                <Footer/>
            </div>
        )
    }
}