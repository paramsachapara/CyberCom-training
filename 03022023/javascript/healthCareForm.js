function radioElementOne(){
    if(document.getElementById("yesOne").checked)
    {   document.getElementById("insertionOne").innerHTML=
        "<br>"+
        "<span>if yes, spouse date of birth? (DD/MM/WY) </span>"+
        '<input type="text"></input>'+
        "<br>" +
        "<span> Insurance Company, Policy number and certificate number"+
        '<input type-"text" placeholder="Insurance company"></input>'+
        '<input type-"text"placeholder-"policy number"></input>' +
        '<input type-"text" placeholder="certificate number"></input>';
       
    }
    else{
        document.getElementById("insertionOne").innerHTML=""
    }
}

function radioElementTwo(){
    if(document.getElementById("yesTwo").checked)
    {   document.getElementById("insertionTwo").innerHTML=
        
        "<span>if yes, Date of accident </span>"+
        '<input class="insertionTwoInput" type="text"></input>'+
        "<br>" +
        "<span> Location of accident </span>"+
        '<input type="radio" class="insertionTwoInput"  id="insertionTwoWork" name="insertionTwoRadio"  value="work"> Work'+
        '<input type="radio" class="insertionTwoInput"  id="insertionTwoHome" name="insertionTwoRadio"  value="home">Home'+
        '<input type="radio" class="insertionTwoInput"  id="insertionTwoOther" name="insertionTwoRadio"  value="home">Other'+
        "<br>" +
        "<span> Explain how accident occured </span>"+
        '<input type="text" class="insertionTwoInput" ></input>';
       
    }
    else{
        document.getElementById("insertionTwo").innerHTML=""
    }
}
function addRowToTable(){
var table = document.getElementById("informationTable");
var row = table.insertRow();

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);


cell1.innerHTML = '<input type="text"  ></input>';
cell2.innerHTML = '<input type="date"  ></input>';
cell3.innerHTML = '<input type="text"  ></input>';
cell4.innerHTML = '<input type="text"  ></input>';
}

function validateform(){  
    var groupContractNumber=document.myform.groupContractNumber.value;  
    var certificateNumber=document.myform.certificateNumber.value;
    var lastName=document.myform.lastName.value  
    var radioButtonOne = document.querySelector( 'input[name="radioOne"]:checked');
    var radioButtonTwo = document.querySelector( 'input[name="radioOne"]:checked');
      
    if (groupContractNumber==null || groupContractNumber==""){  
      alert("Name can't be blank");  
      return false;  
    }
    else if(certificateNumber==null || certificateNumber==""){  
        alert("certificate Number can't be blank");  
      return false;  
      }  
    else if(lastName==null || lastName==""){  
        alert("Employee last name and given name can't be blank");  
      return false;  
       }
    else if(radioButtonOne== null) {   
        alert("select one option");  
      return false;
     }  
    else if(radioButtonTwo== null) {   
        alert("select one option");  
      return false;
     }  
}