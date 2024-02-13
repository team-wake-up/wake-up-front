const input = document.querySelector("input.tf-g");
const clearButton = document.querySelector("button.btn-clear");
const email = document.querySelector("span.txt-mail");
const errorMsg = document.querySelector("p.info-tf.error");
const box = document.querySelector("div.box-tf");
const span = document.querySelector("span.ico-comm");
const nextButton = document.querySelector("button.btn-g.submit");
//시작화면 input창 focus 설정
input.focus();
// 시작화면 삭제버튼 안보이게 설정
clearButton.style.display = "none";
// 시작화면 이메일 안보이게 설정
email.style.display = "none";
// 시작화면 에러메세지 안보이게 설정
errorMsg.style.display = "none";

// input창 입력시 error 문구 삭제
const keyupHandler = () => {
    box.style.borderColor = "#333";
    errorMsg.style.display = "none";
};
input.addEventListener("keyup", keyupHandler);

// input창 blur시 색상변경
const blurHandler = () => {
    box.style.borderColor = "#e65f3e";
    errorMsg.style.display = "block";
};
input.addEventListener("blur", blurHandler);

// 삭제버튼 클릭시 input값 삭제
clearButton.addEventListener("click", () => {
    input.value = "";
    clearButton.style.display = "none";
    nextButton.style.backgroundColor = "";
});

// input값 있으면 삭제버튼 보이게 설정
input.addEventListener("input", () => {
    if (input.value !== "") {
        clearButton.style.display = "inline-block";
    } else {
        clearButton.style.display = "none";
    }
});

// // input값이 3자리 이상이면 버튼 색 변경
input.addEventListener("input", () => {
    if (input.value.length >= 3) {
        nextButton.style.backgroundColor = "#fada0a";
        nextButton.addEventListener("mouseover", mouseOverHandler);
        nextButton.addEventListener("mouseout", mouseOutHandler);
    } else {
        nextButton.style.backgroundColor = "";
        nextButton.removeEventListener("mouseover", mouseOverHandler);
        nextButton.removeEventListener("mouseout", mouseOutHandler);
    }
});

function mouseOverHandler() {
    if (input.value.length >= 3) {
        nextButton.style.backgroundColor = "#fee500";
    }
}

function mouseOutHandler() {
    if (input.value.length >= 3) {
        nextButton.style.backgroundColor = "#fada0a";
    }
}
