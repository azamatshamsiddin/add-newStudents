// ==== Form selector
const form = document.querySelector(".form");
// ==== Inputs
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const age = document.querySelector(".age");
// ==== Submit button
const btn = document.querySelector(".btn");
// ==== Select button
const select = document.querySelector(".form-select");
// ==== tbody tag of table
const tbody = document.querySelector(".tbody");

// Student id
let id = 1;
// form section started
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // data => this array includes input values
  const data = [
    firstName.value,
    lastName.value,
    age.value,
    newData[newData.length - 1],
  ];

  // this function creates a new student's datas
  createStudent(data);
  newData.pop();
  if (data[data.length - 1]) {
    form.reset();
  }
});

let newData = [];
//  form select
//  in this event, when user selected one of courses, it gets value and pushed to "newData" array.
select.addEventListener("change", (e) => {
  let val = e.target.value;
  if (val) {
    newData.push(val);
  } else {
    newData.pop();
    alert("Please choose a course ❗");
    return null;
  }
});

// ==== this function creates a new student's data
function createStudent(arr) {
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.textContent = id += 1;
  th.classList.add("text-center");
  th.setAttribute("scope", "row");
  tr.appendChild(th);

  // this loop iterates array named "data" and everytime created new element and pushed to element all data of student. At the end rendered data
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[arr.length - 1]) {
      let td = document.createElement("td");
      td.textContent = arr[i];
      tr.appendChild(td);
      if (arr[i] === arr[2] || arr[i] === arr[3]) {
        td.classList.add("text-center");
      }
    } else {
      alert("Please fill in the blanks ❗");
      return null;
    }
  }
  tbody.appendChild(tr);
  alert("A new student was added ✅");
}
