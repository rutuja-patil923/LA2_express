const express = require("express")

var app = express()

const port = '3000'

const host = 'localhost'


//#### Route 1 #####
app.get('/*earth',function(req,res){
    res.sendFile( __dirname + "/" + "earth.jpg" )
})


//#### Route 2 #####
app.get('/sun*',function(req,res){
    res.sendFile( __dirname + "/" + "sun.jpg" )
})


//#### Route 3 #####
var array1 = function(req,res,next){
    console.log("Array 1");
    next()
};

var array2 = function(req,res,next) {
    console.log("Array 2")
    next()
}
var array3 = function(req,res) {
    res.send("We're at array 3")
}

app.get('/array',[array1,array2,array3]);



app.listen(port,host,()=>{
    console.log(`Server running on port ${port}`)
})