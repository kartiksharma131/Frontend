class animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} is making noise`)
    }
    //static method
    static born(){
        console.log(`animal is born`);
    }
}

class dog extends animal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
    
}

class cat extends animal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log(`${this.name} is meowing`);
    }
    
}


let d = new dog("rufus");
let c = new cat("waffer")
animal.born();
d.speak();
d.bark();
c.meow();
c.speak();
