function validation(DisplayAllField) {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("userMail").value;
  let mobile = document.getElementById("userMobile").value;
  console.log(fname);
  if (fname != "" && lname != "" && email != "" && mobile != "") {
    DisplayAllField(fname, lname, email, obile);
  } else {
    alert("all field are compulsary");
  }
}
function DisplayAllField(fname, lname, email, mobile) {
  document.getElementById("fullName").innerHTML =
    "fullname:" + fname + " " + lname;
  document.getElementById("email").innerHTML = email;
  document.getElementById("mobile").innerHTML = mobile;
}
