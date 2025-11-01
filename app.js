const express = require("express")
const path = require("node:path");
const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
const router = require('./controller/new_messages')(messages)

app.use('/',router) 

app.get('/', (req,res)=>{
    res.send("Hello World!")
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, (error)=>{

    if (error){
        throw(error)
    };
    console.log(`The Express app is listening on ${PORT}`);
});



