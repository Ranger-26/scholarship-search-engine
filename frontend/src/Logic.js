import {default as axios} from "axios";

console.log("sending request")
let allJsonData;

axios.get('http://localhost:3000/getInfo.json').then(function (response){
    allJsonData = response.data;
    console.log(allJsonData)
})
console.log(allJsonData)

//const allJsonData = JSON.parse(rawdata)

export default allJsonData;