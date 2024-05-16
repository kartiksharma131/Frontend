//JS is synchronous - > 
//asynchronous function is called at the last

setTimeout(()=>{
    console.log("asynchronous");
},0)

console.log("this");
console.log("is");