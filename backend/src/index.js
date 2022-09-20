const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())

const fs = require('fs');

let rawdata = fs.readFileSync('./csvjson.json');
let parseddata = JSON.parse(rawdata);

app.use(cors())
//req.query
app.get('/getInfo.json', (req, res) => {
    console.log("recieved request")
    res.send(parseddata)
})

app.listen(3000)