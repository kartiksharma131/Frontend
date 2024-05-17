class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}

let user = new Person("kartik",25);
user.greet();
console.log(user);

console.log(Person.prototype.greet)