const button = document.getElementById("mainButton");
let circlesDiv = document.querySelector(".circles");

const addPassLayout = () => {
  for (let i = 0; i < 3; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = i;
    circlesDiv.appendChild(circle);
  }
};

const removePassLayout = () => {
  for (let i = 2; i >= 0; i--) {
    circlesDiv.removeChild(circles[i]);
  }
};

let checkInput = function (input) {
  if (input.value.length > 0) {
    input.className = "active";
  } else {
    input.className = "";
  }
};

let openForm = function () {
  button.className = "active";
  addPassLayout();
  main();
};

let closeForm = function () {
  button.className = "";
  removePassLayout();
};

document.addEventListener("keyup", function (e) {
  if (e.code == 27 || e.code == 13) {
    closeForm();
  }
});

const signIn = () => {
  for (let x = 2; x >= 0; x--) {
    circlesDiv.removeChild(circles[x]);
    console.log(`circle ${x} removed`);
  }
  let h1 = document.createElement("h1");
  circlesDiv.appendChild(h1);
  h1.textContent = "LOADING...";
  h1.classList.add("loading");
  setTimeout(4000);
  window.location.replace("http://github.com/ggriffey/Enigma-secure");
};
