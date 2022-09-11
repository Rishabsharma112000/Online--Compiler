const express = require('express');
const compiler = require('compilex');

const router = express.Router();

const Option = {stats : true};
compiler.init(Option);


router.post("/compilecode", (req, res) => {
    console.log("Request Body", req.body);
    const code = req.body.code;
    const input = req.body.input;
    const language = req.body.language;
    const inputRadio = req.body.inputRadio;
  
    if (language == "C" || language == "C++") {
      if (inputRadio == "true") {
        var envData = {
          OS: "windows",
          cmd: "g++"
        };
        compiler.compileCPPWithInput(envData, code, (data) => {
          if (data.error) {
            res.send("Response Error", data.error);
          } else {
            res.send(data.output);
          }
        });
      } 
      else
      {
        var envData = {
          OS: "windows",
          cmd: "g++"
        };
        compiler.compileCPP(envData, code, (data) => {
          if (data.err) {
              
            res.send("Response Error".data.err);
          } else {
              console.log("Before Response");
              console.log("Data" , data);
            res.send(data.output);
            console.log("After Response");
          }
        });
      }
    }
  
  
  
  if (language == "Java") {
          if (inputRadio == "true") {
            var envData = {
              OS: "windows",
              cmd: "g++"
            };
            compiler.compileJavaWithInput(envData, code, (data) => {
              if (data.error) {
                res.send("Response Error", data.error);
              } else {
                res.send(data.output);
              }
            });
          } 
          else
          {
            var envData = {
              OS: "windows",
              cmd: "g++"
            };
            compiler.compileJava(envData, code, (data) => {
              if (data.err) {
                  
                res.send("Response Error".data.err);
              } else {
                  console.log("Before Response");
                  console.log("Data" , data);
                res.send(data.output);
                console.log("After Response");
              }
            });
          }
        }
      
  
  
  });
  
  router.get('/fullstat',(req,res)=>{
      compiler.fullStat((data)=>{
          res.send(data);
       })
  })
  
  
  
  
  module.exports = router;