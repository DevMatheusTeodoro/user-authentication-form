function validateUserField() {
    let passwordInput = document.forms["formulary"]["password"].value.trim();
  if (passwordInput == "") {
    document.getElementById("passwordEmpty").style.display = "block";
    document.getElementById("passwordEmpty").innerHTML = "Please enter your password";
    document.getElementById("passwordEmptySymbol").style.display = "inline";
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
  }
  else {
    document.getElementById("passwordEmpty").style.display = "none";
    document.getElementById("passwordEmptySymbol").style.display = "none";
  }
}

function validatePasswordField() {
    let userInput = document.forms["formulary"]["userName"].value.trim();
  if (userInput == "") {
    document.getElementById("userEmpty").style.display = "block";
    document.getElementById("userEmpty").innerHTML = "Please enter your username";
    document.getElementById("userEmptySymbol").style.display = "inline";
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
  }
  else {
    document.getElementById("userEmpty").style.display = "none";
    document.getElementById("userEmptySymbol").style.display = "none";
  }
}

function validateForm() {
  validateUserField();
  validatePasswordField();

  let passwordInput = document.forms["formulary"]["password"].value.trim();
  let userInput = document.forms["formulary"]["userName"].value.trim();

  if (passwordInput == "admin" && userInput == "admin") {
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
    document.getElementsByClassName("ErrorMensager")[0].textContent = "Login successful!";
    document.getElementsByClassName("ErrorMensager")[0].style.background = "#00ac00";
    return false;
  }
  else if (passwordInput !== "" && userInput !== "") {
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
    document.getElementsByClassName("ErrorMensager")[0].textContent = "The username or password is wrong";
    document.getElementsByClassName("ErrorMensager")[0].style.background = "red";
    return false;
  }
  else {
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block"; 
    document.getElementsByClassName("ErrorMensager")[0].textContent = "Invalid username or password";
    document.getElementsByClassName("ErrorMensager")[0].style.background = "red";
    return false;
  }
}