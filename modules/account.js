/*
let account_number = 457783422;
let account_type = "saving";

// export function withdraw() {
//     console.log("Amount deducted");
// }

// export function deposit() {
//     console.log("Amount updated");
// }
function withdraw() {
    console.log("Amount deducted");
}

function deposit() {
    console.log("Amount updated");
}


//import ki tarah export m v shotcut h multiple chij ko export karne k liye.

export { withdraw, deposit };  //  withdraw and deposit will be exported.

export { account_type };


//module wale javascript i.e user.js and account.js m ek default function v likh sakte hain.

export default function () {  //default function ka koi name nhi hota h same like ananomus function. isme export v laggana jaruri h bcs hum isse export k liye hi bna rahe hain nhi to error dega export k liye. har module js file m ek default function rah sakta h.
    console.log("account default function called..");
}
*/
//mandatory h export aur default keyword lagana default functiion m.

let account_number = 457783422;
let account_type = "saving";

export function withdraw() {
    console.log("account withdraw function called");
}

function deposit() {
    console.log("Amount updated");
}

