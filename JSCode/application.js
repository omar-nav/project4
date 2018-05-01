/*    Choches Restaurant
 *    application validation
 *
 *    Filename: application.js
 *
 */
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
            throw "Please check at least one position for application";
        }
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
            throw "Please provide a valid email address";
        }
        // remove any email error styling and message
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
            throw "Please mark your current citizenship status";
        }
    }
    catch(msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
    }
}

function createEventListeners() {
    var emailInput = document.getElementById("emailbox");
    if (emailInput.addEventListener) {
        emailInput.addEventListener("change", validateEmail, false);
    } else if (unInput.attachEvent) {
        emailInput.attachEvent("onchange", validateEmail);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
