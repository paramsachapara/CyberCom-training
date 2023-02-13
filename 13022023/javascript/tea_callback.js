function boilwater(a,b){
    console.log("water boil for 5 sec");
    setTimeout(()=>{
        a(b());
    },5000);
}  

function addTea(){
    console.log("add Tea leaves and boil for 2 sec");
}
function addMilk(){
    setTimeout(()=>{
        console.log("add milk");
    },2000)
}
boilwater(addTea,addMilk);