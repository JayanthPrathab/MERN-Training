//In ES6 the next topic to be discussed in SCOPING
var a=10
console.log(a)
{
    let a=20
    console.log(a)
    let b=40
    console.log(b)
    var e=50
    a=30
    console.log(a)
    const f=100
    console.log(f)

}
console.log(e)
console.log(a)
// console.log(f)
//Spread operator
stud1yr=["user1","user2","user3"];
stud2yr=["user4","user5","user6"];
stud3yr=["user7","user8","user9"];
stud4yr=["user10","user11","user12"];
studDB=[...stud1yr,...stud2yr,...stud3yr,...stud4yr];
// console.log(studDB)

//Rest operator
function studentDB(...studentDataBase){
    console.log(studentDataBase);
}
studentDB(studDB);

//Destructuring operator

var array=[10,20,30,40]
var [a,b,c]=array
console.log(a,b,c)

//Hoisting : method that brings declarations to the top of the code. Thus the var 'x' declared below is read and generates UNDEFINED as O/P
//           2 types: variable hoisting and functional hoisting
//1. Variable Hoisting
console.log("This is variable Hoisting")
console.log(x);
var x=10;
console.log(x);
//O/P: undefined
//     10
//2. Functional hoisting: for normal functions, function call before defining doesn't produce error
//                        for arrow functions, ReferenceError is generated 
console.log("This is functional hoisting")
// funHoisting()
// function funHoisting(){
//     console.log("Check succeeded")
// }
var funHoisting=()=>{
    console.log("Check succeeded")
}
funHoisting();