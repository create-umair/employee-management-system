function addEmployee(){

const name=document.getElementById("name").value;
const department=document.getElementById("department").value;
const salary=document.getElementById("salary").value;

if(!name || !department || !salary){
alert("Please fill all fields");
return;
}

const table=document.getElementById("employeeTable");

const row=table.insertRow();

row.insertCell(0).innerText=name;
row.insertCell(1).innerText=department;
row.insertCell(2).innerText="£"+salary;

document.getElementById("name").value="";
document.getElementById("department").value="";
document.getElementById("salary").value="";
}
