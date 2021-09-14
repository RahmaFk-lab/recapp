import logo from './logo.svg';
import './CV.css';
import { Link, Redirect } from 'react-router-dom';
import React, { Component , useState} from 'react';
import onSubmit from "./importCV";
import company from './company.png'
import location from './location.png'
import star from './star.png'
import Popup from './Popup';

function Cv(props) {
  //console.log(typeof(JSON.parse(localStorage.getItem("dataCV"))),JSON.parse(localStorage.getItem("dataCV"))); 
   // console.log("matching",props.location.state.match);
    const printmatching = props.location.state.match;
    const [isOpen, setIsOpen] = useState(false);
    //console.log(printmatching);

    var myArray = [];
    printmatching.split('\n').map(function (value) {
      if (value=="")
      {
        myArray.splice(myArray,value)
      }
      else{
        myArray.push(value);
      }
      
    });
      
    //if (chordsContainer!= null){
  console.log(JSON.parse(myArray[3]))
  
 
const togglePopup = () => {
  setIsOpen(!isOpen);
}
  return (
      

<div className="App">
    
    <div className="container">
    <div className="row">
                 <div className="col-lg-10 mx-auto mb-4">
                    <div className="section-title text-center ">
                        
                        <h3 className="top-c-sep">Grow your career with us</h3>
                        <p>Envoyez vos candidatures</p>
                    </div>
                </div>
            </div>


                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        # 1
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">{JSON.parse(myArray[0])["poste"]}</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                            <li class="mr-md-4">
                                            <img src={company} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[0])["Societe"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={location} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[0])["Addr"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={star} alt="" />
                                                <i class="zmdi zmdi-money mr-2"></i> Score : {JSON.parse(myArray[0])["Score"]}
                                            </li>
                                            <li class="mr-md-4">
                                                <i class="zmdi zmdi-time mr-2"></i> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                <input onClick={togglePopup} class="btn  btn-primary " value="Postuler"/>
                                </div>
                            </div>

                            
                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        # 2
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">{JSON.parse(myArray[1])["poste"]}</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                            <li class="mr-md-4">
                                            <img src={company} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[1])["Societe"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={location} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[1])["Addr"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={star} alt="" />
                                                <i class="zmdi zmdi-money mr-2"></i> Score : {JSON.parse(myArray[1])["Score"]}
                                            </li>
                                            <li class="mr-md-4">
                                                <i class="zmdi zmdi-time mr-2"></i> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                <input onClick={togglePopup} class="btn  btn-primary " value="Postuler"/>
                                </div>
                            </div>


                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        # 3
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">{JSON.parse(myArray[2])["poste"]}</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                            <li class="mr-md-4">
                                            <img src={company} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[2])["Societe"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={location} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[2])["Addr"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={star} alt="" />
                                                <i class="zmdi zmdi-money mr-2"></i> Score : {JSON.parse(myArray[2])["Score"]}
                                            </li>
                                            <li class="mr-md-4">
                                                <i class="zmdi zmdi-time mr-2"></i> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                <input onClick={togglePopup} class="btn  btn-primary " value="Postuler"/>
                                </div>
                            </div>



                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        # 4
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">{JSON.parse(myArray[3])["poste"]}</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                            <li class="mr-md-4">
                                            <img src={company} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[3])["Societe"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={location} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[3])["Addr"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={star} alt="" />
                                                <i class="zmdi zmdi-money mr-2"></i> Score : {JSON.parse(myArray[3])["Score"]}
                                            </li>
                                            <li class="mr-md-4">
                                                <i class="zmdi zmdi-time mr-2"></i> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                <input onClick={togglePopup} class="btn  btn-primary " value="Postuler"/>
                                </div>
                            </div>



                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        # 5
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">{JSON.parse(myArray[4])["poste"]}</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                            <li class="mr-md-4">
                                            <img src={company} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[4])["Societe"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={location} alt="" />
                                                <i class="zmdi zmdi-pin mr-2"></i> {JSON.parse(myArray[4])["Addr"]}
                                            </li>
                                            <li class="mr-md-4">
                                            <img src={star} alt="" />
                                                <i class="zmdi zmdi-money mr-2"></i> Score : {JSON.parse(myArray[4])["Score"]}
                                            </li>
                                            <li class="mr-md-4">
                                                <i class="zmdi zmdi-time mr-2"></i> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0" onSubmit={onSubmit}>
                                    <input onClick={togglePopup} class="btn  btn-primary " value="Postuler"/>
                                </div>
                            </div>

                            {isOpen && <Popup
                                content={<>
                                    <b>Votre candidature a été envoyer avec succés !!</b>
                                    <p>Nous allons vous répondre dans les meilleurs délais.</p>
                                </>}
                                handleClose={togglePopup}
                                />}
                           </div>
           
                           </div>   
  );

}
export default Cv;
