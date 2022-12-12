console.log("pass logic loading");

const ALPHABET = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const PASSWORD = "ENIGMA";

let valid = true;
let iteration = 1;

const enigmaSecure = () => {
  // Run code for each character in password
  for (let i = 0; i < PASSWORD.length; i++) {
    // if all correct inputs so far and not finished with password
    if (valid) {
      valid = false; // prevent from iterating until circle is clicked

      let char = PASSWORD[i].toUpperCase();

      // generate array of length 3 with groupings of 4 letters each
      // [[x,x,x,x],[x,x,x,x],[x,x,x,x]]
      let letterGroups = [];
      let circles = document.getElementsByClassName("circle");

      // for each circle
      for (let j = 0; j < 3; j++) {
        // generate 4 letters and add them to the letterGroups
        let letters = generate4Letters(char, j, letterGroups);
        randomPush(letters, letterGroups);
      }

      // add letterGroups to webpage
      for (let k = 0; k < 3; k++) {
        // add letters to current circle
        circles[k].textContent = letterGroups[k].toString();
        // add click listener for current circle
        circles[k].addEventListener("click", () => {
          console.log(`you clicked circle ${circles[k].id}`);
          //   console.log(typeof circles[k].id + `: ${circles[k].id}`);
          handleSelection(circles[k].id, char, letterGroups);
        });
        // handleSelection(input, char, letterGroups);
      }
    }
  }
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

// handle user input and selection of letter grouping (per digit)
const handleSelection = (num, char, letterGroups) => {
  // validate user input
  if (["0", "1", "2"].includes(num)) {
    // console.log(`You chose: ${num}`);
    // check if user input was correct (char is in that group)
    // console.log("lg[num]: " + letterGroups[num]);
    // console.log(
    //   "whether lg[num] includs char: " + letterGroups[num].includes(char)
    // );
    if (letterGroups[num].includes(char)) {
      console.log("correct!");
      if (iteration != PASSWORD.length) {
        iteration++;
        console.log(iteration + " = iteration");
        valid = true;
        // enigmaSecure();
        return true;
      }
    } else {
      console.log("Incorrect input.");
      return false;
    }
  } else {
    console.log("Invalid response.");
  }
};

// helper function to randomly insert an element into an object array
const randomPush = (element, object) => {
  Math.round(Math.random()) === 0
    ? object.push(element)
    : object.unshift(element);
};

enigmaSecure();
