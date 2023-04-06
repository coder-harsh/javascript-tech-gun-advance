//abhi tak humne variable ko as a argument pass kiya hain
/*
function add(num1, num2) {
    console.group(num1 + num2);
}


add(10, 20);  //30


//callback function se ek function k andr dusra function kaise pass karte hain as a parameter


function sayhello() {
    console.log("Hello");
}
function add(num1, num2, callback) {  //callback name se sayhello function receive hoga
    // sayhello();  //hum direct kyon nhi call kar liye sayhello function ko
    console.group(num1 + num2);
    callback();
}


let a = 10;
let b = 20;

add(a, b, sayhello); //30  //Hello

//callback function benefit is we can pass 2 functiondirectly even with diffrent parameter. but diirect function call karne se ek hi function calll hoga. parameter v nhi change kar sakte hain.


//ye ajax,asynchronus m kam aata hain, mostly


//hum callback function as a ananymous function v pass akr sakte hain.

//ananomus function normal and arrow function se bana sakte hain.
*/
//ananomus function v pass kr sakte hain as a parameter. sbse jyda anonumus function use karte hain call back function m
function sayhello() {
    console.log("Hello");
}
function add(num1, num2, callback) {
    console.group(num1 + num2);
    callback();
}


let a = 10;
let b = 20;

add(a, b, sayhello); //30  //Hello

add(30, 5, function () {
    console.log("Bye..........."); //Bye...........
});