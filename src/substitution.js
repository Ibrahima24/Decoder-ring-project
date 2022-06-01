// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined || alphabet.length != 26) { //checking if there is no alphabet passed it or if is not 26 characters
      return false;
    } else { //filters into the array to check if one character appears more than once
      let checkedAlphabet = alphabet.split("");
      for (let i = 0; i < alphabet.length; i++) {
        if (checkedAlphabet.filter((letter) => letter === alphabet[i]).length > 1) {
          return false;
        }
      }
    }

    let actualAlphabet = "abcdefghijklmnopqrstuvwxyz"; //the 26 aplhabets a-z stored in a variable

    if (encode === true) { // Function that handles the encoding, by passing in the data and the values
      let newInput = input.toLowerCase(); //input is turned into lowercase
      let encodedMessage = ""; //result will be appear in this variable

      for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] === " ") encodedMessage += " "; // adds spaces
        else encodedMessage += alphabet[actualAlphabet.indexOf(newInput[i])];
      }
      return encodedMessage; // returns the result of the encoded message
    } else {
      let decodedMessage = ""; // result will appear in this variable

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") decodedMessage += " "; // adds spaces
        else decodedMessage += actualAlphabet[alphabet.indexOf(input[i])];
      }
      return decodedMessage; // returns the result of the decoded message
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

