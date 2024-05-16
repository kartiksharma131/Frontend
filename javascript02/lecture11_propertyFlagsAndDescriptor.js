let emp= {};
emp.name="john";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",{
    value:21,
    writable:false, //cannot change value now
    configurable:false, //cannot delete the key age
    enumerable:false     //cannot be displayed in loop now
})
console.log(Object.getOwnPropertyDescriptor(emp,"age"));