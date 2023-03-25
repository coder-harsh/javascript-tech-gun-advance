/*
greet(); //abhi ye error nhi diya bcs js ne serially file 1 2 3 ko read kiya.

so the problem is you have to remember the file order.

isi chij ko solve kiya h module ne


//module javascript ka tukre tukre m ek file h.

//module folder k andr user.js isliye file h bcs hum user se related js ka code user.js m rakhenge.

//account.js m account se related js ka code rakhenge.

//isse file ko manage karne m asan hota h.

//user.js jbtk kisi v file ko permission nhi deta tbtk user.js ko dusre file m export import nhi kr sakte.

import { name } from "../modules/user.js";//import name variable from modules/user.js
import { code } from "../modules/user.js";
//import { age } from "../modules/user.js";  //abhi v error aayega bcs. humne age variable ko export keyword nhi lagaya h.

console.log(name);  //Harsh
code(); //code function ka console coding print karega

//agr jo variable ko export keyword nhi lagte hain aur dusre file m access kareg to not defined error aayega

//console.log(age); //87-3-modules.js:26 Uncaught ReferenceError: age is not defined


//agr hume 100 chije import karna rahe to 100 chij nhi likenege but ek shotcut h.

import { withdraw, deposit } from '../modules/account.js'; //agar same line dubara declare kareneg to error aayega withdraw is already been imported. aur jb tk koi v error rahega tb tk ye line execute nhi hoga.

withdraw();  //Amount deducted
deposit(); //Amount updated

//import ki tarah export m v shotcut h multiple chij ko export karne k liye.

//hum function ko rename v kar sakte hain
import { name, withdraw } from "../modules/user.js";
import { withdraw as wd, deposit } from '../modules/account.js';  //withdraw as wd: rename withdraw function to wd

withdraw(); //withdraw function of user.js is called.
wd(); //Amount deducted. dono name se function ko call kr skate hain agar same function dono file m na rahe toh.
deposit(); //Amount updated


// function ko rename karne ki kya jarurat padi

suppose withdraw function user.js m v h to error aayega withdraw function is already been declared.

so hum agar same name ka function 2 file m v h to hum use import karke rename kar lenge aur use karenge.


//agar 100 variable function import karna h toh upr wala shotcut v complex ho jayega

import * as usr from '../modules/user.js'; //user.js m jitne bhi chije export ki gyi h unnko import karo. user.js m jisme export nhi laga h. wo * se import nhi hoga.


//code();  //Uncaught ReferenceError: code is not defined. abhi kam nhi karega bcs. hume usr name se import karna hoga.

usr.code();  //coding
usr.withdraw(); //withdraw function of user.js is called.
console.log(usr.name); //Harsh

import * as acc from '../modules/account.js';

acc.withdraw();  //Amount deducted. if there is same function in diff file so no need to rename bcs we call them with usr/acc
console.log(acc.account_type); //saving



//module wale javascript i.e user.js and account.js m ek default function v likh sakte hain.


import { default as deffun } from '../modules/user.js';  //default ka koi name nhi h user.js m but import krte time ek name dena mandatory h.

deffun(); //default function called..


//defult function k use
//agar koi countdown plugin h to hum use default function bna denge koi v use apne default function ka name k hisab se call kar lega. 87 35 min tech gun js palylist adv.

//agr aisa function jo same name se 2 file m h to us function ko default function bana do taki hamari majburi hogi ki hum default function ko ek name deke call kare isse garbad hone ke less chnace rahe.


//hum account.js ko user.js k andr v call kar sakte hain. abhi tak hum 87-3 module.js m user.js aur account.js ko call kar rahe the.

import { code } from '../modules/user.js';

code(); //coding //account withdraw function called(withraw function of account.js)


//agreegating modules ka example.

// ab hum modules / user.js and account.js ka use nhi karenge.

import { circle } from "../module/shapes/circle.js";
import { square } from "../module/shapes/square.js";
import { triangle } from "../module/shapes/triangle.js";



circle();  //Circle function called...
square(); //square function called...
triangle(); //triangle function called...
*/
//hum module ka andr bahut sara functionality likhte hain. to hume yahan phir se import import likhna padega..
//to isko bhi hum modular i.e aggregate moduling kar sakte hain.

import { circle, square, triangle } from "../module/shape.js";  //hu ab indivisual file se hi sbko import kar lenge . i.e hum chahte h ki ek hi file s sbko import kar le naki 3 se.

circle();  //Circle function called...
square(); //square function called...
triangle(); //triangle function called...


