a=15
async function asAw(){
    setTimeout(function()
{
    console.log("hello");
},5000)
}
// asAw()
console.log(asAw())

asAw().then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})