/*
//es6 se pahle class ka concept tha nhi to es6 se pahle object se kya, kaise banate the..


//imp for interview..

let person1 = { //object bn jata h { } se
    firstName: "Harsh",
    // lastName: "Kumar",
    "last name": "Kumar",  //agar property name m space dena h to quotation m daal do.
    age: 20  //last me comma not mandatory
};

console.log(person1.firstName); //Harsh
console.log(person1["last name"]); //Kumar | agar property name m space h to dot notaion kam nhi karega. uske liye array notaion kam karega
//console.log(person1["age"]); //20 | ye v kam kar sakta h.
console.log(person1.age); //20

person1.age = 30; //property value change
console.log(person1.age); //30


//method:  object ka dwara kam ya object p kuchh kam kiya jata h.
let person1 = { //object bn jata h { } se
    firstName: "Harsh",
    lastName: "Kumar",
    age: 20,
    fullName: function () { //first and last name add karne wala method
        console.log(this.firstName + " " + this.lastName);  //agar inner m property access karna rahe to this.propertyname karenge.
    }
};

person1.fullName(); //Harsh Kumar


//2 tarika aur h jisse object create kiya jata h...


let person1 = {};

person1.name = "Harsh Kumar";  //add property to person1 object

console.log(person1);  //{name: 'Harsh Kumar'}


person1.sayHi = function () {
    alert("Hi🙌");
}

console.log(person1); //{name: 'Harsh Kumar', sayHi: ƒ}

person1.sayHi(); //Hi🙌 on alert



//3rd method

let person1 = new Object;  //bina curli bracket k object banna.

person1.name = "Harsh";
console.log(person1.name); //Harsh



//agr hume dusra person banna pade
let person1 = {
    firstName: "Harsh",
    lastName: "Kumar",
    age: 20
};
let person2 = {
    firstName: "Saurabh",
    lastName: "Kumar",
    age: 22
};

//but property same h toh bar bar kyun likhna. usk shotcut h es6 m class. aur es5 m kaise karenge bina class k. uske liye hum cunstructor function ka use karte hain.



//firstName,lastNmae,age is argument in function/constructor function.
function Person(first, last, age) { //1st letter capital se noraml function & array constructor m diff pta chlta h. not mandatory.
    this.firstName = first;  //function ki trah isme variable m argument nhi store karte hain. isme object ke property ki tarah variable m argument store karte hain.
    this.lastName = last;
    this.age = age;
    this.sayhi = function () {
        alert("hi");
    }
}


let person1 = new Person("Harsh", "Kumar", 28); //person is constructor. person1 is object.
console.log(person1); //Person {firstName: 'Harsh', lastName: 'Kumar', age: 28}
console.log(typeof person1); //object

let person2 = new Person("Saurabh", "Jha", 31);
console.log(person2); //Person {firstName: 'Saurabh', lastName: 'Jha', age: 31, sayhi: ƒ}


//constructor function se ek ek line m bahut sara object bana sakte hain bina class ka use kiye..

//array/object destructoring: hum ab chahte hain ki array/object k har element/property ko ek alag variable se access kare to uske liye we do array/object destructing.

//es5 m hum es6 k class k jagah constructor function use karte the.

*/


//hum ab age change karne ka function banaenege.

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.sayhi = function () {
        alert("hi");
    }
    this.changeAge = function (newAge) {
        this.age = newAge;
    }
}


let person1 = new Person("Harsh", "Kumar", 28);

console.log(person1.age); //28

person1.changeAge(23);
console.log(person1.age); 23
console.log(person1); //Person {firstName: 'Harsh', lastName: 'Kumar', age: 23, sayhi: ƒ, changeAge: ƒ}

//method se hum property ko access and change v kar sakte hain..
