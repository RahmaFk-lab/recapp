const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
var child_process = require('child_process');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const mongoose = require('mongoose');
const dataCv = require('./models/datacv.model');
const dataOffre = require('./models/dataoffre.model');
const dotenv = require('dotenv');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
dotenv.config()
app.use(cors());
app.use(bodyParser.json());

const {
  createJWT,
} = require("./utils/auth");

mongoose.connect('mongodb+srv://admin:admin@cluster0.ecky0.mongodb.net/MymatchingApp?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});
///////////////////////////////// SIGNUP ///////////////////////////////////
app.post('/signup', (req, res, next) => {
  let { name, password, password_confirmation } = req.body;
  let errors = [];
  if (!name) {
    errors.push({ name: "required" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
     password_confirmation: "required",
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  const user = new User({
    name: name,
    password: password,
  });
  bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
    if (err) throw err;
    user.password = hash;
    user.save()
        .then(response => {
           res.status(200).json({
             success: true,
             result: response
           })
        })
        .catch(err => {
          res.status(500).json({
             errors: [{ error: err }]
          });
       });
    });
});
});
///////////////////////////////// SIGNIN ///////////////////////////////////
app.post('/signin', (req, res) => {
  let {password } = req.body;
  let errors = [];
  if (!password) {
    errors.push({ passowrd: "required" });
  }
  if (errors.length > 0) {
   return res.status(422).json({ errors: errors });
  }
  User.findOne({ name: name }).then(user => {
     if (!user) {
       return res.status(404).json({
         errors: [{ user: "not found" }],
       });
     } else {
        bcrypt.compare(password, user.password).then(isMatch => {
           if (!isMatch) {
            return res.status(400).json({ errors: [{ password:"incorrect" }] 
            });
           }
    let access_token = createJWT(
       user.name,
       user._id,
       3600
    );
    jwt.verify(access_token, process.env.TOKEN_SECRET, (err,decoded) => {
      if (err) {
         res.status(500).json({ erros: err });
      }
      if (decoded) {
          return res.status(200).json({
             success: true,
             token: access_token,
             message: user
          });
        }
      });
     }).catch(err => {
       res.status(500).json({ erros: err });
     });
   }
}).catch(err => {
   res.status(500).json({ erros: err });
});
});

///////////////////////Partie CV////////////////////////////////////
app.post('/uploadcv', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({msg: 'Extraction terminée' }); // msg: 'No file uploaded'
    }
    var file = req.files.file////.file.file
      //console.log(file)
 
     file.mv(`${process.cwd()}/uploadsCV/${file.name}`, err => { //change file directory 
      if (err){
        return res.status(500).send(err);
      }
    });
 
    function extract_cv(){
      child_process.execFile('python', ['maincv.py',`${process.cwd()}/uploadsCV/${file.name}`], (err, stdout, stderr) => { //call python code and use file by its name
        if (err) throw err;
        output = stdout
        console.log(output);
        return res.status(200).json({ cv:output}); //msg: 'file uploaded' , 
      });
    }

    extract_cv(file);

  });
  app.post('/addcv',(req, res) => {
    const dataofcv = new dataCv(req.body);
   

    dataofcv.save(); 

        function matching_cv(){
          child_process.execFile('python', ['matchingAlgo.py', JSON.stringify(dataofcv)], (err, stdout, stderr) => { //call python code and use file by its name
            if (err) throw err;
            resultat = stdout
         console.log(resultat);
           return res.status(200).json({matching:resultat}); //msg: 'file uploaded' , 
          });
        }
      //  console.log(JSON.stringify(dataofcv))
       matching_cv();

});


  
  




//////////////////////////
app.get('/get',(req, res) => {
  //const dataofcv = new dataCv(req.body);

  //dataofcv.save()
     
          res.status(200).json({msg: 'Data saved !'});


     
     
});
///////////////////////////////////Partie Offre//////////////////////////////////
app.post('/uploadoffre', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ }); // msg: 'No file uploaded'
  }
  var file = req.files.file////.file.file
    //console.log(file)

   file.mv(`${process.cwd()}/uploadsOFFRE/${file.name}`, err => { //change file directory 
    if (err){
      return res.status(500).send(err);
    }
  });
  function extract_offre(){
    child_process.execFile('python', ['mainoffre.py', `${process.cwd()}/uploadsOFFRE/${file.name}`], (err, stdout, stderr) => { //call python code and use file by its name
      if (err) throw err;
      output = stdout
      console.log(output);
      return res.status(200).json({msg: 'file uploaded', offre:output}); //msg: 'file uploaded' , 
    });
  }
  extract_offre(file);

});

app.post('/addoffre',(req, res) => {
  const dataofoffre = new dataOffre(req.body);

  dataofoffre.save()
      .then(offres => {
          res.status(200).json({msg: 'Data Saved',OFFRE: dataofoffre});
      })
      .catch(err => {
          res.status(400).send('adding new Offre failed');
      });
});
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
    
});