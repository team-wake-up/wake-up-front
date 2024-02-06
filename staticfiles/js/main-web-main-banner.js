// let slideIndex = 0;
// const slideContainer = document.querySelector(
//     ".main-section-left-slide-doyorn-divend-container"
// );
// const slideItems = Array.from(slideContainer.children);

// // 첫번째 슬라이드를 복사해서 맨 뒤에 붙이기
// const firstClones = slideItems[0].cloneNode(true);
// slideContainer.appendChild(firstClones);

// // 마지막 슬라이드를 복사해서 맨 앞에 붙이기
// const lastClones = slideItems[slideItems.length - 1].cloneNode(true);
// slideContainer.insertBefore(lastClones, slideItems[0]);

// // 슬라이드의 너비를 계산
// const slideWidths = slideItems[0].getBoundingClientRect().width;

// // 각 슬라이드의 위치 설정
// slideItems.forEach((slide, index) => {
//     slide.style.left = slideWidths * index + "px";
// });

// // 슬라이드 이동 함수
// const autoSlide = () => {
//     slideIndex++;
//     slideContainer.style.transition = "transform 0.5s";
//     slideContainer.style.transform = `translateX(${-700 * (slideIndex + 1)}px)`;
//     if (slideIndex == 3) {
//         setTimeout(() => {
//             slideContainer.style.transition = "transform 0s";
//             slideContainer.style.transform = `translate(-700px)`;
//         }, 500);
//         slideIndex = 0;
//     }
// };

// let intervalIds = setInterval(autoSlide, 2000);

//////////

// const div = document.querySelector(
//     "main-section-left-slide-doyorn-divend-container"
// );
const banners = document.querySelector(
    ".main-section-left-slide-doyorn-divend-container"
);
let counts = 0;
setInterval(() => {
    counts++;
    count == 3 && (counts = 0);
    banners.style.transition = `transform 0.5s`;
    banners.style.transform = `translate(${-700 * counts}px)`;
}, 2000);

const lastBanner = document.createElement("div");
const firstBanner = document.createElement("div");
// const banner = document.querySelector("main-section-left-slide-doyorn-divend-container");
// const arrows = document.querySelectorAll("div.arrow");

const first = document.querySelectorAll(".main-section-slide");
console.log(first);

lastBanner.innerHTML = first[0].innerHTML;
lastBanner.classList.add("main-section-slides");
console.log(lastBanner);
banners.appendChild(lastBanner);

firstBanner.innerHTML = first[2].innerHTML;
firstBanner.classList.add("main-section-slides");
banners.insertBefore(firstBanner, document.querySelector("main-slide"));
console.log(banners);

banners.style.transform = `translate(-700px)`;

// 무한 슬라이드
const autoSlide = () => {
    // 이동되는 데 걸리는 시간은 0.5초
    counts++;
    banners.style.transition = "transform 0.5s";
    banners.style.transform = `translateX(${-700 * (counts + 1)}px)`;
    if (counts == 3) {
        setTimeout(() => {
            banners.style.transition = "transform 0s";
            banners.style.transform = `translateX(-700px)`;
        }, 500);
        counts = 0;
    }
};

let inter = setInterval(autoSlide, 2000);

//////////

// let slideCount = 0;
// const bannerElement = document.querySelector(
//     ".main-section-left-slide-doyorn-divend-container"
// );
// const slideElements = Array.from(bannerElement.children);

// const firstClones = slideElements[0].cloneNode(true);
// bannerElement.appendChild(firstClones);

// const lastClones = slideElements[slideElements.length - 1].cloneNode(true);
// bannerElement.insertBefore(lastClones, slideElements[0]);

// const slideWidths = slideElements[0].getBoundingClientRect().width;

// slideElements.forEach((slide, index) => {
//     slide.style.left = slideWidths * index + "px";
// });

// const autoSlide = () => {
//     slideCount++;
//     bannerElement.style.transition = "transform 0.5s";
//     bannerElement.style.transform = `translate(${-700 * (slideCount + 1)}px)`;
//     if (slideCount == 3) {
//         setTimeout(() => {
//             bannerElement.style.transition = "transform 0s";
//             bannerElement.style.transform = `translate(-700px)`;
//         }, 500);
//         slideCount = 0;
//     }
// };

// let intervalIds = setInterval(autoSlide, 2000);
