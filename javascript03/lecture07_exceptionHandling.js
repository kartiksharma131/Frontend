// try , catch and throw

function divide(a,b){
    try{
        if(b==0){
            throw new Error("can't divide by 0");
        }
        else{
            console.log(a/b);
        }
    }
    catch(err){
        console.log(err.message);
    }
}

divide(10,0);