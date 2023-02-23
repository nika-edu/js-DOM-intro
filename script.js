let myString = 42;

function isString(aString) {
  if (typeof aString == "string") {
    return true;
  } else {
    return false;
  }
}

console.log(isString(myString));
