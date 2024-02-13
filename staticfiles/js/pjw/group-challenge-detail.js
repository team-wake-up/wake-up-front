// tab-manu-bar 클릭시 미션소개, 행동보드 페이지 전환
const missions = document.querySelectorAll("li#select-button");
const missionTexts = document.querySelectorAll("span#select-menu");
const introduce = document.querySelector("div#missionTab");
const current = document.querySelector("div#boardTab");

missions.forEach((mission, i) => {
    missionTexts.forEach((text, j) => {
        mission.addEventListener("click", () => {
            if (i == 0) {
                mission.classList.add("tab-menu-on");
                missions[1].classList.remove("tab-menu-on");
                text.classList.add("tab-menu-txt-on");
                missionTexts[1].classList.remove("tab-menu-txt-on");
                introduce.style.display = "block";
                current.style.display = "none";
            } else if (i == 1) {
                mission.classList.add("tab-menu-on");
                missions[0].classList.remove("tab-menu-on");
                text.classList.add("tab-menu-txt-on");
                missionTexts[0].classList.remove("tab-menu-txt-on");
                introduce.style.display = "none";
                current.style.display = "block";
            }
        });
    });
});

//시작하기 모달
const dobutton = document.querySelector("div#do-button");
const challengedo = document.querySelector("div#do-modal");
const doclose = document.querySelector("button.do-close-button");
const body = document.querySelector("body");

dobutton.addEventListener("click", () => {
    challengedo.style.display = "flex";
    body.style.overflow = "hidden";
});

doclose.addEventListener("click", () => {
    challengedo.style.display = "none";
    body.style.removeProperty("overflow");
});

//자랑하기 모달
const actionbutton = document.querySelector("button.p-chall-movement-button");
const challengereview = document.querySelector("div#review-modal");
const reviewclose = document.querySelectorAll("#review-close-button");
const boastcancle = document.querySelector("div#boastcancle-modal");
const save = document.querySelector("button#boast-save");
const cancle = document.querySelector("button#boast-cancle");

// 등록 클릭시 모달창
actionbutton.addEventListener("click", () => {
    challengereview.style.display = "flex";
    body.style.overflow = "hidden";
});

// x 버튼, 취소버튼 클릭시 취소 모달창
reviewclose.forEach((review) => {
    review.addEventListener("click", () => {
        boastcancle.style.display = "flex";
        body.style.overflow = "hidden";

        save.addEventListener("click", () => {
            challengereview.style.display = "none";
            boastcancle.style.display = "none";
            body.style.removeProperty("overflow");
        });

        cancle.addEventListener("click", () => {
            boastcancle.style.display = "none";
            body.style.removeProperty("overflow");
        });
    });
});

//자랑하기 모달창 글씨 카운트
const challbox = document.querySelector("textarea.p-chall-text-form");
const challValue = document.querySelector(".box-counts-check .box-count-check-style");

challbox.addEventListener("input", () => {
    challValue.innerText = challbox.value.length;
});

//자랑하기 사진 업로드 (1장만 업로드 가능)
const browseBtn = document.querySelector("button.p-chall-photo-button");
const realInput = document.querySelector("input#attach");
const profileImg = document.querySelector("ul.photo-attached");
let li = "";

browseBtn.addEventListener("click", (e) => {
    realInput.click();
    realInput.addEventListener("change", (e) => {
        const newLI = document.createElement("li");
        const [file] = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", (e) => {
            const path = e.target.result;
            if (path.includes("image")) {
                profileImg.innerHTML = `<li class="li-test"><img src="${path}" class="test" /></li>`;
            } else {
                alert("사진만 올릴 수 있습니다.");
            }
        });
    });
});

// 좋아요 버튼 (자랑하기)
const actionLike = document.querySelector("button.like-number-button");
const actionIcon = document.querySelector("div.like-number-button-icon");

actionLike.addEventListener("click", (e) => {
    actionIcon.classList.toggle("on");
});

// 좋아요 버튼 (댓글)
const commentLike = document.querySelector("button.comment-like-button");
const commentIcon = document.querySelector(".comment-like-icon-style");

