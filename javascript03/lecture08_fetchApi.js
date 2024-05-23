fetch('lecture08.txt').then(response=>{
    if(!response.ok){
        throw new Error("Unable to fetch");
    }
    return response.text();
}).then(data=> console.log(data)).catch(error=> console.error(error));

fetch('lecture.txt').then(response=>{
    if(!response.ok){
        throw new Error("Unable to fetch");
    }
    return response.text();
}).then(data=> console.log(data)).catch(error=> console.error(error));