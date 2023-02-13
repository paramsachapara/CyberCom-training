function One(two,three){
    setTimeout(()=>{
        console.log("Fitst function");
        two(three);
    },10000);
}
function Two(three){
    setTimeout(()=>{
      console.log("second function");  
      three();
    },10000);
}
function Three(){
    setTimeout(()=>
    {
        console.log("third function");
    },8000);
}

One(Two,Three);