const input = document.querySelector("input#tfNick");
const errorMsg = document.querySelector("p.info-error");
const clearButton = document.querySelector("button.btn-del");
const nextButton = document.querySelector("button.btn-g");

// 초기설정
errorMsg.style.display = "none";
clearButton.style.display = "none";

// 입력창 focus blur 이벤트
input.addEventListener("focus", () => {
    input.style.borderColor = "black";
});
input.addEventListener("blur", () => {
    input.style.borderColor = "";
});

// 입력창 입력시 삭제버튼 보이기
// 입력창 입력시 버튼 색변경
input.addEventListener("keyup", () => {
    if (input.value.length > 0) {
        clearButton.style.display = "inline-block";
        nextButton.style.backgroundColor = "#fee500";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#fada0a";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#fee500";
        });
    }
    if (input.value.length == 0) {
        clearButton.style.display = "none";
        nextButton.style.backgroundColor = "#f0f0f0";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#ebebeb";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#f0f0f0";
        });
    }
});

// 삭제버튼 클릭 시 입력값 삭제
clearButton.addEventListener("click", () => {
    input.value = "";
    clearButton.style.display = "none";
    nextButton.style.backgroundColor = "#f0f0f0";
    nextButton.addEventListener("mouseover", () => {
        nextButton.style.backgroundColor = "#ebebeb";
    });
    nextButton.addEventListener("mouseout", () => {
        nextButton.style.backgroundColor = "#f0f0f0";
    });
});

// 다음 버튼 클릭시 값이 없으면 에러메세지 출력
nextButton.addEventListener("click", () => {
    if (input.value == "") {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
    }
});
