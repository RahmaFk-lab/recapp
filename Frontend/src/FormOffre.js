import React, { Fragment, useState } from 'react';
import './FormCV.css';
import axios from'axios';
import{message} from 'antd' ;
import img from './recin-transparent.png';
import Popup from './Popup';



function FormOffre(props){
    console.log("dataOffre",props.location.state.dataoffre);
    const printdataoffre = JSON.parse(props.location.state.dataoffre);
    const [email, setEmail] = useState(printdataoffre.Email);
    const [addr, setAddr] = useState(printdataoffre.Adresse);
    const [skill, setSkill] = useState(printdataoffre.Competences);
    const [mission, setMission] = useState(printdataoffre.Mission);
    const [poste, setPoste] = useState(printdataoffre.Poste);
    const [name, setName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const onChange = e => {
        setName(e.target.value);
      };

    const onSubmit = async e => {
        e.preventDefault();
        console.log(`Form submitted:`);
        const newOffre = {
            name: name,
            email :email,
            addr : addr,
            skill : skill,
            mission : mission,
            poste :poste
           
        };
      
        axios.post('http://localhost:4000/addoffre', newOffre)
        .then (response => {
            alert(response.data.msg)
            console.log(response.data.OFFRE)
           // const Extracted_Data = JSON.parse(response.data.dataofcv)
        }).catch((error)=>{console.log(error);});  
       // console.log(newCV)

    }
   
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    
    
   
return(
<div classNameName="App">                                                                        

    <div className="container register" >
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={img} alt="" />
                        <h3>Welcome</h3>
                        <p>You have to modify your own informations now!</p>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"    >
                               
                            <form onSubmit={onSubmit}> 
                            <h3 className="register-heading">Modify Your Informations :</h3>
                                <div className="row register-form" >
                                   
                                    <div className="col-md-12">
                                    <label className="form-label">Nom de la société :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Name" value={name} onChange={(event)=>{setName(event.target.value)}} />
                                        </div>
                                        <label className="form-label">Poste :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Name" value={poste} onChange={(event)=>{setPoste(event.target.value)}} />
                                        </div>
                                        <label className="form-label">Adresse email :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                                        </div>
                                       
                                      
                                        <label className="form-label">Adresse :</label>
                                        <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Ville" value={addr} onChange={(event)=>{setAddr(event.target.value)}}/>
                                        </div>
                            {/*             <label className="form-label">Description de l'offre :</label>
                                        <div className="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  value={mission} onChange={(event)=>{setMission(event.target.value)}}></textarea>
                                        
                                        </div> */}
                                        <label className="form-label" margin-left="0.5px" >Compétences :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Competences *" value={skill} onChange={(event)=>{setSkill(event.target.value)}}/>
                                        </div>
                                    </div>
                                    
                                        <input onClick={togglePopup} type="submit" className="btnRegister"  value="Register" />
                                    </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

               

            </div>
      
  
)
}

export default FormOffre;