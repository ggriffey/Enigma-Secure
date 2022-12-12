const button = document.getElementById("mainButton");

button.className = "active";

const addPassLayout = () => {
  let circlesDiv = document.querySelector(".circles");
  for (let i = 0; i < 3; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = i;
    circle.textContent = "a e o x";
    circlesDiv.appendChild(circle);
  }
  console.log("layout generated");
};

addPassLayout();

let checkInput = function (input) {
  if (input.value.length > 0) {
    input.className = "active";
  } else {
    input.className = "";
  }
};

let closeForm = function () {
  button.className = "";
};

document.addEventListener("keyup", function (e) {
  if (e.code == 27 || e.code == 13) {
    closeForm();
  }
});
