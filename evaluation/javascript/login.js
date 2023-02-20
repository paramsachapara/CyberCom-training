const admin = JSON.parse(localStorage.getItem("admin"));
const users = JSON.parse(localStorage.getItem("users"));

let otherUserLogin=false;
let adminLogin=false;


const adminEmail = admin.adminEmail;
const adminPassword = admin.adminPassword;



function loginValidation()
{
    const username = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    if (username == adminEmail && password == adminPassword){
            // Redirect to admin page
            adminLogin=true;
            sessionStorage.setItem("role","admin");
            window.location.href = "D:/evaluation/html/Dashbord.html";
    }
    else{
        document.getElementById("error").style.display="block";
    }
    for(let i=0;i<users.length;i++){  
        if( username == users[i].Email && password == users[i].Password)
          {
            sessionStorage.setItem("users",JSON.stringify(users[i]));
            let sessionObject ={
              name:users[i].Name,
              loginDate: new Date().toLocaleDateString(),
              loginTime: new Date().toLocaleTimeString()
            };
            sessionStorage.setItem("session",JSON.stringify(sessionObject));

            localStorage.setItem('loginedUserName',users[i].Name);
            otherUserLogin=true;
            window.location.href = "D:/evaluation/html/subUser.html";
          }  
        }
}

function registrationPage(){
    window.location.href = "D:/evaluation/html/Registration.html";

}