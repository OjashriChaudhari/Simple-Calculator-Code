function calculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === "0") {
      result = "Error: Division by zero.";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "Invalid operator.";
  }
  // document.getElementById("result").textContent="Result : " + result;
  document.getElementById("result").value = result;
}

