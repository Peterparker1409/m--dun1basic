let employees = [];


const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const addBtn = document.getElementById("add");
const employeeList = document.getElementById("employee-list");

function addEmployee() {

  const name = nameInput.value;
  const position = positionInput.value;


  if (name === "" || position === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  employees.push({ name, position });


  nameInput.value = "";
  positionInput.value = "";


  renderEmployeeList();
}


function deleteEmployee(index) {
  employees.splice(index, 1);
  renderEmployeeList();
}


function renderEmployeeList() {
  employeeList.innerHTML = "";
  employees.forEach((employee, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${employee.name}</span>
      <span>${employee.position}</span>
      <button class="delete" onclick="deleteEmployee(${index})">Xóa</button>
    `;
    employeeList.appendChild(li);
  });
}


addBtn.addEventListener("click", addEmployee);
