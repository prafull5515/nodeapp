const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello node app')
})
var port = 3030

app.listen(port,()=>{
    console.log("Server Listening at port "+ port)
})