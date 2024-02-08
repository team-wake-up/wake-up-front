const fixButton = document.querySelector(
    "button.details-list-add-list-fix-button"
);

fixButton.addEventListener("click", (e) => {
    alert("저장되었습니다.");
});

const delButton = document.querySelector(
    "button.details-list-add-list-del-button"
);

// fixButton.addEventListener("click", (e) => {
//     if (!confirm("정말로 삭제하시겠습니까?")) {
//         return false;
//     }
// });

const removeList = document.querySelector(
    "li.details-list-add-list-content-all"
);

// console.log(removeList);

function delOk() {
    if (!confirm("정말로 삭제하시겠습니까?")) {
        return false;
    }
    removeList.remove();
}
