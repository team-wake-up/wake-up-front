NodeList.prototype.filter = Array.prototype.filter;

const all = document.querySelector("input.inp-choice-all");
const terms = document.querySelectorAll("input.inp-choice");
const button = document.querySelector("button.btn-g");

// 초기화면 버튼 비활성화 설정
button.disabled = true;

// 전체동의 클릭시 모든 체크박스 체크
all.addEventListener("click", (e) => {
    terms.forEach((term) => {
        term.checked = e.target.checked;
    });

    // 개별 항목 체크박스들이 모두 선택되었을 때 버튼 활성화 및 색상 변경
    button.disabled =
        terms.filter((term) => term.checked).length !== terms.length;

    if (button.disabled) {
        button.style.backgroundColor = "#fafafa";
    } else {
        button.style.backgroundColor = "#fee500";
    }
});

// 각자동의 전부 눌렀을 때 전체동의 체크
terms.forEach((term) => {
    term.addEventListener("click", (e) => {
        all.checked =
            terms.filter((term) => term.checked).length === terms.length;

        // 개별 항목 체크박스들이 모두 선택되었을 때 버튼 활성화 및 색상 변경
        button.disabled =
            terms.filter((term) => term.checked).length !== terms.length;

        if (button.disabled) {
            button.style.backgroundColor = "#fafafa";
        } else {
            button.style.backgroundColor = "#fee500";
        }
    });
});

// 필수 3개 활성화되면 버튼 활성화
const essential1 = document.querySelector("#terms-1");
const essential2 = document.querySelector("#terms-2");
const essential3 = document.querySelector("#terms-3");

function essential() {
    if (essential1.checked && essential2.checked && essential3.checked) {
        button.disabled = false;
        button.style.backgroundColor = "#fee500";
    } else {
        button.disabled = true;
        button.style.backgroundColor = "#fafafa";
    }
}

essential1.addEventListener("click", essential);
essential2.addEventListener("click", essential);
essential3.addEventListener("click", essential);

// 버튼 갖다대면 색변경
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#fada0a";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#fee500";
});
