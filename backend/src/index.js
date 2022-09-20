const Df = require("dataframe-js");
const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

let data = new Df.DataFrame(Df.data, Df.columns)
Df.DataFrame.fromCSV('backend/scholarshipdata.csv').then(d => {
    data = d
});

console.log(data)
//req.query
app.get('/getInfo', (req, res) => {
    let query = req.body.query;
    
})

// app.listen(3000)