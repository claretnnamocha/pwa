const http = require("http")
const express = require('express')
const fs = require("fs")

const app = express()
var port = process.env.PORT || 8081

app.use(express.static('public/'));

app.get('/', function(request, response) {
    response.sendFile(`${__dirname}/public/index.html`)
})
app.listen(port, function() {
    console.log(`Server running at http://127.0.0.1:${this.address().port}/`)
})