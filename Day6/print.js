// console.log("Hello World!!")
// array=["a", 1,true]
// console.log(array)
// object1={
//     "firstname":"jayanth", 
//     "lastname":"prathab",
//     "dept":"ece",
//     "college":"SJIT"
// }
// console.log(object1);
// console.log(object1.firstname);
// console.log(object1['firstname']);
// object2=new Object();
// object2.firstname='edison'
// object2.lastname='thomas'
// object2.dept='eee' 
//console.log(object2);
// set = new Set();
// set.add('hello')
// console.log(set);
c=1;
console.log(~c);
console.log(2<<1);
// for in

array = [10,20,30,"abc",true,"hello",[1,2,3]]
for(i in array)
{
  console.log(i)             //prints keyy
}

//for of

array = [10,20,30,"abc",true,"hello",[1,2,3]]
for(i of array)
{
  console.log(i)            //prints value
}

//for each

array = [10,20,30,"abc",true,"hello",[1,2,3]]
array.forEach((ele) => {
  console.log(ele)
});

/*obj1 =
{
  firstname :"Sivasanjay",
  lastname : "S",
  dept:["cse","it","ece","mech"],       // declaration-first way
  training : "mern"
}
Object.entries(obj1).forEach((i,j)=>{
  console.log(i,j)
})*/