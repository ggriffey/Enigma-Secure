// CIRCLES GENERATED BELOW:

/* __________Other site layout______________ */
const button = document.getElementById("mainButton");

const openForm = () => {
  console.log("open form");
  button.className = "active";

  let circlesDiv = document.querySelector(".circles");
  for (let i = 0; i < 3; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.classList.add(`circle${i}`);
    circle.textContent = "a e o x";
    circlesDiv.appendChild(circle);
  }
};

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
  if (e.keyCode == 27 || e.keyCode == 13) {
    closeForm();
  }
});
