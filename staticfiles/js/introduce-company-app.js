// 같이기부 후기 슬라이드 배너
const dots = document.querySelectorAll("button.control-button");
const banner = document.querySelector("div.slider-list");
const divs = document.querySelectorAll(".slider-list .slide");
// console.log(banner);
// console.log(dots);
let count = 1;
let check = true;
let clickCheck = false;
let temp;

let slide = setInterval(() => autoSlide(), 3000);

changeButtonStyle();

function changeButtonStyle() {
    if (temp) {
        temp.style.opacity = "0.2";
    }
    temp = dots[count - 1];
    dots[count - 1].style.opacity = "0.7";
}

dots.forEach((dot, i) => {
    dot.addEventListener("mouseover", () => {
        clickCheck = dot.style.opacity == "0.7";
        dot.style.opacity = "0.7";
    });
    dot.addEventListener("mouseout", () => {
        if (clickCheck) {
            return;
        }
        dot.style.opacity = "0.2";
    });

    dot.addEventListener("click", () => {
        clickCheck = true;
        clearInterval(slide);
        count = i + 1;
        console.log(`${count}번째 버튼 클릭`);

        if (count == 1) {
            console.log("1들어옴");
            banner.style.transform = `translate(${-338.97 * i}px)`;
            banner.style.transition = "transform 0.7s";
            count = 1;
            changeButtonStyle();
            slide = setInterval(() => autoSlide(), 3000);
            return;
        }
        if (count == 2) {
            console.log("2들어옴");
            banner.style.transform = `translate(${-338.97 * i}px)`;
            banner.style.transition = "transform 0.7s";
            count = 2;
            changeButtonStyle();
            slide = setInterval(() => autoSlide(), 3000);
            return;
        }
        if (count == 3) {
            console.log("3들어옴");
            banner.style.transform = `translate(${-338.97 * i}px)`;
            banner.style.transition = "transform 0.7s";
            count = 3;
            changeButtonStyle();
            slide = setInterval(() => autoSlide(), 3000);
            return;
        }
        if (count == 4) {
            console.log("4들어옴");
            banner.style.transform = `translate(${-338.97 * i}px)`;
            banner.style.transition = "transform 0.7s";
            count = 4;
            changeButtonStyle();
            slide = setInterval(() => autoSlide(), 3000);
            return;
        }
        if (count == 5) {
            console.log("5들어옴");
            banner.style.transform = `translate(${-338.97 * i}px)`;
            banner.style.transition = "transform 0.7s";
            count = 5;
            changeButtonStyle();
            slide = setInterval(() => autoSlide(), 3000);
            return;
        }
    });
});

