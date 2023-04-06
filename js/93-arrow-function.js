//arrow function works same like normal function. but syntax is diffrent.
/*
//normal function
function sum(a, b) {
    return a + b;
}

let add = sum(2,3);
alert(add); //5


// arrow function
//agr ek se jyda line arrow function m ho to
// let sum = (a, b) => {
//     a *= 2;
//     return a + b;  //7
// }

//ek line ho aur sirf return ho to | arrow function ka sbse shot form
//let sum = (a, b) => a + b;


//sirf ek line h to
let sum = (a, b) => console.log(a + b);

console.log(sum(2, 3)); //5




// function double(a) {
//     return 2 * a;
// }


// let double = (a) => 2 * a;
//sirf ek parameter h to
let double = a => 2 * a;

console.log(double(10)); //20

//agr ek line ka function hota to jaise ki set timeout to hum ise arrow function bana k use krte.



function random() {
    return Math.random();
}

console.log(Math.random());


//ek v parameter na ho to

let random = () => Math.random(); //agr ek v para meter na ho to () mandatory h

console.log(Math.random());


//arrow function mostly ananymous function m kam aata hain.

//normal function
document.addEventListener('click', function () {
    console.log("clicked...");
});
*/
//arrow function like anynomus function

document.addEventListener('click', () => console.log("clicked..."));
