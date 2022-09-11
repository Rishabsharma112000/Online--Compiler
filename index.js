const express = require('express');
const app = express();
app.use(express.static('public'));
const useRoutes = require('./routers/user');
app.use(express.urlencoded());
app.use('/',useRoutes);


const Server = app.listen(3001,(err)=>{
    if(err){
        alert("Server Error",err);
        console.log("Server Error",err);
    }
    else{
        console.log("Server start",Server.address().port);

    }
})