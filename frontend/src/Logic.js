import {default as axios} from "axios";

console.log("sending request")
let allJsonData;

axios.get('http://localhost:3000/getInfo.json').then(function (response){
    allJsonData = response.data;
})

//const allJsonData = JSON.parse(rawdata)

export default allJsonData;