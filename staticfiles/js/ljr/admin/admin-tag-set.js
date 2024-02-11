// 추가한 태그를 담는 div
const tagList = document.querySelector("div.details-list-add-list");

// console.log(tagList);

// 추가 입력할 텍스트박스
const taginput = document.querySelector("input.tag-text");
var count = 0;
taginput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        count++;
        if (e.target.value == "") {
            taginput.style.border = "1px solid red";
            return;
        }
        taginput.style.border = "";
        tagList.innerHTML += `<p class="tag-${count}"><span class="tag"> #${e.target.value}</span> <button class="del"> 삭제</button><p>`;
        taginput.value = "";
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        // 삭제 버튼이 클릭되었을 때
        const tagName = e.target.parentElement.querySelector(".tag").textContent.trim();
        const confirmDelete = confirm(`${tagName} 태그를 정말 삭제 하시겠습니까?`);
        if (confirmDelete) {
            const tagToRemove = e.target.parentElement;
            tagToRemove.remove();
        }
    }
});

const Button = document.querySelector("button.write");

Button.addEventListener("mouseover", (e) => {
    e.target.style.background = "#f2b8cb";
});
Button.addEventListener("mouseout", (e) => {
    e.target.style.background = "#1d1d1e";
});
