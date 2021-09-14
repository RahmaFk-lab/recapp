import logo from './logo.svg';
import './App.css';
import ImportCV from './importCV';
import ImportOffre from './importOffre';
import FormCV from './formCV';
import matching from './CV';
import FormOffre from './FormOffre';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cv from './CV';

import signup from './signup'
import inscrirec from './inscrirec'
import inscrican from './inscrican'
import connectrec from './connectrec'
import connectcand from './connectcand'

function App() {
  return (
    <div className="App">
      
      <Router>
     

<Route path="/formOffre" render={(props) => <FormOffre {...props}/>}/>
        <Route path="/formCv" render={(props) => <FormCV {...props}/>}/>
        <Route path="/CV" render={(props) => <Cv {...props}/>}/>
        {/* <Route path="/form" component={FormCV} /> */}
        <Route path="/importCV" exact component={ImportCV} />

        <Route path="/signup" exact component={signup} />
        <Route path="/inscrirec" exact component={inscrirec} />
        <Route path="/" exact component={inscrican} />
        <Route path="/importoffre" exact component={ImportOffre} />
        <Route path="/connexionrec" exact component={connectrec} />
        <Route path="/connexioncand" exact component={connectcand} />
        {/* <Route path="/cv" component={Cv} />  */}
      </Router>

      </div>
    
  );
}

export default App;
