const nameInput = document.querySelector("input#id-nickname-1");
const clearButton = document.querySelector("button.btn-del");
const count = document.querySelector("span.count");

// 이름 입력창 입력 시 삭제버튼 표시, count증가
nameInput.addEventListener("keyup", () => {
    count.textContent = nameInput.value.length + " / 30";

    if (nameInput.value.length > 0) {
        clearButton.style.display = "inline-block";
    } else {
        clearButton.style.display = "none";
    }
});

// 삭제버튼 클릭 시 입력값 삭제
clearButton.addEventListener("click", () => {
    nameInput.value = "";
    count.textContent = "0 / 30";
    clearButton.style.display = "none";
});

// 이름 입력창 focus blur 이벤트
nameInput.addEventListener("focus", () => {
    nameInput.style.borderColor = "black";
});
nameInput.addEventListener("blur", () => {
    nameInput.style.borderColor = "";
});

const phoneTypeButton = document.querySelector("a.link-selected");
const phoneTypeList = document.querySelector("ul.list-select");
const allList = document.querySelectorAll("a.link-select");
const numberText = document.querySelector("span#firstNumber");
const errorMsg = document.querySelector("p#numberError");

// 초기화면 에러메세지 안보이게 설정
errorMsg.style.display = "none";

// 리스트버튼 클릭시 리스트 보여주기
phoneTypeButton.addEventListener("click", () => {
    if (phoneTypeList.style.display === "none") {
        phoneTypeList.style.display = "block";
    } else {
        phoneTypeList.style.display = "none";
    }
});

// 번호 타입 선택시 기입
allList.forEach((button) => {
    button.addEventListener("click", () => {
        phoneTypeList.style.display = "none";
        const number = button.querySelector("span.num-select").innerText;
        numberText.innerText = number;
    });
});

const numberInput = document.querySelector("input#id-phone-number-2");
const numberDelButton = document.querySelector("button#btn-del");
const findButton = document.querySelector("button.btn-g");

// 전화번호 입력 시 삭제버튼 표시
numberInput.addEventListener("keyup", () => {
    if (numberInput.value.length > 0) {
        numberDelButton.style.display = "inline-block";
    } else {
        numberDelButton.style.display = "none";
    }
});

// 전화번호 삭제버튼 클릭 시 입력값 삭제
numberDelButton.addEventListener("click", () => {
    numberInput.value = "";
    numberDelButton.style.display = "none";
    findButton.style.backgroundColor = "#f0f0f0";
    findButton.addEventListener("mouseover", () => {
        findButton.style.backgroundColor = "#ebebeb";
    });
    findButton.addEventListener("mouseout", () => {
        findButton.style.backgroundColor = "#f0f0f0";
    });
});

// 전화번호 4글자 이상 입력시 버튼 활성화
numberInput.addEventListener("input", () => {
    if (numberInput.value.length >= 4) {
        findButton.style.backgroundColor = "#fee500";
        findButton.addEventListener("mouseover", () => {
            findButton.style.backgroundColor = "#fada0a";
        });
        findButton.addEventListener("mouseout", () => {
            findButton.style.backgroundColor = "#fee500";
        });
    }
    if (numberInput.value.length < 4) {
        findButton.style.backgroundColor = "#f0f0f0";
        findButton.addEventListener("mouseover", () => {
            findButton.style.backgroundColor = "#ebebeb";
        });
        findButton.addEventListener("mouseout", () => {
            findButton.style.backgroundColor = "#f0f0f0";
        });
    }
});

// 버튼 누를 시 전화번호 정규식 검사
findButton.addEventListener("click", () => {
    const phoneNumberRegex = /^01([016789])(\d{3,4})(\d{4})$/;
    if (phoneNumberRegex.test(numberInput.value)) {
        errorMsg.style.display = "none";
    } else {
        errorMsg.style.display = "block";
    }
});
