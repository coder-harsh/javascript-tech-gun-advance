/*
webstorage features comes after html5.
pahle hum sirf data cookie m upload karte the.
ab 2 aur hain local and session storage

ye dono m v data key value pair m store hota hain.

there are diffrences bw these 3

local storage kabhi expire nhi hota hum manually delete karte hain

session storage tab close p delete hota hain.

store
cookie: browser+server
session storage:browser only
local storage:browser only

//see img folder for diff bw these or on google


//local storage set

localStorage.setItem('FirstName', 'Harsh');
localStorage.setItem('Location', 'BGS');


//local storage get

alert(localStorage.getItem('Location'));  //BGS

//local storage removw
localStorage.removeItem('FirstName');  //delete FirstName
*/

//sessionstorage set

sessionStorage.setItem('FirstName', 'Harsh');
sessionStorage.setItem('Location', 'BGS');

//sessionstorage get
let x = sessionStorage.getItem('FirstName');
alert(x); //Harsh

//sessionstorage remove

sessionStorage.removeItem('Location'); //delete location from session storage
