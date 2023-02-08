const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const male = document.getElementById("male");
const female = document.getElementById("female");
const dropdown = document.getElementById("dropdown");
const gender = document.getElementsByName("gender");
const insuarance = document.getElementsByName("insuarance");
const addBtn = document.querySelector("#addData");

const tableBody = document.querySelector("tbody");

const FirstName = localStorage.getItem("First Name");
const LastName = localStorage.getItem("Last Name");
const Class = localStorage.getItem("Dropdown");
const Gender = localStorage.getItem("Gender");
const Insuarance = localStorage.getItem("Insuarance Required");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var genderVal;
  var insureVal;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderVal = gender[i].value;
    }
  }

  for (var i = 0; i < insuarance.length; i++) {
    if (insuarance[i].checked) {
      insureVal = insuarance[i].value;
    }
  }
  let id = Math.round(Math.random() * 1000);
  formArray.push({
    id: id,
    fname: fname.value,
    lname: lname.value,
    dropdown: dropdown.value,
    gender: genderVal,
    insuarance: insureVal,
  });
  localStorage.setItem("formArray", JSON.stringify(formArray));

  document.querySelector(".formData").classList.add("hidden");
  fname.value = "";
  lname.value = "";
  dropdown.value = "I";

  var ele = document.getElementsByName("gender");
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;

  document.getElementById("reqCheck").checked = false;
  insuarance.insureVal = "";
});

let formArray = [];

let objStr = localStorage.getItem("formArray");
if (objStr != null) {
  // if data get from local storage is not null then parse
  // the json file and save it to array
  formArray = JSON.parse(objStr);
}

function showAdd() {
  document.querySelector(".formData").classList.remove("hidden");
  document.querySelector(".table").classList.add("hidden");
}

function store() {
  var genderVal;
  var insureVal;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderVal = gender[i].value;
    }
  }

  for (var i = 0; i < insuarance.length; i++) {
    if (insuarance[i].checked) {
      insureVal = insuarance[i].value;
    }
  }
  let id = Math.round(Math.random() * 1000);
  formArray.push({
    id: id,
    fname: fname.value,
    lname: lname.value,
    dropdown: dropdown.value,
    gender: genderVal,
    insuarance: insureVal,
  });
  localStorage.setItem("formArray", JSON.stringify(formArray));
}

function prevent(e) {
  e.preventDefault();
}

function view() {
  document.querySelector(".formData").classList.add("hidden");
  document.querySelector(".table").classList.remove("hidden");

  let statement = "";
  formArray.forEach((user, i) => {
    statement += `<tr>
       <th scope="row">${i + 1}</th>
       <td>${user.fname}</td>
       <td>${user.lname}</td>
       <td>${user.dropdown}</td>
       <td>${user.gender}</td>
       <td>${user.insuarance}</td>       
   </tr>`;
  });
  tableBody.innerHTML = statement;
}
