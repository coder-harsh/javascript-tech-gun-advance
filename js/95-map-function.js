//kisi ek array k sare element p operatiion perform karke dusre array m store kar dena.
/*
let arr = [2, 3, 4, 5, 6];

//double all element in array and store that in other array [4,6,8,10,12]

//bina map function k
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    arr1[i] = arr[i] * 2;
}

console.log(arr1);  //(5) [4, 6, 8, 10, 12]


//isi chij ko map function thoda aasan kar deta hain.

let arr = [2, 3, 4, 5, 6];

let arr1 = arr.map(function (val) {  //ananymous function se
    return val * 3;
});

console.log(arr1); //(5) [6, 9, 12, 15, 18]

*/
//ab arrow function se. ye function ko chhota kr deta h
let arr = [2, 3, 4, 5, 6];

let arr1 = arr.map((val) => val * 3);

console.log(arr1);  //(5) [6, 9, 12, 15, 18]

//ab ek line m mera kam ho gaya