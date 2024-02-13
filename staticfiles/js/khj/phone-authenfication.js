// 전화번호 국적 선택 ex) +82
const list = document.querySelector("ul.list-select");
const showButton = document.querySelector("button.link-selected");
const selectButton = document.querySelectorAll("button.link-select");
const arrow = document.querySelector("span.ico-comm.ico-arr");
const error = document.querySelector("#error-msg");
const input = document.querySelector("input.tf-g");
const box = document.querySelector("div.box-tf");

// 인증번호 요청후 뜨는 문구 ▼
const errorBox = document.querySelector("#certification");
const noneMsg = document.querySelector("a.link-g");
const certificationButton = document.querySelector("button.btn-round");

// 시작화면 인증번호 요청후 뜨는 문구 안보이게 설정
errorBox.style.display = "none";
// 시작화면 인증번호 못받음 태그 안보이게 설정
noneMsg.style.display = "none";
//시작화면 input창 focus 설정
input.focus();
// 시작화면 에러창 안보이게 설정
error.style.display = "none";
// 시작화면 검정색 초기 설정
box.style.borderColor = "#333";

// input창 입력시 error 문구 삭제
const keyupHandler = () => {
    box.style.borderColor = "#333";
    error.style.display = "none";
};
input.addEventListener("keyup", keyupHandler);

// input창 blur시 색상변경
const blurHandler = () => {
    box.style.borderColor = "#e65f3e";
    error.style.display = "block";
};
input.addEventListener("blur", blurHandler);

// 화살표 방향 변경, 리스트창 생성
showButton.addEventListener("click", () => {
    if (list.style.display === "none") {
        list.style.display = "block";
        arrow.style.transform = " translateY(-50%) rotate( 180deg )";
    } else {
        list.style.display = "none";
        arrow.style.transform = "";
    }
});

// +82 담겨있는 div
const firstNumber = document.querySelector("div#firstNumber");

// 버튼 클릭하면 리스트창 none으로 바꾸기
// 국제 전화 선택
selectButton.forEach((button) => {
    button.addEventListener("click", () => {
        list.style.display = "none";
        const selectText = button.innerHTML;
        const startIndex = selectText.indexOf("(");
        const endIndex = selectText.indexOf(")");
        let number = selectText.slice(startIndex + 1, endIndex);
        firstNumber.innerHTML = number;
        arrow.style.transform = "";
    });
});

// 취소버튼 클릭 시 input 값 삭제
const clearButton = document.querySelector("button.btn-clear");

// 시작화면 삭제 버튼 안보이게 설정
clearButton.style.display = "none";

clearButton.addEventListener("click", () => {
    // 클릭시 input값 삭제
    input.value = "";
    clearButton.style.display = "none";
});

// input값 있으면 삭제버튼 보이게 설정
input.addEventListener("input", () => {
    if (input.value !== "") {
        clearButton.style.display = "inline-block";
    } else {
        clearButton.style.display = "none";
    }
});

// 인증요청 버튼 클릭하면 인증번호 input창 생성
certificationButton.addEventListener("click", () => {
    countdownTimer();
    const phoneNumberRegex = /^01([016789])(\d{3,4})(\d{4})$/;
    if (phoneNumberRegex.test(input.value)) {
        errorBox.style.display = "block";
        noneMsg.style.display = "block";
        error.style.display = "none";
        box.style.borderBottom = "solid #ccc";
        box.style.borderWidth = "0 0 2px";
        certificationButton.style.display = "none";
        input.readOnly = true;
        showButton.disabled = true;
        clearButton.style.display = "none";
        // 박스색 회색으로 변경
        box.style.setProperty("-webkit-text-fill-color", "#8e8e8e");
        arrow.style.backgroundPosition = "0 -105px";

        // blur, keyup 작동안되게 설정
        input.removeEventListener("keyup", keyupHandler);
        input.removeEventListener("blur", blurHandler);
    } else {
        error.style.display = "block";
    }
});

const timerElement = document.querySelector(".num-count.num-timer");

// 타이머 함수
function countdownTimer() {
    // 시작 시간 설정 (05:00)
    let minutes = 5;
    let seconds = 0;

    const timerInterval = setInterval(() => {
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

// 인증번호 숫자 6자리면 버튼 색 바뀜
const nextButton = document.querySelector("button#next-button");
const certifyNumber = document.querySelector("input#sms-passcode--15");
const certifyRegex = /^\d{6}$/;
const certifyError = document.querySelector("p.info-tf");
const certifyDiv = document.querySelector("div.box-tf.error");

certifyNumber.addEventListener("input", () => {
    if (certifyRegex.test(certifyNumber.value)) {
        certifyError.style.display = "none";
        certifyDiv.style.borderBottom = "2px solid black";
        nextButton.style.backgroundColor = "#fee500";
        nextButton.addEventListener("mouseover", () => {
            nextButton.style.backgroundColor = "#fada0a";
        });
        nextButton.addEventListener("mouseout", () => {
            nextButton.style.backgroundColor = "#fee500";
        });
    } else {
        nextButton.style.backgroundColor = "f0f0f0";
    }
});

// 모달
const modal = document.querySelector("div.common-layer");
const closeButton = document.querySelector("button.btn-close");
modal.style.display = "none";

noneMsg.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});
