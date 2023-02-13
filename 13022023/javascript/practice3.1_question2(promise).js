let one =()=>
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Output from one");
        },5000);
    });
}

let two =()=>
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("output from two");
        },10000);
    });
}

let three = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("output from three");
        },15000);
    });
}

one().then((response)=>{
    console.log(response)
    two().then((response)=>{
        console.log(response);
        three().then((response)=>{
            console.log(response);
        });
    });
});