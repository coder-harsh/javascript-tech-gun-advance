/*
function add(a, b) {
    return a + b;
}

let sum = add(2, 3);
console.log(sum); //5


sum = add(2, 3, 4);
console.log(sum); //5
add(2, 3, 4, 5, 6)

//hum chahte hn ki aisa function ho jisme user jitna v parameter send kre sbka sum ho jaye. abhi only 2 parameter defined kiye hn to 2 hi parameter accept karega.
//so we use rest parameter
function add(...args) {
    console.log(args);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    console.log(sum);
}

add(2, 3, 55);  //3) [2, 3, 55] 60
add(2.4, 3.3);  //2) [2.4, 3.3] 5.6999

means rest parameter user jo parameter send krta h usko ek array k form store kar leta h.

rest parameter is array of the arguments user pass.
*/
function add(...args) {  //ye ...args hi rahega na kis hum kuchh likheneg like ..hello etc.
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    console.log(sum);
}

add(2, 3); //5
add(2, 3, 2); //7