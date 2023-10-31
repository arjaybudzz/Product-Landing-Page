var password_1 = document.getElementById("password");
var password_2 = document.getElementById("confirm-password");
var submit_button = document.getElementById("submit-button");

submit_button.onclick = function() {
    if (password_1.value == "" || password_2.value == "") {
        alert("Please enter password!");
    }

    else {
        if (password_1.value !== password_2.value) {
            alert("passwords do not match!");
            password_1.style.borderColor = "red";
            password_2.style.borderColor = "red";
        }

        else {
            alert("Registered!");
        }
    }
}
