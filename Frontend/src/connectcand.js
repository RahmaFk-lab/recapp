import logo from './logo.svg';
import './signup.css';
import { Link, Redirect } from 'react-router-dom';
import React, { Component , useState} from 'react';
import axios from'axios';
import img from './recin-transparent.png';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
function connectcand(props) {
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
                <div class="pt-3">
                <img src={img} alt="" />
                    <h2 class="text-white ">Se connecter</h2>
                </div>

                <form class="mt-5">
                    <div class="form-group">
                        <input type="email" 
                            class="form-control form-control-sm bg-light" 
                            placeholder="Nom"/>
                    </div>

                    <div class="form-group">
                        <input type="password" 
                            class="form-control form-control-sm bg-light" 
                            placeholder="Mot de Passe" />
                    </div>

                    <div class="mt-5">
                    <a  href="/importcv">
                        <button class="btn btn-sm btn-light col" type="button">
                            Connexion
                        </button>
                        </a>
                    </div>
                    
                    <div class="mt-5">
                        <p class="text-white text-center">
                        Pas de compte?
                            <a href="/" class="text-warning">Cliquer ici pour s'inscrire</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );      
}
export default connectcand;