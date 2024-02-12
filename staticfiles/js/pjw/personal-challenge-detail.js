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
const actionbutton = document.querySelector("div#action-button");
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

// 좋아요 버튼 (자랑하기)

// 좋아요 버튼 (댓글)

// 좋아요 (자랑하기 사진)

// 댓글 누르면 댓글창 열리기
const input = document.querySelector("div#mouse");
const nomal = document.querySelector("div#review-nomal");
const click = document.querySelector("div#review-click");
const box = document.querySelector("textarea.secret-user-screen-on");

input.addEventListener("click", () => {
    console.log("들어옴");
    nomal.style.display = "none";
    click.style.display = "flex";
});

box.addEventListener("blur", () => {
    console.log("들어옴");
    nomal.style.display = "flex";
    click.style.display = "none";
});

// 댓글 적으면 글자수 카운팅

// 자랑하기 사진 옆 도시락 열기 (공유/신고)

// 댓글 도시락 열기 (신고)

//
