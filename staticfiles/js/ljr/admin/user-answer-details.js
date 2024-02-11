const addButton = document.querySelector("button.comment-content-admin-button-add");

// console.log(addbutton);
addButton.addEventListener("mouseover", (e) => {
    e.target.style.background = "#f2b8cb";
});

addButton.addEventListener("mouseout", (e) => {
    e.target.style.background = "#a294fc";
});

//

const textarea = document.querySelector("textarea");

addButton.addEventListener("click", function () {
    const answerText = textarea.value;
    let count = 0;

    count++;

    if (textarea.value.length == 0) {
        alert("답변을 입력하세요.");
    } else {
        const addAnswer = document.querySelector("ul.admin-answer");
        const datetime = new Date(); // Get the current datetime
        const gap = timeForToday(datetime); // Calculate the time gap

        addAnswer.innerHTML += `<li class="admin-answer-list">
            <!-- 관리자 답변 칸 이미지 -->
            <div class="admin-answer-list-img-div">
                <div>
                    <div class="admin-answer-list-img-div-button-div">
                        <button class="admin-answer-list-button" type="button">
                            <img
                                src="../admin/images/favicon.png"
                                class="admin-answer-list-img"
                            />
                            <div class="admin-answer-list-img-end-div"></div>
                        </button>
                    </div>
                </div>

                <div class="admin-answer-list">
                    <div class="admin-answer-list-info-remove-button">
                        <div class="admin-answer-list-name-div">
                            <div class="admin-answer-list-name-div-text">관리자</div>
                        </div>
                        <button aria-label="remove-button" class="remove-button">
                            <img
                                class="remove-button-img"
                                src="../admin/images/delete.png"
                                style="width: 20px"
                                alt=""
                            />
                        </button>
                    </div>
                    <!-- 답글 내용 -->
                    <div class="admin-answer-list-comment-div">
                        <p class="admin-answer-list-comment-div-p">
                            <span class="${count++}">${answerText}</span>
                        </p>
                    </div>
                    <div style="height: 8px"></div>
                    <div class="admin-answer-list-comment-time-div">
                        <span class="admin-answer-list-comment-time-span">${gap}</span>
                    </div>
                </div>
            </div>
            <div style="height: 28px"></div>
            <div class="border-t-border-primary"></div>
            <div style="height: 28px"></div>
        </li>`;
        textarea.value = "";

        const removeButtons = document.querySelectorAll("button.remove-button");
        removeButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                if (!confirm("정말로 삭제하시겠습니까?")) {
                    return false;
                }
                e.target.closest("li").remove();
            });
        });
    }
});

// Function to calculate the time gap
function timeForToday(datetime) {
    const today = new Date();
    const date = new Date(datetime);

    let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

    if (gap < 1) {
        return "방금 전";
    }

    if (gap < 60) {
        return `${gap}분 전`;
    }

    gap = Math.floor(gap / 60);

    if (gap < 24) {
        return `${gap}시간 전`;
    }

    gap = Math.floor(gap / 24);

    if (gap < 31) {
        return `${gap}일 전`;
    }

    gap = Math.floor(gap / 31);

    if (gap < 12) {
        return `${gap}개월 전`;
    }

    gap = Math.floor(gap / 12);

    return `${gap}년 전`;
}

const cancelButton = document.querySelector("button.comment-content-admin-button-cancel");

cancelButton.addEventListener("click", () => {
    textarea.value = "";
});
