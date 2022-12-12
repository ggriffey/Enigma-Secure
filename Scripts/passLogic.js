const ALPHABET = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const PASSWORD = "ENIGMA";
let index = 0;
let char = PASSWORD[index].toUpperCase();
let circles = document.getElementsByClassName("circle");
let letterGroups = [];

const main = () => {
  generateCircles(char, index);
  addEventListeners();
};

// add event listeners to circles
const addEventListeners = () => {
  for (let i = 0; i < 3; i++) {
    circles[i].addEventListener("click", () => {
      // console.log(`selected circle ${i}. Char is ${char}`);
      handleSelection(i.toString(), letterGroups);
    });
  }
};

// handle user input and selection of letter grouping (per digit)
const handleSelection = (num, letterGroups) => {
  // validate user input
  if (["0", "1", "2"].includes(num)) {
    if (index === PASSWORD.length - 1) {
      signIn();
      return true;
    } else {
      // check if user input was correct (char is in that group)
      if (letterGroups[num].includes(char)) {
        console.log("correct!");
        index++;
        char = PASSWORD[index];
        // console.log(`char is ${char} and index is ${index}`);
        generateCircles(char, index);
      } else {
        console.log("Incorrect selection.");
        return false;
      }
    }
  } else {
    console.log("Error (circle id incorrect)");
    return false;
  }
};

// populate all circles with proper letters
const generateCircles = (index) => {
  letterGroupsScoped = [];
  // generate 4 letters and add them to the letterGroupsScoped (3 times)
  for (let j = 0; j < 3; j++) {
    let letters = generate4Letters(char, j, letterGroupsScoped);
    randomPush(letters, letterGroupsScoped);
  }
  // add letterGroupsScoped to webpage
  for (let k = 0; k < 3; k++) {
    // add letters to current circle
    circles[k].textContent = letterGroupsScoped[k].toString();
  }
  letterGroups = letterGroupsScoped;
};

/*  generate three random letters and incorporate
    current letter of password (char) */
const generate4Letters = (char, i, letterGroups) => {
  let letters;
  i > 0 ? (letters = []) : (letters = [char]);
  while (letters.length < 4) {
    // generate num from 0 to 25
    let positionInAlphabet = Math.round(26 * Math.random());
    if (positionInAlphabet <= 25) {
      // convert to letter of alphabet
      let letter = ALPHABET[positionInAlphabet];
      if (
        // if letter NOT already used
        !letters.includes(letter) &&
        !letterGroups.toString().includes(letter)
      ) {
        letter = ALPHABET[positionInAlphabet];
        // randomly decide how to add letter to the list
        randomPush(letter, letters);
      }
    }
  }
  return letters;
};

// helper function to randomly insert an element into an object array
const randomPush = (element, object) => {
  Math.round(Math.random()) === 0
    ? object.push(element)
    : object.unshift(element);
};
