function myEmail(){
    if(document.getElementById("email").value != document.getElementById("reEmail").value){
        alert("please enter same mailid");
    }
    console.log("sdfgh");
}


function myPassword(){
    if(document.getElementById("password").value != document.getElementById("rePassword").value){
        alert("pleaseenter same passward as above");
    }
}
function storeData(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dateOfBirth = document.getElementById("bDay").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var securityQuestion = document.getElementById("securityQuestion").value;
    var securityAnswer = document.getElementById("securityAnswer").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zipCode").value;
    
    var phone = document.getElementById("phoneNumber").value;
  
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Date of birth", dateOfBirth);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Email ID", email);
    localStorage.setItem("Security Question", securityQuestion);
    localStorage.setItem("Security Answer", securityAnswer);
    localStorage.setItem("Address", address);
    localStorage.setItem("City", city);
    localStorage.setItem("State", state);
    localStorage.setItem("Zip", zip);
    localStorage.setItem("Phone No.", phone);
}
function showData(){
    var firstName=localStorage.getItem("First Name");
   var lastName=localStorage.getItem("Last Name");
   var dateOfBirth=localStorage.getItem("Date of birth");
   var gender=localStorage.getItem("Gender");
   var email=localStorage.getItem("Email ID");
   var securityQuestion=localStorage.getItem("Security Question");
   var securityAnswer=localStorage.getItem("Security Answer");
   var address=localStorage.getItem("Address");
   var city=localStorage.getItem("City");
   var state=localStorage.getItem("State");
   var zip=localStorage.getItem("Zip");
   var phone=localStorage.getItem("Phone No.");

   document.getElementById("data1").innerHTML = firstName;
   document.getElementById("data2").innerHTML = lastName;
   document.getElementById("data3").innerHTML = dateOfBirth;
   document.getElementById("data4").innerHTML = gender;
   document.getElementById("data5").innerHTML = email;
   document.getElementById("data6").innerHTML = securityQuestion;
   document.getElementById("data7").innerHTML = securityAnswer;
   document.getElementById("data8").innerHTML = address;
   document.getElementById("data9").innerHTML = city;
   document.getElementById("data10").innerHTML = state;
   document.getElementById("data11").innerHTML = zip;
   document.getElementById("data13").innerHTML = phone;    
}