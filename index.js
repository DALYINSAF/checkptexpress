const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");

// app.get("/",(req,res)=>{
//     fs.readFile("./Home.html","utf8",(error,data) => {

//       error?console.log(error): res.send(data);
//      })

// })

// app.get("/", (req, res) => {
//   fs.readFile("./services.html", "utf8", (error, data) => {
//     error ? console.log(error) : res.send(data);
//   });
// });

// app.get("/", (req, res) => {
//   fs.readFile("./contact.html", "utf8", (error, data) => {
//     error ? console.log(error) : res.send(data);
//   });
// });

app.use((req, res, next) => {
  let hours = new Date().getHours();
  let day = new Date().getDay();
  if (hours < 9 || hours > 17 || day == 6 || day == 0) {
    res.sendFile(__dirname + "./close.html");
  } else next();
});

app.use(express.static(__dirname + "/public"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("the server running on port", port);
});
