const nameInput = document.querySelector("input#id-nickname-4");
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

const numberInput = document.querySelector("input#phoneNumberForFindPassword");
const requestButton = document.querySelector("button.btn-g");
const field = document.querySelector("fieldset.fld-apply.passcode-fieldset");

// 인증요청 버튼 누를 시 전화번호 정규식 검사
requestButton.addEventListener("click", () => {
    // 타이머 함수 실행
    countdownTimer();
    const phoneNumberRegex = /^01([016789])(\d{3,4})(\d{4})$/;
    if (phoneNumberRegex.test(numberInput.value)) {
        errorMsg.style.display = "none";
        field.style.display = "block";
        requestButton.style.display = "none";
    } else {
        errorMsg.style.display = "block";
    }
});

const timerElement = document.querySelector("div#time-count");
let timerInterval; // 타이머를 전역 변수로 선언하여 재사용 가능

// 타이머 함수
function countdownTimer() {
    // 기존 타이머가 실행 중이라면 중지합니다.
    clearInterval(timerInterval);

    // 시작 시간 설정 (05:00)
    let minutes = 5;
    let seconds = 0;

    timerInterval = setInterval(() => {
        // 시간 표시 형식 맞추기
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;

        // 시간 업데이트
        timerElement.textContent = formattedTime;

        // 시간이 00:00이면 타이머 중지
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
        } else {
            // 시간이 00:00이 아니면 1초씩 감소
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }
    }, 1000);
}

const certifyInput = document.querySelector("input#passcodeByPhone");
const certifyRegex = /^\d{6}$/;
const nextButton = document.querySelector("button#nextButton");

// 인증번호 정규식 검사 맞으면 버튼 색 변경
certifyInput.addEventListener("input", () => {
    if (certifyRegex.test(certifyInput.value)) {
        nextButton.style.backgroundColor = "#fee500";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#fada0a";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#fee500";
        });
    } else {
        nextButton.style.backgroundColor = "";
    }
});

const resend = document.querySelector("a.resend-passcode");

// 인증번호 재발송시 타이머 초기화
resend.addEventListener("click", () => {
    countdownTimer();
    certifyInput.value = "";
});
