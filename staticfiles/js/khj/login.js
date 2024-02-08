// input창 활성화
const id = document.box.login;
const box = document.querySelector("div.box-tf");
id.addEventListener("focus", () => {
    box.style.borderColor = "black";
    idTip.style.display = "none";
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
// 아이디창 focus시 나오는 tip
const idTip = document.querySelector("p.info-tip");
idTip.style.display = "none";
id.addEventListener("focus", () => {
    idTip.style.display = "block";
});

id.addEventListener("blur", () => {
    idTip.style.display = "none";
});

// 도움말 보기
const help = document.querySelector("button.btn-help");
const tip = document.querySelector("div.tooltip-comm");

tip.style.display = "none"; // 처음에는 안 보이게 설정

help.addEventListener("click", () => {
    if (tip.style.display === "none") {
        tip.style.display = "block"; // 보이게 함
    } else {
        tip.style.display = "none"; // 감추기
    }
});
