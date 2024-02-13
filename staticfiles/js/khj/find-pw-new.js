const input = document.querySelector("input#id-new-password-8");
const clearButton = document.querySelector("button#btn-del");
const reInput = document.querySelector("input#id-password-confirm-9");
const reClearButton = document.querySelector("button#re-btn-del");
const errorMsg = document.querySelector("p#input-error");
const reErrorMsg = document.querySelector("p#re-input-error");
const nextButton = document.querySelector("button.btn-g");

// 초기설정
clearButton.style.display = "none";
reClearButton.style.display = "none";
errorMsg.style.display = "none";
reErrorMsg.style.display = "none";

// 비밀번호 입력창 focus시 검정색으로 변환
input.addEventListener("focus", () => {
    input.style.borderColor = "black";
    errorMsg.style.display = "none";
});

// 비밀번호 입력창 blur시 비밀번호 정규식 안맞으면 에러메세지 출력
input.addEventListener("blur", () => {
    const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,32}$/;
    if (passwordRegex.test(input.value)) {
        errorMsg.style.display = "none";
    } else {
        input.style.borderColor = "#e65f3e";
        errorMsg.style.display = "block";
    }
});

// 비빌번호가 동일 시 에러메세지 미출력 및 버튼 색 변경
reInput.addEventListener("input", () => {
    input.style.borderColor = "#ebebeb";
    if (reInput.value == input.value) {
        reErrorMsg.style.display = "none";
        reInput.style.borderColor = "black";
        nextButton.style.backgroundColor = "#fee500";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#fada0a";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#fee500";
        });
    } else {
        reErrorMsg.style.display = "block";
        reInput.style.borderColor = "#e65f3e";
        nextButton.style.backgroundColor = "#f0f0f0";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#ebebeb";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#f0f0f0";
        });
    }
});

// 비밀번호 입력창 입력시 삭제버튼 생성
input.addEventListener("keyup", () => {
    if (input.value.length > 0) {
        clearButton.style.display = "inline-block";
    }
    if (input.value.length == 0) {
        clearButton.style.display = "none";
    }
});

// 비밀번호 재입력창 입력시 삭제버튼 생성
reInput.addEventListener("keyup", () => {
    if (reInput.value.length > 0) {
        reClearButton.style.display = "inline-block";
    }
    if (reInput.value.length == 0) {
        reClearButton.style.display = "none";
    }
});

// 삭제버튼 클릭시 값 삭제
clearButton.addEventListener("click", () => {
    input.value = "";
    clearButton.style.display = "none";
});
reClearButton.addEventListener("click", () => {
    reInput.value = "";
    reClearButton.style.display = "none";
});
