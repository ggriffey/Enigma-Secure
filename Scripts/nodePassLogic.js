let input = require("prompt-sync")({ sigint: true });

const ALPHABET = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const PASSWORD = "PINEAPPLE";

const nodePass = () => {
  for (let i = 0; i < PASSWORD.length; i++) {
    let char = PASSWORD[i].toUpperCase();
    // generate array of length 3 with groupings of 4 letters each
    // [[x,x,x],[x,x,x],[x,x,x]]
    let letterGroups = [];
    for (let j = 0; j < 3; j++) {
      let letters = generate4Letters(char, j);
      randomPush(letters, letterGroups);
    }
    // display groupings and have user select the correct group
    console.log(letterGroups);
    console.log("Please select the correct grouping");
    let userInput = input("(1 - 3, from top to bottom)  ");
    let responseBool = handleSelection(userInput, char, letterGroups);
    // stop if incorrect selection
    if (!responseBool) {
      break;
    }
  }
};

/*  generate three random letters and incorporate
    current letter of password (char) */
const generate4Letters = (char, i) => {
  let letters;
  i > 0 ? (letters = []) : (letters = [char]);
  while (letters.length < 4) {
    // generate num from 0 to 25
    let positionInAlphabet = Math.round(26 * Math.random());
    if (positionInAlphabet <= 25) {
      // convert to letter of alphabet (if the letter isn't in letters arr)
      let letter = ALPHABET[positionInAlphabet];
      if (!letters.includes(letter)) {
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
  if (["1", "2", "3", "4"].includes(num)) {
    console.log(`You chose: ${num}`);
    // check if user input was correct (char is in that group)
    let answer = letterGroups[num - 1].includes(char);
    if (answer) {
      console.log("correct!");
      return true;
    } else {
      console.log("Incorrect input.");
      return false;
    }
  } else console.log("Invalid response.");
};

// helper function to randomly insert an element into an object array
const randomPush = (element, object) => {
  Math.round(Math.random()) === 0
    ? object.push(element)
    : object.unshift(element);
};

nodePass();
