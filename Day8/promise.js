/*function promiseEg(value){
    return new Promise((resolve,reject)=>{ //resolve and reject are anonymous functions passed as attribute to another fn. (CALLBACK FUNCTION)
        setTimeout(() => {
            if(value) resolve("Promise resolved");
            else reject("Rejected due to insuffiecient data")
        }, 5000);
    })
}
// console.log(promiseEg(true))
promiseEg(false).then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
})*/

//Location finder
//1. Promise(LocFound,LocNotFound)
//2. Chennai, 10000

isLocationFound=(loc,time)=>{
    location="Chennai"
    t=1500
    if(loc===location && t<=time) {return true}
    else{ return false}
}
function locationFinder(loc,time){
    var location= new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isLocationFound(loc,time)) {resolve("Location found: chennai")}
            else {reject(loc+ " Location not found")}
        }, time);
    })
    location.then((LocFound)=>{
        console.log(LocFound)
    }).catch((LocNotFound)=>{
        console.log(LocNotFound);
    })
}
locationFinder("Chennai",1000);