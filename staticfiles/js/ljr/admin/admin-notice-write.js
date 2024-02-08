const title = document.querySelector("label.title-text-label");
const input = document.querySelector("input.title-text-input");
// console.log(input);

input.addEventListener("focus", () => {
    title.style.border = "2px solid #b388ff";
});

input.addEventListener("blur", () => {
    title.style.border = "";
});

// 태그 선택 셀렉트
const taglist = document.getElementById("taglist");
const tagAdd = document.querySelector("div.taglistAdd"); // 수정: # 기호 추가
// console.log(tagAdd);

taglist.addEventListener("change", (e) => {
    const tagValue = e.target.value;
    if (tagAdd.innerHTML.includes(`#${tagValue}`)) {
        // 이미 존재하는 태그라면 처리
        input.value = ""; // 입력값 초기화 또는 다른 처리를 할 수 있습니다.
    } else {
        tagAdd.innerHTML += `<div class="tagInner"> # ${tagValue} </div>`;
    }
});

const edit = document.querySelector("button.category-fix-button");

// console.log(edit);

const selectCategory = document.querySelector("#admin-category");
// console.log(selectCategory);

edit.addEventListener("click", (e) => {
    const addCategory = prompt("추가할 카테고리를 입력해주세요");
    if (addCategory) {
        // 사용자가 취소 버튼을 누르지 않은 경우
        let isDuplicate = false;
        // 중복 검사
        for (let i = 0; i < selectCategory.options.length; i++) {
            if (selectCategory.options[i].value === addCategory) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            // 중복이 아닌 경우에만 옵션 추가
            const option = `<option>${addCategory}</option>`;
            selectCategory.innerHTML += option;
        } else {
            alert("이미 존재하는 카테고리입니다.");
        }
    }
});

const delButton = document.querySelector("button.category-del-button");

delButton.addEventListener("click", () => {
    const deleteCategory = prompt("삭제할 카테고리를 입력해주세요");
    if (deleteCategory) {
        const options = document.querySelectorAll("#admin-category option");
        let found = false;
        options.forEach((option) => {
            if (option.textContent === deleteCategory) {
                option.remove();
                found = true;
            }
        });
        if (!found) {
            alert("해당하는 카테고리를 찾을 수 없습니다.");
        }
    }
});
