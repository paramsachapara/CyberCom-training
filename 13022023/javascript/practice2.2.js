let que = "";
let ans = 0;

let OutputScreen = document.getElementById("inp");


//
const math={
  addFun: (value)=>{
    OutputScreen.value += value;
    console.log(OutputScreen.value);
  },
  resFun: ()=>{
    OutputScreen.value = eval(OutputScreen.value);
  },
  clrFun: ()=>{
    OutputScreen.value = "";
  }
};
//

// let calculate = () => {
//   try
//   {
//     OutputScreen.value = eval(OutputScreen.value);
//   }
//   catch(err)
//   {
//     alert('invalid input');
//   }
// };

// let earse = () => {
//   inp.value = "";
// };

//end calculator




//BMIcalculator

let calculateBmi = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");
  console.log(height);
  let bgm = weight / (height ^ 2);
  result.value = bgm;
};

let clearBMI = () =>{
 document.getElementById("height").value = '';
  document.getElementById("weight").value = '';
  
}


//case three

var strToCharArr = (str) =>{
    return str.split('');
}

function split(){
var str = document.getElementById("text").value;
var arr = strToCharArr(str);
document.getElementById("output3").innerHTML=`string : ${str}<br> array = ${arr}`;

}
//case 4

function fnCalculateAge(){

    var userDateinput = document.getElementById("txtDOB").value;  
    console.log(userDateinput);
    
    // convert user input value into date object
    var birthDate = new Date(userDateinput);
     console.log(" birthDate"+ birthDate);
    
    // get difference from current date;
    var difference=Date.now() - birthDate.getTime(); 
         console.log(Date.now(),birthDate.getTime(),difference)
    var  ageDate = new Date(difference); 
    console.log(ageDate);
    var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(ageDate.getUTCFullYear());
    console.log(calculatedAge);
    document.getElementById("output4").innerHTML=`age:${calculatedAge}`
    
}