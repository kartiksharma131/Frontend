function outer(){
    var outervar=10;
    function inner(){
        console.log(outervar);
    }
    inner();
}

outer();