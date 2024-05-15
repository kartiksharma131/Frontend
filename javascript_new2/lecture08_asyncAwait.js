function loadingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1). Loading Data....");
            resolve();
        },4000);
        
    })
    
}

function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2). Collection Data...");
            resolve();
        },4000);
        
    })
    
}

function approvingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3). Approving data");
            reject('Not fullfilled')
        },2000);
        
    })
}

function approved(){
    console.log("4). Approved");
}


/*callback hell
loadingData().then(collectingData).then(approvingData).then(approved).catch((error)=>{
    console.log(error);
});*/

async function fun(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

fun().catch((err)=>{
    console.log(err);
});