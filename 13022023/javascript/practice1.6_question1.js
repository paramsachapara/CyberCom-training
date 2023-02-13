let result = [[]];
let subArray = [];
let n = 0;
let input =[1,2,2];
while(n < input.length){
    
    for (let i = 1; i <= input.length; i++) {
        
        for (let j = n; j < i; j++) {
            
            if(j < input.length){
                subArray.push(input[j]);
            }
        }
        
        if(!result.includes(subArray)){
            result.push(subArray)
        }
        subArray = [];
    }

    n++
};

const uniqueArrayOfArrays = [...new Set(result.map(JSON.stringify))].map(JSON.parse);
console.log(uniqueArrayOfArrays);

// function removeDuplicate(arr){
//     return arr.filter((item,index)=> arr.indexOf(item)===index);
    
// }
// console.log(removeDuplicate(result));