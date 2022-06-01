// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    let message = input.toLowerCase(); //sets input to lowercase and stores it in a variable
    let result = "";
    let newShift = shift;

    if (typeof shift === "undefined" || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }

    encode ? newShift : (newShift *= -1);

    for (let i = 0; i < message.length; i++) {
      let newMessage = message[i].charCodeAt(); // Making a reference to the charCodeAt method and storing it in a variable.
      let numCode = newMessage + newShift; // Adds the shift to the stored variable above and stores it in a new variable.
      if (newMessage < 97 || newMessage > 122) { // Checks for character codes that aren't 97-122 and leaves them as it.
        result += String.fromCharCode(newMessage);
      } else if (numCode < 97) {
        numCode += 26; // Increases the position of the characters to the a-z alphabetical range.
        result += String.fromCharCode(numCode);
      } else if (numCode > 122) {
        numCode -= 26; // Decreases the position of the characters to the a-z alphabetical range.
        result += String.fromCharCode(numCode);
      } else if (numCode >= 97 && numCode <= 122) { //Keeps all shifted character code values that are between 97-122 within that range.
        result += String.fromCharCode(numCode);
      }
    }

    return result; //returns the result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
