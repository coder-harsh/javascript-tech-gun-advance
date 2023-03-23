
/*function talk(msg) {
    console.log(msg);
}


talk("hello"); //hello

//now we forgot to pass the parameter
talk(); //undefined


//default parameter means kuchh pass na ho to kuchh default pass hone chahiye.
function talk(msg = "hi") { //agar str h to "" m denge. agar normal no h to msg=2 is tarh denge
    console.log(msg);
}


talk(); //hi
talk("bro"); //bro
talk(3); //3
*/
//means jb kuchh parameter nhi pass kare to function ka by default argument set karna taki undefiend nhi aaye.



function talk(msg = "hi", num = 3) {
    console.log(msg);
    console.log(num);
}
talk("hero");  //hero
talk(); //hi 3
talk("hk", 4);  //hk,4
talk(6);  //6 3