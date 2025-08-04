document.getElementById("userName").addEventListener("input", CheckUser);
document.getElementById("email").addEventListener("input", CheckEmail);
document.getElementById("password").addEventListener("input", function() {
    CheckPassword();
    CheckPasswordConfirm();
});
document.getElementById("passwordConfirm").addEventListener("input", CheckPasswordConfirm);

function CheckUser() {
    let userInput = document.forms["formulary"]["userName"].value.trim();
    if (userInput.length < 3) {
        document.getElementById("userError").style.display = "block";
        document.getElementById("userName").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("userError").style.display = "none";
        document.getElementById("userName").style.border = "none";
        return true;
    }
}

function CheckEmail() {
    let emailInput = document.forms["formulary"]["email"].value.trim();
    let emailPattern = /^[a-z]+@(gmail|outlook|hotmail|live|icloud|yahoo)\.com$/i;
    if (!emailPattern.test(emailInput)) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
        document.getElementById("email").style.border = "none";
        return true;
    }
}

function CheckPassword() {
    let passwordInput = document.forms["formulary"]["password"].value.trim();
    if (passwordInput.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("password").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("password").style.border = "none";
        return true;
    }
}

function CheckPasswordConfirm() {
    let passwordInput = document.forms["formulary"]["password"].value.trim();
    let passwordConfirmInput = document.forms["formulary"]["passwordConfirm"].value.trim();
    if (passwordInput !== passwordConfirmInput) {
        document.getElementById("passwordConfirmError").style.display = "block";
        document.getElementById("passwordConfirm").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("passwordConfirmError").style.display = "none";
        document.getElementById("passwordConfirm").style.border = "none";
        return true;
    }
}

function CheckTerms() {
    let termsChecked = document.getElementById("terms").checked;
    if (!termsChecked) {
        document.getElementById("terms").style.background = "red";
        return false;
    }
    return true;
}

function validateForm() {
    CheckUser();
    CheckEmail();
    CheckPassword();
    CheckPasswordConfirm();
    CheckTerms();
    if (CheckUser() && CheckEmail() && CheckPassword() && CheckPasswordConfirm() && CheckTerms()) {
        localStorage.setItem("userName", document.forms["formulary"]["userName"].value.trim());
        localStorage.setItem("email", document.forms["formulary"]["email"].value.trim());
        localStorage.setItem("password", document.forms["formulary"]["password"].value.trim());
        localStorage.setItem("passwordConfirm", document.forms["formulary"]["passwordConfirm"].value.trim());
        localStorage.setItem("termsAccepted", document.getElementById("terms").checked);
        window.location.href = "https://www.google.com";
        return true;
    } else {
        alert("Please correct the errors in the form.");
        return false;
    }
}
