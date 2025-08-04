document.getElementById("userName").addEventListener("input", validateUserField);
document.getElementById("password").addEventListener("input", validatePasswordField);

function validateUserField() {
    let userInput = document.forms["formulary"]["userName"].value.trim();
  if (userInput == "") {
    document.getElementById("userEmpty").style.display = "block";
    // document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
    // document.getElementsByClassName("ErrorMensager")[0].textContent = "Invalid username or password";
    // document.getElementsByClassName("ErrorMensager")[0].style.background = "red";
    // document.getElementById("userName").style.border = "2px solid red";
  }
  else {
    document.getElementById("userEmpty").style.display = "none";
    document.getElementById("userName").style.border = "none";
    document.getElementsByClassName("ErrorMensager")[0].style.display = "none";
  }
}

function validatePasswordField() {
    let passwordInput = document.forms["formulary"]["password"].value.trim();
  if (passwordInput == "") {
    document.getElementById("passwordEmpty").style.display = "block";
    // document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
    // document.getElementsByClassName("ErrorMensager")[0].textContent = "Invalid username or password";
    // document.getElementsByClassName("ErrorMensager")[0].style.background = "red";
    // document.getElementById("password").style.border = "2px solid red";
  }
  else {
    document.getElementById("passwordEmpty").style.display = "none";
    document.getElementById("password").style.border = "none";
    document.getElementsByClassName("ErrorMensager")[0].style.display = "none";

  }
}

function validateForm() {
  validateUserField();
  validatePasswordField();

  let passwordInput = document.forms["formulary"]["password"].value.trim();
  let userInput = document.forms["formulary"]["userName"].value.trim();

  const usernameSaved = localStorage.getItem("userName");
  const passwordSaved = localStorage.getItem("password");

  if (passwordInput == passwordSaved && userInput == usernameSaved) {
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
    document.getElementsByClassName("ErrorMensager")[0].textContent = "Login successful!";
    document.getElementsByClassName("ErrorMensager")[0].style.background = "#00ac00";
    document.getElementById("password").style.border = "none";
    document.getElementById("userName").style.border = "none";
    return true;
  }

  else if (passwordInput !== "" && userInput !== "") {
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block";
    document.getElementsByClassName("ErrorMensager")[0].textContent = "The username or password is wrong";
    document.getElementsByClassName("ErrorMensager")[0].style.background = "red";
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("userName").style.border = "2px solid red";
    return false;
  }
  else {
    document.getElementsByClassName("ErrorMensager")[0].style.display = "block"; 
    document.getElementsByClassName("ErrorMensager")[0].textContent = "Invalid username or password";
    document.getElementsByClassName("ErrorMensager")[0].style.background = "red";
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("userName").style.border = "2px solid red";
    return false;
  }
  return false; // Prevent form submission
}