//check wether admin is logidin or not
if(!sessionStorage.getItem("role")){
    window.location.href = "D:/evaluation/html/login.html";
}
function logoutfunction(){
    sessionStorage.removeItem("role");
}

const admin = JSON.parse(localStorage.getItem("admin"));
const adminName = admin.adminName;
document.getElementById("userNameInDashbord").innerHTML=adminName;
let dataArray=[];//object array to stor object of all user

let dataObj={};//object to store value of input in object format
let birthDate; //for birthdate boject
let difference;//variable to store difference in age
let ageDate; // variable to store date
let calculatedAge;// variable to store age
let index;

//Retrive data from localstorage
const data = JSON.parse(localStorage.getItem("users"));

// Get a reference to the table body
const tableBody = document.querySelector("#userDataTable tbody");

// Iterate over the data and insert into table
for (let item of data) {
  const newRow = tableBody.insertRow();

  
    // Insert cells into the new row
    const name = newRow.insertCell();
    const email = newRow.insertCell();
    const password = newRow.insertCell();
    const age = newRow.insertCell();
    const birthdate = newRow.insertCell();
    const action = newRow.insertCell();
           // Add more cells as needed
        // Set the text content for each cell
    name.textContent = item['Name'];
    email.textContent = item['Email'];
    password.textContent = item['Password'];
    age.textContent = item["age"];
    birthdate.textContent = item['Birthdate'];

    action.innerHTML = `<button onclick="editText(${item['id']})">edit </button> <button onclick="DeleteUser(${item['id']})">delete</button>`;
}



function validateAndAdd(){
    let correctName= false;
    let correctEmail = false;
    let correctPassword = false;
    let correctBirthdate =false;

    let userId=Math.floor(Math.random()*50000);
    let userName = document.getElementById("userFormInputName").value;
    let userEmail = document.getElementById("userFormInputEmail").value;
    let userPassword = document.getElementById("userFormInputPassword").value;
    let date = document.getElementById("userFormInputBirthdate").value;
    var userBirthdate = moment(date).format('DD/MM/YYYY');
    
    // console.log(userName);
    

    //name validation starts
    if(userName){
        correctName=true;
    }
    else{
        document.getElementById("userPageNameError").style.display="block";
    }
    
    //Email validation starts
    if(userEmail){
        if(/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(userEmail))
        {
            correctEmail=true;
        }
        else{
            document.getElementById("userPageEmailError").style.display="block";
        }
    }
    else{
        document.getElementById("userPageEmailErrorTwo").style.display="block";
    }

    //password vaidation starts
    
    if(userPassword){
        if( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gi.test(userPassword))
        {
            correctPassword=true;
        }
        else{
            document.getElementById("userPagePasswordError").style.display="block";
        }
    }
    else{
        document.getElementById("userPagePasswordErrorTwo").style.display="block";
    }
    //date validation
    if(userBirthdate){
        correctBirthdate=true;
    }
    else{
        document.getElementById("userPageDateErrorTwo").style.display="block"
    }
    
    if(correctName&&correctEmail&&correctPassword&&correctBirthdate){
        //calculate age
            birthDate = new Date(userBirthdate);
            difference=Date.now() - birthDate.getTime(); 
            ageDate = new Date(difference); 
            calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);

        //user Id
        
        
        // create object of user and push it in array of object named "user"
        if(localStorage.getItem('users')&&localStorage.getItem('users').length>0)
        {
                dataObj={
                Name:userName,
                Email:userEmail,
                Password:userPassword,
                age:calculatedAge,
                Birthdate:userBirthdate,
                id:userId
            }
            let oldData = JSON.parse(localStorage.getItem('users'));
            
           
            oldData.push(dataObj);
            console.log(oldData);
            localStorage.setItem('users',JSON.stringify(oldData));
             generateNewRows(dataObj);
        }
        else{
                dataObj={
                Name:userName,
                Email:userEmail,
                Password:userPassword,
                age:calculatedAge,
                Birthdate:userBirthdate,
                id:userId
            }
            dataArray.push(dataObj);
            console.log(dataArray);
            localStorage.setItem('users',JSON.stringify(dataArray));
            generateNewRows(dataObj);
        }
        
        
       
        
    }
   
    
}



function generateNewRows(dataObj){
    const userTable = document.getElementById("userDataTable");
        
            // Create a new row
        const newRow = userTable.insertRow();

            // Insert cells into the new row
        const name = newRow.insertCell();
        const email = newRow.insertCell();
        const password = newRow.insertCell();
        const age = newRow.insertCell();
        const birthdate = newRow.insertCell();
        const action = newRow.insertCell();
            // Add more cells as needed

            // Set the text content for each cell
        name.textContent = dataObj['Name'];
        email.textContent = dataObj['Email'];
        password.textContent = dataObj['Password'];
        age.textContent = dataObj['age'];
        birthdate.textContent = dataObj['Birthdate'];
        action.innerHTML =  `<button onclick="editText(${dataObj['id']})">edit </button> <button onclick="DeleteUser(${dataObj['id']})">delete</button>`;
}
function editText(idx){
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("userFormAddUserButton").innerHTML="Update";

    for(let i=0;i<users.length;i++){
        if(idx===users[i].id){
            document.getElementById("userFormInputName").value =users[i].Name;
            document.getElementById("userFormInputEmail").value =users[i].Email;
            document.getElementById("userFormInputPassword").value =users[i].Password;
            document.getElementById("userFormAddUserButton").setAttribute("onclick",`updatevalue(${i})`)
        }
    }
}
let updatevalue = (index) => {
    // console.log(index);
    let users = JSON.parse(localStorage.getItem('users'));
    users[index].Name = document.getElementById("userFormInputName").value;
    users[index].Email = document.getElementById("userFormInputEmail").value;
    users[index].Password = document.getElementById("userFormInputPassword").value;
    users[index].Birthdate = document.getElementById("userFormInputBirthdate").value;
    localStorage.setItem("users",JSON.stringify(users));
    window.location.reload();
  
}
function DeleteUser(id) {

    // let index = array.findIndex(obj => obj.id == id);
    // console.log(index);
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.reload();
}