// "삭제" 버튼을 선택합니다.
const delButtons = document.querySelectorAll("button.details-list-add-list-del-button");

// 각 "삭제" 버튼에 대해 반복합니다.
delButtons.forEach((button) => {
    // 버튼에 클릭 이벤트를 추가합니다.
    button.addEventListener("click", (e) => {
        if (!confirm("정말로 삭제하시겠습니까?")) {
            return false;
        }
        // 클릭된 "삭제" 버튼의 부모 요소인 리스트 아이템을 찾아 제거합니다.
        e.target.closest("li").remove();
    });
});

const badgeButton = document.querySelector("button.write");

badgeButton.addEventListener("mouseover", (e) => {
    e.target.style.background = "#f2b8cb";
});
badgeButton.addEventListener("mouseout", (e) => {
    e.target.style.background = "#1d1d1e";
});

const fixButtons = document.querySelectorAll("button.details-list-add-list-fix-button");

fixButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        alert("저장되었습니다.");
    });
});
