var express = require("express");
var app = express();
var port = require("./config").port;

app.get("/api",function(req,res){
  //可以在终端 curl localhost:3000/api 或 localhost:3000/api 测试是否正常运行
  res.send("api works!");
})


app.listen(port,function(){
  console.log("running on port "+port+"...");
})
