/*
in oops, we group function and variable in a block called class.

class employee {
    common variable and function
    let salary;
    let bonus;
    let joiningdate;
    attendence(){

    }
}

class manager{
    let engineer="4";
    function of manager;
    clientmeeting(){

    }
}
class programmer{
    let avgdebug="22";
    function of programmer
    coding(){

    }
}

agar ab koi v common chij access karne ki jarurat pdi to employee class se inherit kar lenege.


ab agr new programmer aayega to programmer class ka new object bana lenge

variable tom=new programmer



4 pillars of oops. ip for interview
1. encapsulation means wrapping up data and member function(method) together into single unit i.e class. means capsule m bind karna.
i.e similar data aur function ko ek sath karna.



2. Abstraction: showing only essential/necessary features of an entity/object outside world and hide other irrelevent information.
i.e details chhupana durse class se.


3. inheritance: it allows a class(subclass) to accuire the property of another class(super class). it helps to reuse, custmize and enhance the existing code.


4. polymorphism
it means many form. a subclass can define its own unique behaivior and still share the same functionalities or behaiour  of parent clss.


i.e same name ka function alag alag class m bana sakte hain. dikhne m same lage but kam alag-2 kare.

class square(){
    area();
}

var s1=new square();
s1.area();

--------------

class circle(){
    area();
}

var c2=new circle();
c2.area();
*/