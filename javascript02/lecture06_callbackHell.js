function loadingData(callback){
    setTimeout(()=>{
        console.log("1). Loading Data....");
        callback();
    },4000);
}

function collectingData(callback){
    setTimeout(()=>{
        console.log("2). Collection Data...")
        callback();
    },4000);
}

function approvingData(callback){
    setTimeout(()=>{
        console.log("3). Approving data");
        callback();
    },2000);
}

function approved(){
    console.log("4). Approved");
}


//callback hell
loadingData(()=>{
    collectingData(()=>{
        approvingData(()=>{
            approved();
        });
    });
});

// solution to callback hell is Promise
