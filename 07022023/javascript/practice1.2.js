const person={
    name:"param",
    age:20,
    address:"bhavnagar"
}

document.getElementById("demo").innerHTML=person.name;
person.name=104;
document.getElementById("newdemo").innerHTML=person.name;

//second question

const product ={
    name:"choclate",
    price:100,
    quantity:5
}

const total = product.price*product.quantity;
document.getElementById("totalPrice").innerHTML="Total price is:"+total;

// third question

const student =[
    {
        name:"ram",
        age:30,
        address:"ahmedabad"
    },
    {
        name:"shyam",
        age:20,
        address:"bhavnagar"   
    },
    {
        name:"ram",
        age:30,
        address:"surat"
    }]
    for (var value of student) {
        document.getElementById("detailOfStudent").innerHTML+=JSON.stringify(value);
    }

    //fourth question
const car=
{
    color:"red",
    type:"sports",
    maxSpeed:150
};
function colorAndType(object){
    const newObject={
        color:object.color,
        type:object.type
    };

    document.getElementById("carColor").innerHTML="color:"+newObject.color;
    document.getElementById("carType").innerHTML="type:"+newObject.type;
}
colorAndType(car);

// fifth question

const school={
    school_name:"Gyamanjari",
    school_year:"2018 to 2019"
};
const college={
    college_name:"GEC Bhavnagar",
    college_year:"2019 to 2023"
};

function fifthQuestionFunction(object1,object2){
    const education = {...object1,...object2};
    console.log(education);
    
     
    document.getElementById("fifthQuestion").innerHTML=JSON.stringify(education);
    
}
fifthQuestionFunction(school,college);
