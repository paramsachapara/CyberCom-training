const admin = JSON.parse(localStorage.getItem("admin"));
const adminName = admin.adminName;
document.getElementById("userNameInDashbord").innerHTML=adminName;

const session =JSON.parse(localStorage.getItem("sessionArray"));
const tableBody = document.querySelector("#userDataTable tbody");
for (let item of session) {
    const newRow = tableBody.insertRow();
    console.log(item);
  
    
      // Insert cells into the new row
      const name = newRow.insertCell();
      const Login_date_time = newRow.insertCell();
      const Logout_date_time = newRow.insertCell();

             // Add more cells as needed
          // Set the text content for each cell
      name.textContent = item['name'];
      Login_date_time.textContent = item['loginTime'] + " "+item['loginDate'] ;
      Logout_date_time.textContent = item['logoutTime'] + " "+item['logoutDate'];
      
  }