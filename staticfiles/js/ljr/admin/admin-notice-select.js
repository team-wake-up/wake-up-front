const delButton = document.querySelector("button.details-list-add-list-del-button");

// fixButton.addEventListener("click", (e) => {
//     if (!confirm("정말로 삭제하시겠습니까?")) {
//         return false;
//     }
// });

const removeList = document.querySelector("li.details-list-add-list-content-all");

// console.log(removeList);

function delOk() {
    if (!confirm("정말로 삭제하시겠습니까?")) {
        return false;
    }
    removeList.remove();
}

const badgeButton = document.querySelector("button.write");

badgeButton.addEventListener("mouseover", (e) => {
    e.target.style.background = "#f2b8cb";
});
badgeButton.addEventListener("mouseout", (e) => {
    e.target.style.background = "#1d1d1e";
});
