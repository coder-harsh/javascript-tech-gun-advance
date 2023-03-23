// for llop ka ek variant.

/*
koi v iterable object jaise ki array ho gaya string ho gaya usko iterate karne k liye kam m aata h.

for of m hume length jane ki jarurat nhi h. javascript khud kar lega.
*/


let score = [80, 82, 73, 95, 70];

for (let x of score) {   //score array ka ek ek element x m aayega
    console.log(x); //80 82 73 95 70
}

let hi = "Harsh Kumar";
for (let x of hi) {
    console.log(hi); //H a r s h K u m a r
}


//agar hume kisi object ko iterate karrna rahega(i.e ek ek element ko access karna) to for of ka hi use karna