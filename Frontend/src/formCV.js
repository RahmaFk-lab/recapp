import React, { Fragment, useState } from 'react';
import './FormCV.css';
import axios from'axios';
import{message} from 'antd' ;
import img from './recin-transparent.png';
import { Link, Redirect } from 'react-router-dom';

var match_res;
function FormCV(props){
  //  console.log("dataCV",props.location.state.datacv);
    const printdatacv = JSON.parse(props.location.state.datacv);
    const [name, setName] = useState(printdatacv.Name);
    const [email, setEmail] = useState(printdatacv.Email);
    const [phone, setPhone] = useState(printdatacv.Phone);
    const [addr, setAddr] = useState(printdatacv.Adresse);
    const [skill, setSkill] = useState(printdatacv.Competences);
   
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);
    const [match_res, setExtracted_Data] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        console.log(`Form submitted:`);
        const newCV = {
            name : name,
            email :email,
            phone : phone,
            addr : addr,
            skill : skill
           
        };
      
        axios.post('http://localhost:4000/addcv', newCV)
        .then (response => {
            alert(response.data.msg)
            console.log(response.data.matching)
            setExtracted_Data(response.data.matching)
            setOk(true)
          //  console.log(response.data.Mat)
           // const Extracted_Data = JSON.parse(response.data.dataofcv)
        }).catch((error)=>{console.log(error);});  
       // console.log(newCV)

    }
   
 
    
   
return(
<div className="App"> 
{ok && <Redirect
            to={{
            pathname: "/CV",
            state: { match: match_res }
          }
        }/>}
                                                                           

    <div className="container1 register" >
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={img} alt="" />
                        <h3>Bienvenue une autre fois</h3>
                        <p>Modifier vos données si vous voulez</p>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"    >
                               
                            <form action="/addcv" method="post" onSubmit={onSubmit} >
                            <h3 className="register-heading">Modifier vos données :</h3>
                                <div className="row register-form" >
                                   
                                    <div className="col-md-12">
                                    <label className="form-label">Nom et prénom :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Name" value={name} onChange={(event)=>{setName(event.target.value)}} />
                                            <div class="invalid-feedback">
                                            Please choose a username.
                                            </div>
                                        </div>
                                        <label className="form-label">Adresse email :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                                        </div>
                                        <label className="form-label">Numero de téléphone :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Numero de telephone" value={phone} onChange={(event)=>{setPhone(event.target.value)}}/>
                                        </div>
                                      
                                        <label className="form-label">Ville :</label>
                                        <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Ville" value={addr} onChange={(event)=>{setAddr(event.target.value)}}/>
                                        </div>

                                        <label className="form-label" margin-left="0.5px" >Compétences :</label>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Competences *" value={skill} onChange={(event)=>{setSkill(event.target.value)}}/>
                                        </div>
                                    </div>
                                    
                                        <input type="submit" className="btnRegister"  value="Register" />
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

export default FormCV;