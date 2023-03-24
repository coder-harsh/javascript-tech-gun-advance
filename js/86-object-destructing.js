/*
let book = {
    name: "adv js",
    page: 200,
    price: 150
};

let name = book.name;
console.log(name);  //adv js

//normal object property access through a variable. agar bahut sara object property rahe toh. hum object destuctor ka use karte hain.


let book = {
    name: "adv js",
    page: 200,
    price: 150
};

let { name, page, price } = book;

console.log(name);  //adv js
console.log(page); //200
console.log(price); //150



//agr variable ka name change karna rahega to direct change nhi kar sakte hain array destructor ki tarah.
let book = {
    name: "adv js",
    page: 200,
    price: 150
};

let { name: title, page, price } = book;  //ab name property ka value title variable m store ho jayega

console.log(title);  //adv js


//abb hum kaise property ka default value set karte hain.

let book = {
    name: "adv js",
    page: 200,
    // price,

};

let { name, page, price = 200 } = book;

//console.log(price);  //Cannot access 'price' before initialization
console.log(price); //200  //abhi agr price ka default value nhi de toh undefined aayega

*/

//ab nested object ka object destructing

let book = {
    name: "adv js",
    page: 200,
    publication: {
        pub_name: "tech gun",
        year: 2021
    }

};

let { name, page, publication: { pub_name: pub, year } } = book;  //hum publication object ka pub_name ka value pub variable m store kara diye hain.

console.log(pub); //tech gun
console.log(year); //2021
console.log(pub_name); //pub_name is not defined bcs we give the value of pub_nme property to pub variable



//hum agar variable ka name nhi de to property hi variable bn jayega

