const button = document.getElementById("mainButton");
let circlesDiv = document.querySelector(".circles");
let progress = document.getElementsByClassName("progress-text");
let progressDiv = document.getElementsByClassName("progress");

const addPassLayout = () => {
  for (let i = 0; i < 3; i++) {
    // display circles
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = i;
    circlesDiv.appendChild(circle);
  }
  // start visual representation of character input (progress)
  progress[0].textContent = "PASS:";
  let submitBtn = document.createElement("button");
  submitBtn.id = "submit-btn";
  submitBtn.textContent = "Submit";
  submitBtn.onclick = signIn;
  progressDiv[0].appendChild(submitBtn);
};

const removePassLayout = () => {
  for (let i = 2; i >= 0; i--) {
    circlesDiv.removeChild(circles[i]);
  }
  progress.textContent = "";
  let submitBtn = document.getElementById("submit-btn");
  progressDiv[0].removeChild(submitBtn);
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
