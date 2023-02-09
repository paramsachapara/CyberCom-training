function findMaxArea(height){
let leftSide=0;
let rightSide=height.length-1;
let maxArea=0;

while(leftSide<rightSide){
    let area= Math.min(height[leftSide],height[rightSide])*(rightSide-leftSide);
    maxArea=Math.max(area, maxArea);
    if(height[leftSide]<height[rightSide]){
        leftSide++;
    }
    else{
        rightSide--;
    }
}
console.log(maxArea);
}
let height=[1,8,6,2,5,4,8,3,7];
findMaxArea(height);
