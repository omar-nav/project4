/*    Choches Restaurant
 *    application validation
 *
 *    Filename: application.js
 *
 */
// global variables
var boxFail = false;
var emailFail = false;
var radioFail = false;

function clearErrorMessages() {
    var errorDiv1 = document.getElementById("checkboxError");
    var errorDiv2 = document.getElementById("emailError");
    var errorDiv3 = document.getElementById("undocumentedError");
    errorDiv1.innerHTML = "";
    errorDiv1.style.display = "block";
    errorDiv2.innerHTML = "";
    errorDiv2.style.display = "block";
    errorDiv3.innerHTML = "";
    errorDiv3.style.display = "block";
}

function validateBoxes() {
    var bartenderBox = document.getElementById("bartender");
    var serverBox = document.getElementById("server");
    var cookBox = document.getElementById("cook");
    var managerBox = document.getElementById("manager");
    var errorDiv = document.getElementById("checkboxError");
    try {
        if (bartenderBox.checked === false && serverBox.checked === false && cookBox.checked === false && managerBox.checked === false) {
            boxFail = true;
            throw "Please check at least one position for application";
        }
        boxFail = false;
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
    catch(msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
    }
}
function validateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try {
        if (emailCheck.test(emailInput.value) === false) {
            emailFail = true;
            throw "Please provide a valid email address";
        }
        // remove any email error styling and message
        emailFail = false;
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
    catch(msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}

function validateRadio() {
    var citizenRadio = document.getElementById("citizen");
    var visaRadio = document.getElementById("visa");
    var naRadio = document.getElementById("NA");
    var errorDiv = document.getElementById("undocumentedError");
    try {
        if (citizenRadio.checked === false && visaRadio.checked === false && naRadio.checked === false) {
            radioFail = true;
            throw "Please mark your current citizenship status";
        }
        radioFail = false;
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
    catch(msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
    }
}
function showAlertBox() {
    if (boxFail===true || emailFail === true || radioFail === true) {
        alert("Fix errors specified in red text that appear \nafter clicking ok");
    }
}

function createEventListeners() {
    var bartenderBox = document.getElementById("bartender");
    var serverBox = document.getElementById("server");
    var cookBox = document.getElementById("cook");
    var managerBox = document.getElementById("manager");
    var emailInput = document.getElementById("emailbox");
    var citizenRadio = document.getElementById("citizen");
    var visaRadio = document.getElementById("visa");
    var naRadio = document.getElementById("NA");
    if (emailInput.addEventListener || bartenderBox.addEventListener || serverBox.addEventListener || cookBox.addEventListener || managerBox.addEventListener || emailInput.addEventListener || emailInput.addEventListener || emailInput.addEventListener || citizenRadio.addEventListener || visaRadio.addEventListener || naRadio.addEventListener ) {
        bartenderBox.addEventListener("change", validateBoxes, false);
        serverBox.addEventListener("change", validateBoxes, false);
        cookBox.addEventListener("change", validateBoxes, false);
        managerBox.addEventListener("change", validateBoxes, false);
        emailInput.addEventListener("change", validateEmail, false);
        citizenRadio.addEventListener("change", validateRadio, false);
        visaRadio.addEventListener("change", validateRadio, false);
        naRadio.addEventListener("change", validateRadio, false);
    } else {
        bartenderBox.attachEvent("onchange", validateBoxes);
        serverBox.attachEvent("onchange", validateBoxes);
        cookBox.attachEvent("onchange", validateBoxes);
        managerBox.attachEvent("onchange", validateBoxes);
        emailInput.attachEvent("onchange", validateEmail);
        citizenRadio.attachEvent("onchange", validateRadio);
        visaRadio.attachEvent("onchange", validateRadio);
        naRadio.attachEvent("onchange", validateRadio);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
