//if admin is not logined then it will redirected to login page <3
if(!sessionStorage.getItem("role")){
    window.location.href = "D:/evaluation/html/login.html";
}

const admin = JSON.parse(localStorage.getItem("admin"));
const adminName = admin.adminName;
document.getElementById("userNameInDashbord").innerHTML=adminName;
function goToUserPage(){
    window.location.href = "D:/evaluation/html/user.html";
}