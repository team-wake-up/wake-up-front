const id = document.box.login;
const box = document.querySelector("div.box-tf");
id.addEventListener("focus", () => {
    box.style.borderColor = "black";
});

id.addEventListener("blur", () => {
    box.style.borderColor = "lightgrey";
});

const password = document.box.password;
const boxPassword = document.querySelector("#box-password");
password.addEventListener("focus", () => {
    boxPassword.style.borderColor = "black";
});

password.addEventListener("blur", () => {
    boxPassword.style.borderColor = "lightgrey";
});
