/*till es5
var count = 1;

// in ese6. let and const
let and var has same work
let:variable
const:constant


diff b/w var and let


jb v var se variable banate hn. to wo global object ka ek property bn jata h.
global object window h.


var count = 1;
console.log(count);
console.log(window.count); //1 window object ka property bn gaya h count



let num = 2;
console.log(num);
console.log(window.num); //undefined bcs num is not property of window object


//  diff b / w vvar and let
1. var global object(window) ka property bn jata h. let nhi. so we have to use let for creating normal variable.

2. var se koi variable dubara declare krte hn to error nhi aata h.


var count = 1;
var count;
console.log(count); //1 no error but error aana chahiye tha.



let num = 2;
let num; //uncaught SyntaxError: Identifier 'num' has already been declared (at 79-let-const.js:41:5)
*/


// const
const num = 1;
num = 3;
console.log(num); //error: Assignment to constant variable.

//hum aisa variable chahte hn jiski value kabhi galti se v na change ho to hum const se variable declare karte hn. ex pi;


