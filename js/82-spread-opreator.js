//spread operator v ... se hi defined hota h. like rest parameter


/*
rest parameter used in function to store parameter in array

spread opeartor is used to open any iterable object like array. array ko kholne k liye



let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// hum chahte ki array 2 m array1 k element v include kare
array2 = [4, 5, 6, ...array1];
console.log(array2); //(6) [4, 5, 6, 1, 2, 3] i.r array1 ko open karke rakh diya. hum pahle v spread operator laga sakte hn.
array2 = [...array1, 4, 5, 6];
console.log(array2);  //(6) [1, 2, 3, 4, 5, 6]


array2 = [4, ...array1, 5, 6];
console.log(array2);  //(6)  [4, 1, 2, 3, 5, 6]
*/

//hum chahe to array ko add v kar sakte hn
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
array3 = [...array1, ...array2];
console.log(array3);  //(6) [1, 2, 3, 4, 5, 6]