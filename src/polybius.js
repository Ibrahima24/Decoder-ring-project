// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const rowObject = { // Object represents the rows in the Polybius Table.
    1: ["A", "B", "C", "D", "E"],
    2: ["F", "G", "H", "I", "J", "K"],
    3: ["L", "M", "N", "O", "P"],
    4: ["Q", "R", "S", "T", "U"],
    5: ["V", "W", "X", "Y", "Z"],
  };
  
  const columnObject = { // Object represents the columns in the Polybius Table.
    1: ["A", "F", "L", "Q", "V"],
    2: ["B", "G", "M", "R", "W"],
    3: ["C", "H", "N", "S", "X"],
    4: ["D", "I", "J", "O", "T", "Y"],
    5: ["E", "K", "P", "U", "Z"],
  };

  function getPolybiusNumber(object, object2, value) { //creates a function that takes in two objects and a value and will implement it later
    return (
      Object.keys(object).find((key) => object[key].includes(value)) +
      "" +
      Object.keys(object2).find((key) => object2[key].includes(value))
    );
  }

  const _ignoreSpacing = (input) => { // Makes sure that no spaces are counted when determining the length of the input. 
    let myString = input;
    let remText = myString.replace(/ /g, "");
    let length = remText.length;

    let remainderVal = length % 2;
    return remainderVal;
  };

  function polybius(input, encode = true) {
    if (encode === true) {
      let result = ""; // String will be stored in the result variable
      let upperCasedInput = input.toUpperCase(); //assigning a variable to store uppercase version of the input
      for (let i = 0; i < upperCasedInput.length; i++) {
        if (upperCasedInput[i] === " ") {
          result += " "; // adds the space into the result
        } else {
          let keyValue = getPolybiusNumber(// implements function from earlier with the column and row objects and the value of upperCasedInput[i]
            columnObject,
            rowObject,
            upperCasedInput[i]
          );
          result += keyValue; // adds what was implemented into the result
        }
      }

      return result; // returns the result
    } else {
      if (_ignoreSpacing(input) === 1) return false; //chcks the remainder and returns flase if odd

      let result2 = ""; // String will be stored into this result variable

      for (let i = 0; i < input.length; i += 2) {//loops through input and increments by 2 because a letter represented by a pair of numbers.
        if (input[i] === " ") {
          result2 += " "; // adds space to result
          i--;
        } else if (`${input[i]}${input[i + 1]}` === "42") {
          result2 += "(i/j)"; //hard-code to join string with (i/j)
        } else {
          let numValue = columnObject[input[i]]; //searches index for value in the column object 
          let numValue2 = rowObject[input[i + 1]]; //searches index for value in the row object

          let foundVal = numValue.find((num) => numValue2.includes(num)); //find method holds the numValue to check if it isn't incuded in numValue2

          result2 += foundVal; //value is added to the result
        }
      }

      return result2.toLowerCase(); //returns thr result to lowercase
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
