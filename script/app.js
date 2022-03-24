// ==== Form selector
const form = document.querySelector(".form");
// ==== Inputs
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const age = document.querySelector(".age");
// ==== Submit button
const btnAdd = document.querySelector(".btn-success");
const btnReset = document.querySelector(".btn-danger");
// ==== Select button
const select = document.querySelector(".form-select");
// ==== tbody tag of table
const tbody = document.querySelector(".tbody");

document.addEventListener("DOMContentLoaded", () => {
  let studentList;

  if (localStorage.getItem("studentList")) {
    studentList = JSON.parse(localStorage.getItem("studentList"));
  } else {
    studentList = [];
  }
  drawerStudentList(studentList);

  function drawerStudentList(array) {
    tbody.innerHTML = "";

    array.forEach((item, index) => {
      tbody.innerHTML += `
      <tr class="">
        <th scope="row" class="text-center">${index + 1}</th>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td class="text-center">${item.age}</td>
        <td class="text-center">${item.select}</td>
      </tr>
      `;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      age.value !== "" &&
      select.value !== ""
    ) {
      const newStudent = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        select: select.value,
      };

      studentList.push(newStudent);
      drawerStudentList(studentList);
      e.target.reset();
      alert("A new student was added ✅");

      localStorage.setItem("studentList", JSON.stringify(studentList));
    } else {
      alert("Please fill in the blanks ❗");
    }
  });
  btnReset.addEventListener("click", () => {
    window.localStorage.clear();
    studentList = [];
    drawerStudentList(studentList);
  });

  // Search section
  // const search = document.querySelector(".search");
  // const regex = new RegExp(search.value, "gi");
  // const btnSearch = document.querySelector(".btn-search");
  // btnSearch.addEventListener("click", () => {
  //   studentList.forEach((item) => {
  //     if (item.firstName.match(regex)) {
  //       tbody.textContent = "";
  //       studentList.push(item);
  //       drawerStudentList(studentList);
  //       console.log(item);
  //     } else {
  //       studentList = [];
  //     }
  //   });
  // });
});
