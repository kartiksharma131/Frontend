function person(name,age){
    this.name = name;
    this.age = age;
}

person.prototype.greet=function(){
        console.log(`hello ${this.name}`)
    }
let user = new person("kartik",24);
user.greet();
console.log(person.prototype)