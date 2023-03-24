/*
let book = ["ADV. JS", 200, 150];
console.log(book[0]); //ADV. JS
console.log(book[1]); //200

pahle hum array element ko aise access krte the.


//hum ab chahte hain ki har element ko ek alag variable se access kare

let book = ["ADV. JS", 200, 150];

let name = book[0];
let pages = book[1];
let price = book[2];
console.log(name); //ADV. JS
console.log(pages); //200
console.log(price); //150


//isi ka ek shotcut h array destructing
let book = ["ADV. JS", 200, 150];

let [name, pages, price, publication] = book; //array destructor ko initialize karna mandatory h. agar array ka 10 value v hota to destuctring s aasani se kar sakte hain.
console.log(name); //ADV.JS
console.log(pages);  //200
console.log(price);  //150
console.log(publication);  //undefined error nhi dega but agar variable ka value nhi rahe to undefined store kar dega. i.e publication blank rahega.


let book = ["ADV. JS", , 200, 150];
//hum bich m v blank kr sakte hain value
let [name, pages, price, publication] = book;  // hum publication ko bich m v rakh sakte hain.
console.log(name);  //ADV. JS
console.log(pages);  //undefined bcs pages is blank
console.log(price); //200
console.log(publication); //150


//extra variable ka name dalenge but value nhi hoga toh wo undefined ho jaygea



//balnk/undefined value k liye ek default value  v hota h.
let book = ["ADV. JS", 600, 200, 150];
let [name, pages = 500, price, publication] = book;   //hum pages m default value string store is trh se karenge. pages="hii"

//console.log(pages);  //default value 500 agar pages ka value na rahe to.
console.log(pages); //600


//nested array

let book = ["ADV. JS", 100, 200, ["Tech Gun", 2021]];  //nested array
let [name, pages, price, [Publication, Year]] = book;

console.log(Publication);  //Tech Gun
console.log(Year);  //2021
*/


//iska actual use kh p h


function book() {
    //do something
    return ["Adv js", 200];
}

//let name = book(); //isko hum normal var m na store karke array destructor karte hain.
//console.log(name);  //(2) ['Adv js', 200]

let [booktitle, price] = book();
console.log(booktitle);  //Adv js
console.log(price);  //200