document.getElementById("getElementById").style.color="red";
const x= document.getElementsByClassName("getElementByClassName");
x[0].style.color="blue";
document.getElementsByTagName("span")[0].style.color="green";
document.querySelector("h5").style.backgroundColor="red";
const y=document.querySelectorAll("h6");
for(let i=0; i<y.length; i++){
    y[i].style.backgroundColor = "yellow";
}
function changeInnerHtml(){
document.getElementById("changeInnerHtml").innerHTML="text is changed!";
}
let text = document.getElementById("textContentOriginalContent").textContent;
document.getElementById("placeToCopy").innerHTML = text;
function adjacentHtmlFunction(){
    const h4 = document.getElementById("myH4");
    let html = "<p> newly added html element</p>";
    h4.insertAdjacentHTML("afterend",html);}
const getattribute= document.getElementById("adjacentHtmlButton");
let nameOfId = getattribute.getAttribute("id");
document.getElementById("printValueOfAttribute").innerHTML=nameOfId;
function setAttribute(){
    document.getElementById("setAttribute").setAttribute("class", "democlass"); 
}