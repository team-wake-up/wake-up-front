const input = document.querySelector("input#new-password--17");
const reInput = document.querySelector("input#password-confirm--18");
const clearButton = document.querySelector("button#password-clear");
const reClearButton = document.querySelector("button#re-password-clear");
const idInfo = document.querySelector("p#id-info");
const passwordInfo = document.querySelector("p#password-info");
const idBox = document.querySelector("div#id-box");
const passwordBox = document.querySelector("div#password-box");
const passwordError = document.querySelector("p#password-error-info");
const nextButton = document.querySelector("button.btn-g.submit");

// 초기 설정
clearButton.style.display = "none";
reClearButton.style.display = "none";
idInfo.style.display = "none";
passwordInfo.style.display = "none";
passwordBox.style.borderColor = "#ccc";

input.focus();
// 아이디
// input창 입력시 error 문구 삭제
const keyupHandler = () => {
    idBox.style.borderColor = "#333";
    idInfo.style.display = "none";
};
input.addEventListener("keyup", keyupHandler);

// input창 blur시 색상변경
const blurHandler = () => {
    idBox.style.borderColor = "#e65f3e";
    idInfo.style.display = "block";
};
input.addEventListener("blur", blurHandler);

// input값 있으면 삭제버튼 보이게 설정
input.addEventListener("input", () => {
    if (input.value !== "") {
        clearButton.style.display = "inline-block";
    } else {
        clearButton.style.display = "none";
    }
});

// 삭제버튼 클릭시 input값 삭제
clearButton.addEventListener("click", () => {
    input.value = "";
    clearButton.style.display = "none";
});

// 비밀번호 정규식 올바르게 입력하면 비밀번호 재입력으로 넘어가기
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,32}$/;
reInput.addEventListener("focus", () => {
    if (passwordRegex.test(input.value)) {
        input.removeEventListener("keyup", keyupHandler);
        input.removeEventListener("blur", blurHandler);
        idBox.style.borderColor = "#ccc";
        idInfo.style.display = "none";
        passwordError.style.display = "none";
    } else {
        idInfo.style.display = "none";
        passwordError.style.display = "block";
    }
});

// input값 있으면 비밀번호 재설정창 삭제버튼 보이게 설정
reInput.addEventListener("input", () => {
    if (input.value !== "") {
        reClearButton.style.display = "inline-block";
    } else {
        reClearButton.style.display = "none";
    }
});

// 삭제버튼 클릭시 input값 삭제
reClearButton.addEventListener("click", () => {
    reInput.value = "";
    reClearButton.style.display = "none";
});

// 비밀번호 길이 서로 맞으면 다음버튼 활성화
reInput.addEventListener("input", () => {
    if (input.value !== reInput.value) {
        passwordInfo.style.display = "block";
        passwordBox.style.borderColor = "#e65f3e";
    } else {
        passwordInfo.style.display = "none";
        passwordBox.style.borderColor = "black";
        nextButton.style.backgroundColor = "#fada0a";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#fee500";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#fada0a";
        });
    }
});
