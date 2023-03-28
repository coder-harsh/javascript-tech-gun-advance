/*
let person1 = {};
console.log(person1);  //{}

let person2 = {
    name: "Harsh"
};

console.log(person2); //{name: 'Harsh'}


console.log(person2.hasOwnProperty('name')); //true as person2 object has a property named name |  kuchh function/method hume javascriipt inbuilt bana k deta hain. use hum kisi v object ke sath use kar skte hain. we dont need to define that function/method.
console.log(person2.hasOwnProperty('age')); //false
//is tarh k aur v method h jo hume milte hain bydefault we dont need to define that.
//object k liye ek container hota h jisme hum kuchh chij rakhte hain. use hum prototype kahte hain.


//ab hum constructor function k through
let person1 = {};
console.log(person1); //{}
//isme direct protoype  attach hoga object k sath..

function Person(n) {
    this.name = n;
}

let person3 = new Person("Ajeet");
console.log(person3); //Person {name: 'Ajeet'}
//isme bahar m ek prototype constructor function ka aatach hoga uske andr har ek object ka prototpe prebuilt method k sath attach hoga..
//object prototype(with prebuilt method) connect h null conainer se aur person prototype se. aur person prototype connect h dono object i.e person1 & person2 se..
//person1 and person2 m constructor function ka property method copy rahega..  see these in 91 vdo at 20:00 min around


//if didnt understand check again the video and use of prototype

//use of prototype
function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
    this.fullName = function () {
        console.log(this.firstName + " " + his.lastName);
    }
}

//abhi Person prototype bna k js dwara ek object prototype(with prebuilt method) m connect kar diye hain. abhi object prototype(with prebuilt method) connect h null container se. jb tk hum Constructor function se object nhi banaeneg to h person prototype nhi connct hoga object se..

let person1 = new Person("Harsh", "Kumar", 28);
let person2 = new Person("Saurabh", "Kumar", 17);


//ab jitna property,method hum constructor function m  banae the wo copy ho jayega person1, person2 object se.. ab ye person1,person2 object connect ho gaya h person prototype se.. aur person prototpe attach hua h object prototype se jisme prebuilt method h..

console.log(person1);  //erson {firstName: 'Harsh', lastName: 'Kumar', age: 28, fullName: ƒ}
console.log(person2);  //Person {firstName: 'Saurabh', lastName: 'Kumar', age: 17, fullName: ƒ}

//yaha person1,person2 m property-value copy ho raha h jo ki diff diff h. to koi dikkat nhi. but fullname method same h phir bhi dono object person1, person2 m copy ho raha h jo ki code reuse kar raha h jo achhi baat nhi. so hum fullname method ko person prototype m rakehneg. aur person prototype connect h person1,person2 object se to dono object access kar lega fullname method ko.. so hum jo bhi method banaenge use rakheneg person prototype m. n ki object prototype m bcs object prototype js bana k deta h with inbuilt method like hasOwnProperty('name')).

// so hum ab jo bhi constructor function banaeneg usme sirf peroperty banaeneg bcs har object ka property-value diif hota h. but method har object k liye same hi hota h like fullName method. hum method ko rakha kareneg uske prototype m i.e Person Protoype m.. to method har ek object ke sath copy paste nhi hoga but object k sath connect hoga..



//ab ye karte kaise hain..
function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
    // this.fullName = function () {
    //     console.log(this.firstName + " " + his.lastName);
    // }
}

//method kaise attach kiya jata h prototype k sath
Person.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
}
//ab humne constructor function wala method person prototype k sath attach kar diya hain i.e Person prototype k andr define kar diya hain.
//ab person object m sirf property copy hoga. method Person prototype se  attach hoke aayega dono object ko..


let person1 = new Person("Harsh", "Kumar", 28);
let person2 = new Person("Saurabh", "Kumar", 17);

console.log(person1); //Person {firstName: 'Harsh', lastName: 'Kumar', age: 28}
console.log(person2); //Person {firstName: 'Saurabh', lastName: 'Kumar', age: 17}

console.log(person1.fullName());  //Harsh Kumar
//ab full name Person prototype k andr rahgea.

//ye constructor function se method ko dono object m copy hone se bachanne k liye likha jata hain..

////jb bhi hume constructor function k bahar koi method add karna hain to hum prototype k through use karte hain..


//class m agar method add karna rahe to hum prototype k through karr sakte hain..

// hum prototype m method ke stah property bhi rakh sakte hain

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.fullName = function () {  //prototype se method dalna
    console.log(this.firstName + " " + this.lastName);
}

Person.prototype.age = "25";

let person1 = new Person("Harsh", "Kumar");
let person2 = new Person("Saurabh", "Kumar");

console.log(person1); //Person {firstName: 'Harsh', lastName: 'Kumar'}
console.log(person2); //Person {firstName: 'Saurabh', lastName: 'Kumar'}

console.log(person1.age); //25
console.log(person2.age); //25

//but every person1, person2 object have diffrent age. so hum  Person prototype m nhi rakhte age property ko bcs har object k property ki value diff hoti hain. but fullName method sb object k liye same hota hain. isliye method ko hum prototype m rakhte hain.

console.log(person1.fullName()); //Harsh Kumar
console.log(person2.fullName()); //Harsh Kumar
*/


//hume prototype m sirf method rakhni chahiye na ki property.


//inheritance.

// aroynd 40:00 min at 91 no video

//ek prototype ko dusre prototype se jodna prototype chaining kahlata hain. aur dusra prototype object se connected hain..


function Creature(ls) { //creature: jiv jantu | ls means lifespan of creature. Person is also creature.
    this.lifespan = ls;
}

Creature.prototype.breath = function () {
    console.log("breathing..");
}

let creature1 = new Creature(100);  //creature1 is object of Creature constructor function.

console.log(creature1); //Creature {lifespan: 100}



function Person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

Person.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
}

//Person.prototype = Object.create(Creature.prototype); //means replace Person prototype with Creature prototype. Object.create ek method h jo ek prototype ko dusre prototype se replace karta h.
//Person.prototype.__proto__ = Object.create(Creature.prototype);   //connect Person prototype with Creature prototype
Person.prototype.__proto__ = Creature.prototype;  //samme like up

let person1 = new Person("Harsh", "Kumar", 28);
let person2 = new Person("Saurabh", "Kumar", 17);

console.log(person1); //Person {firstName: 'Harsh', lastName: 'Kumar', age: 28}
console.log(person2); //Person {firstName: 'Saurabh', lastName: 'Kumar', age: 17}


//console.log(person1.breath());  //breathing..
// console.log(person1.fullName); // //undefined bcs we replaced Person prototype with object prototype
console.log(person1.breath()); //breathing..
console.log(person1.fullName());  //Harsh Kumar



//hum chahte hain ki Person bhi breath kare

//to iske liye hume Person prototype m v ek breath method add karna padega but it violated dont repeat policy. hum iske liye Person ko inherit karenge Creature constructor se..



//prototype se inheritance karna


//ab hum es6 m class aur class k through inheritance kareneg. internally class se inheritance v aise hi ho raha hoga but hume dikhega nhi. i.e prototype inheritance jaisa