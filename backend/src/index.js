const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const fs = require('fs');

let rawdata = fs.readFileSync('./csvjson.json');
let parseddata = JSON.parse(rawdata);


//req.query
app.get('/getInfo.json', (req, res) => {
    res.send(parseddata)
})

app.listen(3000)