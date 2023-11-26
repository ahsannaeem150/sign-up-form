const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");

let passwordValue = '';
let isValid = false;
confirmPassword.setCustomValidity("Invalid field.");

password.addEventListener('input', event => {
    if (password.value.length >= 8) {
        passwordValue = password.value;
        isValid = true;
    } else {
        isValid = false;
    }
});

confirmPassword.addEventListener('input', event => {
    if (isValid) {
        if (passwordValue == confirmPassword.value) {
            confirmPassword.setCustomValidity("");
        } else {
            confirmPassword.setCustomValidity("Invalid field.");
        }
    }
})