function autoSlide() {
    if (count == 1) {
        banner.style.transform = `translate(${-338.97 * 0}px)`;
        banner.style.transition = "transform 0.7s";
    }
    check = false;
    banner.style.transform = `translate(${-338.97 * count}px)`;
    // console.log(count);
    banner.style.transition = "transform 0.7s";
    count++;
    // console.log(count);

    if (count == 6) {
        banner.style.transform = `translate(${-338.97 * (count - 1)}px)`;
        setTimeout(() => {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(0px)`;
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => {
        check = true;
    }, 700);
}

// 모두의 행동 슬라이드 배너
const dots2 = document.querySelectorAll("button.action-control-button");
const banner2 = document.querySelector("div.action-slider-list");
const divs2 = document.querySelectorAll(".action-slider-list .action-prev-clone");
// console.log(banner);
// console.log(dots);
let count2 = 1;
let check2 = true;
let clickCheck2 = false;
let temp2;

let slide2 = setInterval(() => autoSlide2(), 3000);

changeButtonStyle2();

function changeButtonStyle2() {
    if (temp2) {
        temp2.style.opacity = "0.2";
    }
    temp2 = dots2[count2 - 1];
    dots2[count2 - 1].style.opacity = "0.7";
}

dots2.forEach((dot, i) => {
    dot.addEventListener("mouseover", () => {
        clickCheck2 = dot.style.opacity == "0.7";
        dot.style.opacity = "0.7";
    });
    dot.addEventListener("mouseout", () => {
        if (clickCheck2) {
            return;
        }
        dot.style.opacity = "0.2";
    });

    dot.addEventListener("click", () => {
        clickCheck2 = true;
        clearInterval(slide2);
        count2 = i + 1;
        console.log(`${count2}번째 버튼 클릭`);

        if (count2 == 1) {
            console.log("1들어옴");
            banner2.style.transform = `translate(${-354 * i}px)`;
            banner2.style.transition = "transform 0.7s";
            count2 = 1;
            changeButtonStyle2();
            slide = setInterval(() => autoSlide2(), 3000);
            return;
        }
        if (count2 == 2) {
            console.log("2들어옴");
            banner2.style.transform = `translate(${-354 * i}px)`;
            banner2.style.transition = "transform 0.7s";
            count2 = 2;
            changeButtonStyle2();
            slide = setInterval(() => autoSlide2(), 3000);
            return;
        }
        if (count2 == 3) {
            console.log("3들어옴");
            banner2.style.transform = `translate(${-354 * i}px)`;
            banner2.style.transition = "transform 0.7s";
            count2 = 3;
            changeButtonStyle2();
            slide = setInterval(() => autoSlide2(), 3000);
            return;
        }
        if (count2 == 4) {
            console.log("4들어옴");
            banner2.style.transform = `translate(${-354 * i}px)`;
            banner2.style.transition = "transform 0.7s";
            count2 = 4;
            changeButtonStyle2();
            slide = setInterval(() => autoSlide2(), 3000);
            return;
        }
        if (count2 == 5) {
            console.log("5들어옴");
            banner2.style.transform = `translate(${-354 * i}px)`;
            banner2.style.transition = "transform 0.7s";
            count2 = 5;
            changeButtonStyle2();
            slide = setInterval(() => autoSlide2(), 3000);
            return;
        }
    });
});

function autoSlide2() {
    if (count2 == 1) {
        banner2.style.transform = `translate(${-354 * 0}px)`;
        banner2.style.transition = "transform 0.7s";
    }
    check2 = false;
    banner2.style.transform = `translate(${-354 * count2}px)`;
    // console.log(count);
    banner2.style.transition = "transform 0.7s";
    count2++;
    // console.log(count2);

    if (count2 == 6) {
        banner2.style.transform = `translate(${-354 * (count2 - 1)}px)`;
        setTimeout(() => {
            banner2.style.transition = "transform 0s";
            banner2.style.transform = `translate(0px)`;
        }, 700);
        count2 = 1;
    }
    changeButtonStyle2();
    setTimeout(() => {
        check2 = true;
    }, 700);
}

// 네이게이션 바 컨트롤

const lists = document.querySelectorAll("li#tab-menu");
const listTexts = document.querySelectorAll("span#tab-menu-txt");
const introduce = document.querySelector("div#company-introduce");
const current = document.querySelector("div#current");

lists.forEach((list, i) => {
    // console.log(i);
    listTexts.forEach((text, j) => {
        console.log(j);
        list.addEventListener("click", () => {
            console.log(i);
            if (i == 0) {
                console.log("11111");
                list.classList.add("tab-menu-on");
                lists[1].classList.remove("tab-menu-on");
                text.classList.add("tab-menu-txt-on");
                listTexts[1].classList.remove("tab-menu-txt-on");
                introduce.style.display = "block";
                current.style.display = "none";
            } else if (i == 1) {
                console.log("2222");
                list.classList.add("tab-menu-on");
                lists[0].classList.remove("tab-menu-on");
                text.classList.add("tab-menu-txt-on");
                listTexts[0].classList.remove("tab-menu-txt-on");
                introduce.style.display = "none";
                current.style.display = "block";
            }
        });
    });
});
