const form = document.querySelector(".form");
// const formInputs = document.querySelector(".form-input");
const inputAge = document.querySelector(".age");
const inputFirstName = document.querySelector(".firstName");
const inputLastName = document.querySelector(".lastName");
const formBtn = document.querySelector(".form-btn");
const formSelect = document.querySelector(".form-select");

// const tr = document.querySelector("tr");
const tbody = document.querySelector(".tbody");

const data = [];
function renderArr() {
  let prev = data[data.length - 1];

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  td1.textContent = prev.firstName;
  td2.textContent = prev.lastName;
  td3.textContent = prev.age;
  td4.textContent = prev.course;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tbody.appendChild(tr);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  renderArr();
  inputFirstName.value = "";
  inputLastName.value = "";
  inputAge.value = "";
});

function getVal(val) {
  let obj = {};
  obj.id = data.length + 1;
  obj.firstName = inputFirstName.value;
  obj.lastName = inputLastName.value;
  obj.age = +inputAge.value;
  obj.course = val;

  for (let key in obj) {
    if (obj[key] === "") {
      return;
    } else {
      data.push(obj);
    }
  }
  console.log(obj);
}
formSelect.addEventListener("change", (e) => {
  let val = e.target.value;
  getVal(val);
});
