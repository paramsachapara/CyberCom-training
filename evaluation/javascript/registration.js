function registrationFormValidation(){
    let correctName= false;
    let correctEmail = false;
    let correctPassword = false;
    let correctRePassword =false;
    let correctCheckbox =false;

    let admin={
        adminEmail:"",
        adminPassword:"",
        adminName:""
    };

    let userName = document.getElementById("registrationInputName").value;
    let userEmail = document.getElementById("registrationInputEmail").value;
    let userPassword = document.getElementById("registrationInputPassword").value;
    let userRePassword = document.getElementById("registrationInputComformPassword").value;
    let checkbox = document.getElementById("registrationInputCheckbox");
    //name validation starts
    if(userName){
        correctName=true;
    }
    else{
        document.getElementById("nameError").style.display="block"
    }
    
    //Email validation starts
    if(userEmail){
        if(/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(userEmail))
        {
            correctEmail=true;
        }
        else{
            document.getElementById("emailErrorTwo").style.display="block";
        }
    }
    else{
        document.getElementById("emailError").style.display="block";
    }

    //password vaidation starts
    
    if(userPassword){
        if( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gi.test(userPassword))
        {
            correctPassword=true;
        }
        else{
            document.getElementById("passwordErrorTwo").style.display="block";
        }
    }
    else{
        document.getElementById("passwordError").style.display="block";
    }
    //Re-password validation
    if(userRePassword){
        if( userRePassword==userPassword)
        {
            correctRePassword=true;
        }
        else{
            document.getElementById("rePasswordErrorTwo").style.display="block";
        }
    }
    else{
        document.getElementById("rePasswordError").style.display="block";
    }
    // checkbox validation
    
    if(checkbox.checked){
            correctCheckbox=true;
    }
    else{
        document.getElementById("checkboxError").style.display="block";
    }

    //if all filed are correctly filled then we will do registration

    if (correctName&&correctEmail&&correctPassword&&correctRePassword&&correctCheckbox) {

        //update value od admin object
        admin['adminEmail']=userEmail;
        admin['adminPassword']=userPassword;
        admin['adminName']=userName;
        

        //Store value of admin email and admin password in local storage
        localStorage.setItem("admin",JSON.stringify(admin));
        // Redirect to admin page
        window.location.href = "D:/evaluation/html/login.html";
      }

}

