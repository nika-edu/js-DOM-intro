let btn = document.getElementById("submit-button");
let inputfield = document.getElementById("input-field");
inputfield.style.backgroundColor = "yellow";
btn.addEventListener("click", buttonClick);

function buttonClick(e) {
  e.preventDefault();
  console.log(e);
  let inputText = inputfield.value;
  console.log(inputText);
}

function isBalanced(expr) {
  let retVal = false;
  let myStack = [];
  for (let char of expr) {
    if (char === "(") {
      myStack.push(char);
    }
  }

  for (let char of expr) {
    if (char === ")") {
      if (myStack.length > 0) {
        myStack.pop();
      } else {
        return retVal;
      }
    }
  }
  if (myStack.length === 0) {
    retVal = true;
    return retVal;
  } else {
    return retVal;
  }
}

let myExpr = "1+2*((3-5)-3)";
// alert(isBalanced(myExpr));
