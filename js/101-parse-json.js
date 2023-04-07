//how to parse json data

//server se jo data retiurn hoga wo json sttring format m hoga



let data = `{
    "Name": "Harsh",
    "Age": 22,
    "isstudent": true,
    "passpor": null,
    "p_lang": [
        "c",
        "c++",
        "java"
    ],
    "address": {
        "city": "Bgs",
        "state": "Delhi",
        "pin": 851127
    }
}`;


// json string ko js object babane ka ek functtion h

let dObj = JSON.parse(data);  //convert json string to js object
console.log(dObj['Age']);  //22
console.log(dObj['Name']);  //Harsh
console.log(dObj['p_lang'][2])  //java
console.log(dObj['address']['state']) //Delhi