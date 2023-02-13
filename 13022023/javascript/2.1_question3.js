array=[{name:"param",age:21},
        {name:"yug",age:19},
        {name:"rutvik",age:22}];
let x=20;
function returnAge(inputArrayObject){
    let count=0;
    inputArrayObject.map((i)=>{
        if(i.age>x){
            count+=1;
        }
        
    })
    console.log(count);
}
returnAge(array);