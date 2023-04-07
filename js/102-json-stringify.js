//now send data to server
//server ko hum ek a object data nhi send kar sakte use as a json send karenge

let student = {
    name: "Harsh",
    age: 25,
    city: "BGS"
}




let jData = JSON.stringify(student); //convert js object to json data
console.log(jData); //{"name":"Harsh","age":25,"city":"BGS"} : this is json string