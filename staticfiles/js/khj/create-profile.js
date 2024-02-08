const input = document.querySelector("#profile-nickname--19");
const inputBox = document.querySelector("div.box-tf.error");
const inputLength = document.querySelector("span.num-count");
const inputError = document.querySelector("p.info-tf.error");

inputError.style.display = "none";
input.focus();

input.addEventListener("input", () => {
    const textLength = input.value.length;
    inputLength.textContent = `${textLength}/20`;
});

// input창 입력시 error 문구 삭제
const keyupHandler = () => {
    inputBox.style.borderColor = "#333";
    inputError.style.display = "none";
};
input.addEventListener("keyup", keyupHandler);

// input창 blur시 색상변경
// const blurHandler = () => {
//     inputBox.style.borderColor = "#e65f3e";
//     inputError.style.display = "block";
// };
// input.addEventListener("blur", blurHandler);

input.addEventListener("blur", () => {
    if (input.value == "") {
        inputBox.style.borderColor = "#e65f3e";
        inputError.style.display = "block";
    } else {
        inputBox.style.borderColor = "#ccc";
        inputError.style.display = "none";
    }
});

const birthBox = document.querySelector("div.box-tf.box-select.error");
const birthError = document.querySelector("p#birth-info");
const yearList = document.querySelector("ul#list-option-year");
const monthList = document.querySelector("ul#list-option-month");
const dayList = document.querySelector("ul#list-option-day");
const yearButton = document.querySelector("#year-button");
const monthButton = document.querySelector("button#month-button");
const dayButton = document.querySelector("button#day-button");
const yearListButton = document.querySelectorAll(
    "#list-option-year .link-select"
);
const monthListButton = document.querySelectorAll(
    "#list-option-month .link-select"
);
const dayListButton = document.querySelectorAll(
    "#list-option-day .link-select"
);
const yearText = document.querySelector("span#year-text");
const monthText = document.querySelector("span#month-text");
const dayText = document.querySelector("span#day-text");
const nextButton = document.querySelector("button.btn-g");

// 초기 설정
birthError.style.display = "none";
birthBox.style.borderColor = "#ccc";

// 연도 버튼 클릭시 연도 리스트창 생성
yearButton.addEventListener("click", () => {
    if (yearList.style.display === "none") {
        yearList.style.display = "block";
    } else {
        yearList.style.display = "none";
    }
});

// 월 버튼 클릭시 월 리스트창 생성
monthButton.addEventListener("click", () => {
    if (monthList.style.display === "none") {
        monthList.style.display = "block";
    } else {
        monthList.style.display = "none";
    }
});

// 일 버튼 클릭시 일 리스트창 생성
dayButton.addEventListener("click", () => {
    if (dayList.style.display === "none") {
        dayList.style.display = "block";
    } else {
        dayList.style.display = "none";
    }
});

// 연도 리스트창에서 버튼 클릭 시 내용 기입
yearListButton.forEach((button) => {
    button.addEventListener("click", () => {
        yearList.style.display = "none";
        yearText.innerText = button.innerText.trim();
    });
});

// 월 리스트창에서 버튼 클릭 시 내용 기입
monthListButton.forEach((button) => {
    button.addEventListener("click", () => {
        monthList.style.display = "none";
        monthText.innerText = button.innerText.trim();
    });
});

// 일 리스트창에서 버튼 클릭 시 내용 기입
dayListButton.forEach((button) => {
    button.addEventListener("click", () => {
        dayList.style.display = "none";
        dayText.innerText = button.innerText.trim();
        nextButton.style.backgroundColor = "#fada0a";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#fee500";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#fada0a";
        });
    });
});
