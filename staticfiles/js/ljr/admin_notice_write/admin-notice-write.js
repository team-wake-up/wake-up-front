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

const delButtons = document.querySelectorAll(
    "button.details-list-add-list-del-target"
);
console.log(delButtons);

delButtons.addEventListener("click", (e) => {
    delButton.parentElement.removeChild(badgeDiv);
});
