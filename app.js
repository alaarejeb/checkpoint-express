const express = require("express");
const app = express();

const date=new Date()
const d= date.getDate()
const hour = date.getHours();
console.log(hour)
console.log(d)

const auth=true
const middelewear=(req,res,next)=>{
    if(d>=1 && d<6 && hour>9 && hour<17){
        next()
    }
    else{
        res.sendFile(__dirname+'/view/out.html')
    }
};
app.use(middelewear)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/view/contact.html");
});
app.get("/service", (req, res) => {
  res.sendFile(__dirname + "/view/service.html");
});
app.use(express.static(__dirname+'/view'));

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else console.log("server is running on port 5000");
});
