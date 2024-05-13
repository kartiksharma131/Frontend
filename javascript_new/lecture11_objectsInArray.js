let arr= [
    {user:1,name:"kartik"},
    {user:2,name:"debarun"},
    {user:3,name:"radha"}
]
console.log(arr[0].name);
for(var i in arr){
    console.log(arr[i].user, arr[i].name);
}