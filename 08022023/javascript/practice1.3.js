const numbers=[10,20,30,40,50];
let sum= numbers.reduce(myfunction);
function myfunction(total, value){
    return total+value;
}
console.log(sum);
document.getElementById("total").innerHTML="total sum to array numbers is: "+sum;
let average = sum/numbers.length;
document.getElementById("average").innerHTML="average of array numbers is: "+average;
function findMax(array){
    let max =0;
    for(i =0;i<array.length;i++)
    {
        if(array[i]>max){
            max=array[i]
        }
    }
    return max;
}
document.getElementById("max").innerHTML="maximum of array numbers is: "+findMax(numbers);

//second question
const nameArray=["param","yug","rutvik"];
function findMaxString(array)
{
    let max =0;
    let maxSting=0
    for(i =0;i<array.length;i++)
    {
        if(array[i].length>maxSting)
        {
            maxSting=array[i].length;
            max=i;            
        }
    }
    let x = array[max];
    return x;    
}
document.getElementById("maxString").innerHTML="longest string is: "+ findMaxString(nameArray);

//third question
 let person=[
    {name:"param",age:21,place:"bhavnagar"},
    {name:"rutvik",age:20,place:"ahmedabad"},
    {name:"yug",age:18,place:"surat"}
 ];
    person.sort((a,b)=>{
        return a.age - b.age;
    })
    console.log(person);

//fourth question
let myArray=[1,1,2,2,3,3,4,4,5,5];
let uniqueArray = [new Set(myArray)];
console.log(uniqueArray);

//fifth question
let arr1 = ["param", "rutvik","yug","boss"];
let arr2 = ["bhim", "hanuman", "boss","yug"];
let children = arr1.concat(arr2);
children = [new Set(children)];
console.log(children);

//sixth question

let country = ["india","usa","china","pakistan"];
country.sort();
console.log(country);