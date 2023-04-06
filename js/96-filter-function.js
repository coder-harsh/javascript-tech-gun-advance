
/*let arr = [2, 22, 13, 5, 6, 61, 23, 7];

//mujhe filter karna h jitna no 10 se bde hain use dusre array m store karna hain.

// result[22, 13, 61, 23] this is work of filetr function

//isme bilkul map function ki tarah ananymmous ya arrow function v pass kar sakte hain



let arr = [2, 22, 13, 5, 6, 61, 23, 7];


let arr1 = arr.filter(val => val > 10);  //arrow function (4) [22, 13, 61, 23] jo arra ka element 10 se bada ho use arra1 m store kar do

console.log(arr1);


let arr2 = arr.filter(function (val) {
    return val > 10;
});

console.log(arr1);  //ananymous (4) [22, 13, 61, 23]

*/


//ek complex example


let team = [ //array of object
    {
        name: "Harsh",
        position: "Developer"
    },
    {
        name: "Gitesh",
        position: "Developer"
    },
    {
        name: "Saurabh",
        position: "UI Designer"
    }

];


//is array m muje wahi aadmi chahiye jo developer h.

let developer = team.filter(val => val.position == "Developer");  //ab val m array element object k roop m jayega


console.log(developer);
console.log(developer[0]);  //{name: 'Harsh', position: 'Developer'}
console.log(developer[1]);  //{name: 'Gitesh', position: 'Developer'}