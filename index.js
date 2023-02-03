const addBtn = document.getElementById("addData");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const male = document.getElementById("male");
const female = document.getElementById("female");
const dropdown = document.getElementById("dropdown");
const gender = document.getElementsByName("gender");
const insuarance = document.getElementsByName("insuarance");

const tableBody = document.querySelector("tbody");

const FirstName = localStorage.getItem("First Name");
const LastName = localStorage.getItem("Last Name");
const Class = localStorage.getItem("Dropdown");
const Gender = localStorage.getItem("Gender");
const Insuarance = localStorage.getItem("Insuarance Required");

let formArray = [];

function showAdd() {
  document.querySelector(".formData").classList.remove("hidden");
  document.querySelector(".formData").classList.add("show");
  document.querySelector(".table").classList.add("hidden");
}

addBtn.onclick = () => {};

function store(e) {
  localStorage.setItem("First Name", fname.value);
  localStorage.setItem("Last Name", lname.value);
  localStorage.setItem("Dropdown", dropdown.value);
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      localStorage.setItem("Gender", gender[i].value);
    }
  }

  for (var i = 0; i < insuarance.length; i++) {
    if (insuarance[i].checked) {
      localStorage.setItem("Insuarance Required", insuarance[i].value);
    }
  }
}

function view() {
  document.querySelector(".formData").classList.add("hidden");
  document.querySelector(".table").classList.remove("hidden");
  document.querySelector(".table").classList.add("show");
  const FirstName = localStorage.getItem("First Name");
  const LastName = localStorage.getItem("Last Name");
  const Class = localStorage.getItem("Dropdown");
  const Gender = localStorage.getItem("Gender");
  const Insuarance = localStorage.getItem("Insuarance Required");

  tableBody.innerHTML = `<tr>
  <td>${FirstName}</td>
  <td>${LastName}</td>
  <td>${Gender}</td>
  <td>${Class}</td>
  <td>${Insuarance}</td>
 
</tr>`;

  console.log(FirstName, LastName);
}
