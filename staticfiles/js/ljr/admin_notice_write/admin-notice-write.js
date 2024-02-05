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

tagAdd.onclick = (e) => {
    tagAdd.removeChild(e.target);
};
