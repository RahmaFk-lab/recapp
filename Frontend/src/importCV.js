import { Link, Redirect } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import './App.css';
import axios from'axios';
import{message} from 'antd' ;
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import img from './uploading.png'

function beforeUpload(file) {
    if(file!==''){
      var typeFile=file.type.split('.').pop();
      const isJpgOrPng = file.type === 'application/pdf';
      if (!isJpgOrPng) {
        alert("Vous ne pouvez importer que des fichiers PDF");
      }
      const isLt2M = file.size / 1024 / 1024 < 3;
      if (!isLt2M) {
        alert("PDF must smaller than 3MB!");
      }
      return isJpgOrPng && isLt2M;
    }
    else{
      message.warning('Sélection votre CV svp!');
      return false;
    }
  
  }
  var Extracted_Data;
const ImportCV = ()=> {
    const [file, setFile] = useState('');
   const [filename, setFilename] = useState('Coisir un fichier');
  // const [uploadedFile, setUploadedFile] = useState({});
  // const [message, setMessage] = useState('');
  // const [uploadPercentage, setUploadPercentage] = useState(0);
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Extracted_Data, setExtracted_Data] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  
  
  
  const history = useHistory();
  const onSubmit = async e => {
   // localStorage.removeItem("dataCV");
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      console.log(formData)
      const verif= beforeUpload(file)
      console.log(file)
      console.log(verif)
      


      if (verif){
            try {
              setLoading(true)
                          const res = await axios.post('http://localhost:4000/uploadcv', formData, {
                            headers: {
                              'Content-Type': 'multipart/form-data'
                            },
                          
                           }).then(response=>{
                             alert(response.data.msg)
                           setExtracted_Data(response.data.cv)
                                  setOk(true)
                           }).catch((error)=>{console.log(error);});                   
                } 
                catch (err) {
                            console.log(err);
                             }
              } 
        
  };


  return (
    <div className="App">
      {ok && <Redirect
            to={{
            pathname: "/formCv",
            state: { datacv: Extracted_Data }
          }
        }/>}
     <nav class="navbar navbar-expand-lg navbar-primary bg-light">
            <div class="container-fluid">
    <a class="navbar-brand" href="/">REC-INOV</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
              <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/importcv">Espace Candidat</a>
              </li>
              <li class="nav-item">
                    <a class="nav-link" href="/inscrirec">Espace Entreprise</a>
              </li>
              <li class="nav-item">
                    <a class="nav-link" href="/home">A propos</a>
              </li>
        </ul>
      </div>
    </div>
</nav>
          <h2>Bienvenue dans l'espace candidat </h2>
          <h2>Importer votre CV! </h2>
                <div className="upload-container" align-items= "center">
                        <div className="border-container">
                           <div>
                           <img src={img} alt="" width="50px" />
                           </div>
                        
                            <form action="/uploadcv" method="post" onSubmit={onSubmit} >
                           
                            <div class="input-group mb-3">
                                                      
                  <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={onChange}/>
                                                              
   </div>
         <div className="button">
                                                        
            <button  id='btn' type='submit'   value='Upload' className='btn btn-primary btn-block mt-4 col-lg-4' > Analyser mon CV</button>
    </div> </form>
           </div>
                </div>
                
                { loading && <div>
                  <h4>Traitement en cours ...</h4>
                <div class="spinner-border m-5" role="status"></div>
                </div>} 
        </div>
       
    
  );
}

export default ImportCV;
