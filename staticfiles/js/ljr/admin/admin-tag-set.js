const tagList = document.querySelector("div.details-list-add-list");
const taginput = document.querySelector("input.tag-text");
var count = 0;

taginput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        count++;
        if (e.target.value == "") {
            taginput.style.border = "solid red";
            taginput.style.borderWidth = "2px";
            return;
        }
        taginput.style.border = "";

        const tagElement = document.createElement("p");
        tagElement.classList.add(`tag-${count}`);
        tagElement.innerHTML = `<span class="tag"> #${e.target.value}</span> <button class="del"> 삭제</button>`;
        tagList.appendChild(tagElement);

        e.target.value = "";
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
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

taginput.addEventListener("focus", () => {
    taginput.style.border = "solid #9575cd";
    taginput.style.borderWidth = "2px";
});

taginput.addEventListener("blur", () => {
    taginput.style.border = "";
    taginput.style.borderWidth = "";
});
