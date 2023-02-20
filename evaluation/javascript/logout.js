let sessionData = JSON.parse(sessionStorage.getItem("session"));


sessionData.logoutDate=new Date().toLocaleDateString();
sessionData.logoutTime=new Date().toLocaleTimeString();
console.log(sessionData);

document.getElementById("subUserLogoutButton").onclick=function(){
sessionData.logoutDate=new Date().toLocaleDateString();
sessionData.logoutTime=new Date().toLocaleTimeString();
let sessionArray=[];
if(localStorage.getItem('sessionArray')&&localStorage.getItem('sessionArray').length>0)
{
    
        // let userObj =  {
        //     name:sessionData.name,
        //     loginTime:sessionData.loginTime,
        //     loginDate:sessionData.loginDate,
        //     logOutDate: sessionData.logoutDate,
        //     logOutTime:sessionData.logoutTime,
        // };
        let oldUserObj=JSON.parse(localStorage.getItem("sessionArray"));
        oldUserObj.push(sessionData);
        localStorage.setItem("sessionArray", JSON.stringify(oldUserObj));
            
    }
    else{
        // let userObj =  {
        //     name:sessionData.name,
        //     loginTime:sessionData.loginTime,
        //     loginDate:sessionData.loginDate,
        //     logOutDate: sessionData.logOutDate,
        //     logOutTime:sessionData.logOutTime,
        // };
    
        sessionArray.push(sessionData);
        localStorage.setItem('sessionArray',JSON.stringify(sessionArray));
}

}