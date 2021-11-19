/*const http = require("http");
const server = http.createServer(function(req, res) {
    console.log(`user visited ${req.url}`);
    res.end("Hello!")
    
});


console.log("listening on http:localhost:3000")
server.listen(4000)*/


//with express

/*const express  = require("express");

const app = express();

app.get("/",function(req, res){
    res.end("Welcome to my site!")
});


app.get("/complement",function(req, res){
    res.end("You look nice today")
});


app.listen(3000);
console.log("Listening on http://localhost:3000")*/

 
//////  With a Framework called Express

/*const express  = require("express");
const path = require("path");


const complements = [
    "Hi Frank",
    "This is musty",
    "That's beatiful",
    "You're a good man",
    "Today is raining"
]


function getRandomComplement(){
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex]
}

const app = express();

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/complement",function(req, res){
    res.json({
        complement: getRandomComplement()
    })
    .end()
});

app.use("/public",express.static("./public"));

app.listen(4000)
console.log("Listening on http://localhost:4000")*/



//Other way example

/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/



//My try jaja
const express  = require("express");
const app = express();

const port = 6000;

app.get("/",function(req, res){
    res.send("Welcome to my test!")
});



app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`)
})


