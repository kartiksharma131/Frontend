let arr = [
    ["john",28],
    ["jane",25],
    ["harry",30]
]

console.log(arr[0][1]);

for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}

arr.forEach(data =>{
    data.forEach(val=>{
        console.log(val);
    })
})