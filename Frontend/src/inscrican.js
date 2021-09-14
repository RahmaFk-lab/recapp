import logo from './logo.svg';
import './signup.css';
import { Link, Redirect } from 'react-router-dom';
import React, { Component , useState} from 'react';
import axios from'axios';
import img from './recin-transparent.png';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
function inscrican(props) {
   const state = {
        email: "",
        password: "",
        msg: ""
      }
 /*    const onSubmit = (data) => {
        console.log(data);
      };

     const onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
      }; */
    
return (
<div class="row m-4">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <div class="col-4" >
            <div class="login-blue p-3 shadow-lg rounded">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" id="home-tab" data-toggle="tab" href="/inscrirec" role="tab" aria-controls="home" aria-selected="true">Recruteur</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="profile-tab" data-toggle="tab" href="/" role="tab" aria-controls="profile" aria-selected="false">Candidat</a>
                            </li>
                        </ul>
                <div class="pt-3">
                <img src={img} alt="" />
                    <h2 class="text-white ">Inscription Candidat</h2>
                   
                </div>

                <form class="mt-5">
                    <div class="form-group">
                        <input type="email" 
                            class="form-control form-control-sm bg-light" 
                            placeholder="Nom et Prénom"/>
                    </div>

                    <div class="form-group">
                        <input type="password" 
                            class="form-control form-control-sm bg-light" 
                            placeholder="Mot de Passe" />
                    </div>
   
                    <div class="form-group">
                        <input type="password" minLength="6"
                            class="form-control form-control-sm bg-light" 
                            placeholder="Confirmation Mot de Passe" />
                    </div>
                    <div class="mt-5">
                    <a  href="/connexioncand">
                        <button class="btn btn-sm btn-light col" type="button">
                            Inscription
                        </button>
                        </a>
                    </div>
                
                    <div class="mt-5">
                        <p class="text-white text-center">
                            Déja inscrit?
                            <a href="/connexioncand" class="text-warning">Cliquer ici pour se connecter</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );      
}
export default inscrican;