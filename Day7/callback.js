/*function Sjit(msg,abc)
{
  console.log(msg)
  abc()
}
function back()
{
  console.log("Welcome Back")
}
Sjit("Welcome",back)

function formsubmit(msg,cb)
{
  if(cb())
  {
  console.log(msg)
  }
  else{
    console.log("Form unsuccesful")
  }
}

function formvalidation()
{
  return false
  console.log("Form validated")
}

formsubmit("Form succesful",formvalidation)*/


//Asynchronous function

async function asf()
{
  setTimeout(function()
{
  console.log("Hello");
},5000) 
}
asf();