commentLike.addEventListener("click", (e) => {
    console.log(commentIcon);

    commentIcon.classList.toggle("on");
});

// 좋아요 (행동보드 사진)
const reviewLike = document.querySelector("button.like-selection-button");
const reviewIcon = document.querySelector("div.review-like-icon-button");

reviewLike.addEventListener("click", (e) => {
    reviewIcon.classList.toggle("on");
});

// 댓글 누르면 댓글창 열리기
const input = document.querySelector("div#mouse");
const nomal = document.querySelector("div#review-nomal");
const click = document.querySelector("div#review-click");
const box = document.querySelector("textarea.secret-user-screen-on");

input.addEventListener("click", () => {
    nomal.style.display = "none";
    click.style.display = "flex";
});

box.addEventListener("blur", () => {
    nomal.style.display = "flex";
    click.style.display = "none";
});

// 댓글 적으면 글자수 카운트
const reviewValue = document.querySelector(".screen-count-style .screen-count-max-style");

box.addEventListener("input", () => {
    reviewValue.innerText = box.value.length;
});

//자랑하기 최신순/응원순
const sonInput = document.querySelector("div.action-list-button");
const change = document.querySelector("div.list-change-tooltip");
const recentButton = document.querySelector("button.list-menu-first");
const cheerButton = document.querySelector("button.list-menu-second");
const recent = document.querySelector("span#recent");
const cheer = document.querySelector("span#cheer");

sonInput.addEventListener("click", () => {
    change.classList.toggle("display-flex");
});

recentButton.addEventListener("click", () => {
    recent.style.display = "flex";
    cheer.style.display = "none";
});

cheerButton.addEventListener("click", () => {
    recent.style.display = "none";
    cheer.style.display = "flex";
});

// 자랑하기 사진 옆 도시락 열기 (신고)
const actionInput = document.querySelector("button.board-button-push");
const actionNomal = document.querySelector("div.board-option-tooltip");

actionInput.addEventListener("click", () => {
    actionNomal.style.display = "flex";
});

actionInput.addEventListener("blur", () => {
    actionNomal.style.display = "none";
});

// 댓글 도시락 열기 (신고)
const addInput = document.querySelector("button.comment-set-button");
const addNomal = document.querySelector("div.set-button-tool");
const reportPage = document.querySelector("div#report-btn");
const saveReport = document.querySelector("button.report-sign-button");
const cancleReport = document.querySelector("button.report-cancel-button");

addInput.addEventListener("click", () => {
    addNomal.classList.toggle("display-flex");
    // addNomal.classList.add("display-flex");
});

//신고 버튼 눌렀을 때 신고 모달창
addNomal.addEventListener("click", () => {
    reportPage.style.display = "flex";
    body.style.overflow = "hidden";
    // 등록 버튼  클릭시
    saveReport.addEventListener("click", () => {
        reportPage.style.display = "none";
        body.style.removeProperty("overflow");
    });
    // 취소 버튼 클릭시
    cancleReport.addEventListener("click", () => {
        reportPage.style.display = "none";
        body.style.removeProperty("overflow");
        addNomal.style.display = "none";
    });
});

//신고 모달창 사유 선택
const reportList = document.querySelectorAll(".report-label-style");
const gList = document.querySelectorAll(".report-not-check");
const circleList = document.querySelectorAll(".report-not-check-circle");
const spanList = document.querySelectorAll(".report-label-texts");

reportList.forEach((report, i) => {
    report.addEventListener("click", () => {
        // console.log(report + i);
        if (i == 0) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 1) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 2) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 3) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 4) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 5) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 6) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 7) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
        if (i == 8) {
            for (let j = 0; j < 9; j++) {
                if (j == i) {
                    gList[i].classList.remove("report-not-check");
                    circleList[i].classList.remove("report-not-check-circle");
                    spanList[i].classList.add("report-click");
                } else {
                    gList[j].classList.add("report-not-check");
                    circleList[j].classList.add("report-not-check-circle");
                    spanList[j].classList.remove("report-click");
                }
            }
        }
    });
});
