let string="<html><head></head><body></body></html>";
arr=[];
arr2=[];
let count = 0
while(count< string.length){
firstIndex =string.indexOf("<");
secondIndex = string.indexOf(">");
let temp = string.slice(firstIndex+1,secondIndex);
arr.push(temp);
count++
}
arrayLength=arr.length;
let tempArray=[]
tempArray.forEach((element) => {
    
    element = arr[i];
    if(element[element.length-1]=="/"){

    }
    else if(element[0]!="/"){
        tempArray.push(element);
    }
    else if(element[0]=="/"){
        if( arrayLength[arrayLength.length-1]==element(1,))
        arrayLength.pop();
        else{
            arrayLength.push(element)
        }    
    }
})
if(tempArray.length==0){
    console.log("valid");
}
else{
    console.log("invalid")
}