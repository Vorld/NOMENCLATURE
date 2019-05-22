const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var name;

var bodyParser = require('body-parser') 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

console.log('Running at Port 3000');

/*app.post('/send',function(req,res){

    var input = req.body.name;
    console.log("hi pls work");
    console.log(req.body.name);
    
    res.send("received");
    });*/
app.get('/myForm', function(req, res){ 
      var input = req.query.mytext; //mytext is the name of your input box


      var fs = require('fs');
      fs.writeFileSync('rawInput.txt', input);
        /*fs.writeFile('rawInput.txt', input, function (err) {
          if (err) throw err;
          console.log('Raw Input Saved');
          console.log('Input: '+ input);
        });*/

      
        //console.log(name);
        /*fs.readFile('nomenclature.txt', function(err, data) {
          name = data;
        });*/


      /*var graphToNomen = function(){
        console.log("graphToNomen() start");
        exec('backend.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
        });  
      }
    
      var inputToGraph = function(){
        console.log("inputToGraph() start");
        //TODO change the .exe appropriately
        exec('test2.exe', function(err, data) { 
        console.log("executed");   
        console.log(err)
        console.log(data.toString());
        });  
      }*/


      var execSync = require('child_process').execFile;
      execSync('backend.exe');
      execSync('backend.exe');
      
      console.log("\nbefore " + name);
      name = fs.readFileSync('nomenclature.txt');
      console.log("after " + name);
      //name = 'hi';

      res.sendFile(path.join(__dirname+'/answer.html'));
  }); 


  app.get('/receive', (req, res) => {
   
    res.json({ text: name.toString()});
  });

app.listen(3000)