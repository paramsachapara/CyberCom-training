let saveDetails=()=>{
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("userMail").value;
  let mobile = document.getElementById("userMobile").value;
  
  let newPromise =  new Promise((resolve,reject)=>{
    if(fname!="" && lname!="" && /[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email) && /^(\+\d{1,3}[- ]?)?\d{10}$/ .test(mobile)){
        resolve("valid")}
    else{
        reject("error")
    }
  });
  newPromise.then((data)=>{
      console.log(data);
  }).catch((err)=>{
      console.log(err);
  })
}