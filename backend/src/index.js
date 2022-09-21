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
    res.send(rawdata);
})

function filter(query){
    if (query === "") return parseddata;
    let newdata = []
    for (let i = 0; i < rawdata.length; i++){
        if (parseddata[i]["name of scholarship"].match(query)){
            newdata.push(parseddata[i]);
        }
    }
    return newdata;
}


app.listen(3000);