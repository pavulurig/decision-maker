class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
     getmyName(){
        return "i am "+this.name+" Aged "+this.age;
    }

}
class Student extends Person{
    constructor(name,age,major){
       super(name,age);
        this.major = major;
    }
    getFunction(){
        return super.getmyName()+" major "+this.major;
    }
    
}
const me = new Student("gopi",26,"ece");
console.log(me);
console.log(me.getFunction());

