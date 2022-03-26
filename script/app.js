// ==== Form selector
const form = document.querySelector(".form");
// ==== Inputs
const search = document.querySelector(".search");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const age = document.querySelector(".age");
// ==== Submit button
const btnAdd = document.querySelector(".btn-success");
const btnReset = document.querySelector(".btn-danger");
const btnSearch = document.querySelector(".btn-outline-primary");
// ==== Select button
const group = document.querySelector(".group");
const filter = document.querySelector(".filter");
// ==== tbody tag of table
const tbody = document.querySelector(".tbody");

document.addEventListener("DOMContentLoaded", () => {
  let studentList = students;

  if (localStorage.getItem("studentList")) {
    studentList = JSON.parse(localStorage.getItem("studentList"));
  } else {
    studentList = students;
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
        <td class="text-center">${item.group}</td>
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
      group.value !== ""
    ) {
      const newStudent = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        group: group.value,
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
  // Search student with name
  btnSearch.addEventListener("click", () => {
    const regex = new RegExp(search.value, "gi");
    let searchedStudent = [];
    studentList.map((item) => {
      if (item.firstName.match(regex)) {
        searchedStudent.push(item);
      }
    });
    drawerStudentList(searchedStudent);
  });

  // filter with students age
  filter.addEventListener("change", (e) => {
    let filterValue = e.target.value;
    if (filterValue === "unsorted") {
      studentList;
    } else if (filterValue === "young-old") {
      studentList.sort((a, b) => a.age - b.age);
    } else if (filterValue === "old-young") {
      studentList.sort((a, b) => b.age - a.age);
    } else {
      studentList;
    }
  });

  btnReset.addEventListener("click", () => {
    window.localStorage.clear();
    studentList = [];
    drawerStudentList(studentList);
  });
});
