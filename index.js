var selectedRow = null;
//!form submit logic
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
//!get method(Retriving the data)
function readFormData() {
  var formData = {};
  formData["StudentsName"] = document.getElementById("StudentsName").value;
  localStorage.setItem("StudentsName","StudentsName.value");
  formData["StudentsId"] = document.getElementById("StudentsId").value;
  formData["email"] = document.getElementById("email").value;
  formData["contactno"] = document.getElementById("contactno").value;//here we fetch the data
  return formData;
}
//!insert the data (Post method)
function insertNewRecord(data) {  //here we insert the data that we get
  var table = document
    .getElementById("StudentList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.StudentsName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.StudentsId;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.contactno;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
}
//!edit and update the data (Update method)
//editing the data(get)
function onEdit(td) { //
  selectedRow = td.parentElement.parentElement;
  document.getElementById("StudentsName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("StudentsId").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("contactno").value = selectedRow.cells[3].innerHTML;
}
//updating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.StudentsName;
  selectedRow.cells[1].innerHTML = formData.StudentsId;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.contactno;
}
//!deleting the data (delete method)
//delete the data
function onDelete(td) {
  if (confirm("Are you sure about deleting😒 the data ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("StudentList").deleteRow(row.rowIndex);
    resetForm();
  }
}
//!reseting the values in form
function resetForm() {
  document.getElementById("StudentsName").value = "";
  document.getElementById("StudentsId").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contactno").value = "";
  selectedRow = null;
}