/*
export let name = "Harsh";  //export keyword se dusre file ko permission dete hain ki mera file ka chij access kro
let age = 27;  //isko dusre file m use nhi kar sakte bcs permission nyhi diye h.


export function code() {
    console.log("coding");
}

function cook() {
    console.log(cooking);
}


export function withdraw() {
    console.log("withdraw function of user.js is called.");
}

//module wale javascript i.e user.js and account.js m ek default function v likh sakte hain.

export default function () {  //default function ka koi name nhi hota h same like ananomus function. isme export v laggana jaruri h bcs hum isse export k liye hi bna rahe hain nhi to error dega export k liye. har module js file m ek default function rah sakta h.
    console.log("default function called..");
}
*/
import { withdraw } from './account.js'; //pura path ki jarurat nhi bcs account.js & user.js same filder m hi h.
export let name = "Harsh";
let age = 27;

export function code() {
    console.log("coding");
    //hum ek module k andr dusre module ka chij bhi call kar sakte hain
    withdraw();  //87-3-modules.js m user.js ka code() ko call karne p withdraw function of account.js bhi call hoga.
}

function cook() {
    console.log(cooking);
}