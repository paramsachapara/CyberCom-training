// 1.1.1
function oneChangeText(){
    document.getElementById("paragraph").innerText="text is changed";
}
function removeItem(){
const list = document.getElementById("list");
let length=document.getElementById("list").getElementsByClassName("li").length;
if (list.hasChildNodes()) {
    list.removeChild(list.children[length]);
  }
}
function addItem(){

let newValue= document.getElementById("addItemInput").value;
const newListItem = document.createElement("li");
const newListValue = document.createTextNode(newValue);
newListItem.appendChild(newListValue);
document.getElementById("list").appendChild(newListItem);
}

function clickl(clickedId)
{
    let paragraphId = "paragraph"+clickedId;
    document.getElementById(paragraphId).innerHTML="text is changed";
}

function validateEmail(enteredMail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(enteredMail.value);
    if(!enteredMail.value.match(mailformat)){
        document.getElementById("incorrectEmail").style.display="block";
        return false;
    }
   
    
}
function validatePassword(enteredPassword){
    var passwordformat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    
    if(!enteredPassword.value.match(passwordformat)){
        document.getElementById("incorrectPassword").style.display="block";
        return false;
    }
}
function changeImage(){
    document.getElementById("imageOfCar").src="D:/cybercom training/07022023/images/car2.jpg";
}