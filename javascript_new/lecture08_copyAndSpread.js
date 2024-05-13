var arr1 = ["john","dick","harry"];
//var arr2 = arr1;
//console.log(arr1);
//arr1.push("jinny");
//console.log(arr2);

//correct ways to copy
var arr2=arr1.slice(0);
arr2.push("jinny");
console.log(arr1);
console.log(arr2);


//spread operator
var arr3 = ["raju","kaju","baju"];
var arr4 = [...arr3];
arr4.push("laju");
console.log(arr3);
console.log(arr4);