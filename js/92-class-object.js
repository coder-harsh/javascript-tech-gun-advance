//js me class bad m aaya.
//es6 m class aaya.

//but internally purane jaise hi work hota hain.

//class replaces constructor function

/*
class person {

}

let person1 = new person;  //create person1 object with person class

console.log(person); //class person{}
console.log(person1); //person {}




//create constructor fumnction with class

class person {
    constructor() {
        console.log("person created..."); //person created...
    }
}

let person1 = new person; //jaise hi ovbject banaenge. class k andr constructor function automatic call ho jayega.


//jb jb objrct hoga tb tk us us object ke class ka constructor function call hoga..
let person2 = new person;  //person created...


//iska actual use h value set karne mein..
//i.e clss k property define karna, value set karna m.

class person {
    constructor(n, a) { //constructor function automatic call ho jayega.
        this.name = "Harsh";
        this.age = 28;
    }
}

let person1 = new person("Harsh", 22);

console.log(person1);  //person {name: 'Harsh', age: 28}


//class m method kaise add karte hain.
class person {
    constructor(n, a) {  //value object se pass kar rahe hain..
        this.name = "Harsh";
        this.age = 28;
    }
    sayhi() {
        console.log("Hi..");
    }
}

let person1 = new person("Harsh", 22);

console.log(person1);
person1.sayhi(); //Hi.. //sayhi function prototype m attach ho jata hain. same like es5 jitne v method banaenge prototype m add jayega. isme automatic es5 m add karna padega


//class k andr 3 type k method define kar sakte hain..

//constructor method : automatic call hota hain.

//jo normal method class k andr define kareneg wo prototype metthod h bcsye method automatic prototype se attach hoa jata h..


//static method


class person {
    constructor(n, a) {
        this.name = "Harsh";
        this.age = 28;
    }
    sayhi() {
        console.log("Hi..");
    }
    static hello() {  //static method
        console.log("hello");
    }
    static sproperty = "Something"; //static property v object se access nhi hoga ye v class se access hoga..
}

let person1 = new person("Harsh", 22);


//static method kaha kam aata hain.
//person1.hello(); //person1.hello is not a function bcs static method ko object k through call nhi karte hain.

//static method object nhi direct class se call hota hain.
person.hello(); //hello


//static method k liye object ki jarurat nhi hain.
//jb hum class ka object banate hain to static method object m copy nhi hoga isliye ye prototype m store nhi hota hain.

console.log(person1.sproperty);  ////undefined static property v object se access nhi hoga ye v class se access hoga..
console.log(person.sproperty); //Something

//static property/method object se connect nhi hota hain. object m copy ho jata h property/method. class m property method prototype m chla jata hain.



//inheritance with class in es6
//inheritance m dusre class ka method use kar sakte hain.

class emp {
    constructor(n) {
        //console.log("emp constructor called...");
        this.name = n;
    }
}

//inherit manager from employee
class manager extends emp {  //access power of emp to manager

}

let manager1 = new manager("Harsh");  //emp constructor called...

//humne bola ki kisi v chij ka constructor tb call hoga jb uska object banega.. yaha manager1 object tha manager class ka jo inherit tha emp class se. emp class ka constriuctor call hua manager class ka object se


console.log(manager1);//manager {name: 'Harsh'} //manager k pass manager employee aur object 3 no prototype hain. yaha v prototype chaining ho raha hain


//inheritance se kisi class ka constructor v aa jata h dusre class m. dusre class ka method aur property v aa jjata hain.


//hum manager class m constructor function banna chahate hain.

class emp {  //parent class
    constructor(n) {
        this.name = n;
    }
}

class manager extends emp { //child class
    constructor(p, d) {  //p me name, d me dept pass kiya
        super(p);  //super constructor m name Harsh pass ho gaya
        this.dept = d; //d m dept aa gaya
    }
}


let manager1 = new manager("Harsh", "web");  //how to pass dept after name here


Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new manager (92-class-object.js:148:9)


//isko smjh nhi aa raha kisiko kya pass karna h. jb v koi constructor child/extended class m call karte hain to hume child m super constructor call karna hota hain.

console.log(manager1);  //manager {name: 'Harsh', dept: 'web'}


class emp {  //parent class
    constructor(n) {
        this.name = n;
    }
    msg() {  //ye emp wala method manager m aa jayega
        console.log("Hi");
    }
}

class manager extends emp { //child class
    constructor(p, d) {  //p me name, d me dept pass kiya
        super(p);  //super constructor m name Harsh pass ho gaya
        this.dept = d; //d m dept aa gaya
    }
}


let manager1 = new manager("Harsh", "web");

console.log(manager1);

console.log(manager1.msg());  //Hi



//manager k andr ek aur function banate hain info name se..
class emp {  //parent class
    constructor(n) {
        this.name = n;
    }
    msg() {  //ye emp wala method manager m aa jayega
        console.log("Hi");
    }
}

class manager extends emp { //child class
    constructor(p, d) {  //p me name, d me dept pass kiya
        super(p);  //super constructor m name Harsh pass ho gaya
        this.dept = d; //d m dept aa gaya
    }
    info() {
        console.log(this.name + " is manager of dept " + this.dept);
    }
}


let manager1 = new manager("Harsh", "web");

console.log(manager1);


console.log(manager1.msg());
console.log(manager1.info()); //Harsh is manager of dept web


//ab agar hum ek class k method ko dusre class k method m call karna chahte h to

class emp {  //parent class
    constructor(n) {
        this.name = n;
    }
    msg() {  //ye emp wala method manager m aa jayega
        console.log("Hi");
    }
}

class manager extends emp { //child class
    constructor(p, d) {  //p me name, d me dept pass kiya
        super(p);  //super constructor m name Harsh pass ho gaya
        this.dept = d; //d m dept aa gaya
    }
    info() {
        console.log(this.name + " is manager of dept " + this.dept);  //yahan name property direct call kar sakrte hain but method dusre class wala wo super keyword se access hoga
        super.msg();  //parent/super class emp ka msg method call karegega jo emp prototype m store hoga...
    }
}


let manager1 = new manager("Harsh", "web");

console.log(manager1.info());  //Harsh is manager of dept web  //Hi

//sirf ek method info call karne se do class ka method call ho jayega



//agar same name ka function 2 alag alag class m rahe toh...


class emp {  //parent class
    constructor(n) {
        this.name = n;
    }
    msg() {  //ye emp wala method manager m aa jayega
        console.log("Hi");
    }
}

class manager extends emp { //child class
    constructor(p, d) {  //p me name, d me dept pass kiya
        super(p);  //super constructor m name Harsh pass ho gaya
        this.dept = d; //d m dept aa gaya
    }
    msg() {
        console.log("Hello");
    }
    info() {
        console.log(this.name + " is manager of dept " + this.dept);
        //this.msg();  //khud ka chij this.method se access karna padega  //Hello
        super.msg();  //Hi  //super se parent class ka method call hoga.
    }
}

let manager1 = new manager("Harsh", "web");

console.log(manager1.info());


//hum chahe to ek aur class bana sakte hain.

class emp {  //parent class
    constructor(n) {
        this.name = n;
    }
    msg() {  //ye emp wala method manager m aa jayega
        console.log("Hi");
    }
}

class manager extends emp { //child class
    constructor(p, d) {  //p me name, d me dept pass kiya
        super(p);  //super constructor m name Harsh pass ho gaya
        this.dept = d; //d m dept aa gaya
    }
    msg() {
        console.log("Hello");
    }
    info() {
        console.log(this.name + " is manager of dept " + this.dept);
        //this.msg();  //khud ka chij this.method se access karna padega  //Hello
        super.msg();  //Hi  //super se parent class ka method call hoga.
    }
}

class admin extends manager {

}
let admin1 = new admin("Saurabh", "Devops"); //multiple inheritance  | admin k pass emp and manager dono ka power h..
let manager1 = new manager("Harsh", "web");

console.log(admin1);


//public and private property

class emp {
    constructor(n) {
        this.name = n;
    }
    getName() {
        console.log(this.name);
    }
}


let emp1 = new emp("Harsh");
console.log(emp1);  //emp {name: 'Harsh'}
console.log(emp1.name);  //Harsh  //abhi constructor wala name public property h direct object se call ho sakta hain. private nhi ho sakta

//kisi property ko private kaise banaeneg

class emp {
    #name = "";
    constructor(n) {
        this.#name = n;  //private property banane k liye #property_name deke constructor k bahar define krna padta h
    }
    getName() {
        console.log(this.#name); //
    }
}


let emp1 = new emp("Harsh");
console.log(emp1);  //emp {name: 'Harsh'}
// console.log(emp1.#name);  //Private field '#name' must be declared in an enclosing class (at 92-class-object.js:350:17)

//but class ke andr access ho jayega
console.log(emp1.getName()); //Harsh



//kisi v method ko v private bna sakte h hain.
class emp {
    #name = "";
    constructor(n) {
        this.#name = n;  //private property banane k liye #property_name deke constructor k bahar define krna padta h
    }
    #getName() {
        console.log(this.#name); //
    }
    pubfun() {
        this.#getName();
    }
}


let emp1 = new emp("Harsh");
//console.log(emp1.#getName()); //Private field '#getName' must be declared in an enclosing class (at 92-class-object.js:370:17)
console.log(emp1.pubfun());  //Harsh


//private class k andr hi use hoga. public bahar v object k sath use ho sakta hain.


//mixing: use to give extra power to class


let usefulmethod = {
    sayHi() {
        console.log("Hi...");
    },
    sayBye() {
        console.log("Bye...");
    }
}
class user {
    constructor() {
        this.name = "Harsh";
    }
}

Object.assign(user.prototype, usefulmethod);  //assign object usefulmethod to user prototype class

let usr1 = new user();

console.log(usr1);  //user {name: 'Harsh'}: user name ka object jiska name hai Harsh

//agr usefulmethood object ka 2 dono method user class k andr chahiye
//clss rahta tho extend kr lete. but yaha object h

console.log(usr1);
console.log(usr1.sayHi());  //Hi...
*/

//benefit of this. iska fyda ky hain. hum class hi kyon na extend kar le

let usefulmethod = {
    sayHi() {
        console.log("Hi...");
    },
    sayBye() {
        console.log("Bye...");
    }
}
class user {
    constructor() {
        this.name = "Harsh";
    }
}
class admin extends user {
    //admin k andr user ka property and object ka mixing v aa chuka hain.
}
Object.assign(admin.prototype, usefulmethod);

let admin1 = new admin();
let usr1 = new user();

console.log(admin1);  //admin {name: 'Harsh'}
console.log(admin1.sayBye()); //Bye...
//agr hume kisi v class m ek class k alawa bhi kuchh chhiye hogatoh mixing kam aayega..
//agr multiple chij lena h to ek ko extend kar ke le lo aur dusre ko mixing karke..


//extend se sirf ek class extend kiya ja sakta h..
//ek se jyda mixing v karke le sakte hain