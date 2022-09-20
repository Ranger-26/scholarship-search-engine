import DataFrame from "dataframe-js";
const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

let df = new DataFrame()
DataFrame.fromCSV('http://myurl/myfile.csv').then(d => {
    df = d
});



//req.query
app.get('/getInfo', (req, res) => {
    let query = req.body.query;

})

app.listen(3000)