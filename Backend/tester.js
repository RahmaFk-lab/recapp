var http = require('http');
var fs = require('fs');

var formidable = require('formidable');

const PORT=8080; 
const { spawn } = require('child_process');

   

fs.readFile('index.html', function (err, html) {
    http.createServer(function(req, res) { 

 if (req.url == '/upload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.fileUploaded.path;  
      var file = files.fileUploaded
      var newpath = 'C:/test/' + files.fileUploaded.name;
       // spawn new child process to call the python script
      const childPython = spawn('python' , ['C:/test/PDF_to_text/main.py', file]);
      var dataToSend;
      // collect data from script
      childPython.stdout.on('data', function (data) {
       console.log('Pipe data from python script ...');
       dataToSend = data.toString();
      });
      // in close event we are sure that stream from child process is closed
      childPython.on('close', (code) => {
      console.log('child process close all stdio with code ${code}');
      // send data to browser
      res.sendDate(dataToSend)
      });
     
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {

        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  

  }
    }).listen(PORT);
});