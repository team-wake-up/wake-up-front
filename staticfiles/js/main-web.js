// let count = 0;
// const lastBanner = document.createElement("div");
// const firstBanner = document.createElement("div");

// const banner = document.getElementsByClassName("listend-list");
// const buttons = document.getElementsByClassName("list_paging");

// const test = document.getElementsByClassName("main-right-slide");

// // let temp = buttons[0];

// lastBanner.innerHTML = test[0].innerHTML;
// // console.log(lastBanner.innerHTML);

// banner[0].appendChild(lastBanner);
// // console.log(banner[0]);

// firstBanner.innerHTML = test[2].innerHTML;
// // console.log(firstBanner.innerHTML);

// console.log(typeof banner[0]);
// console.log(typeof firstBanner);

// banner.insertBefore(
//     firstBanner.innerHTML,
//     document.querySelector("slide-current")
// );

// // banner.style.transform = `translate(-2000px)`;

// // 무한 슬라이드
// const autoSlide = () => {
//     // 이동되는 데 걸리는 시간은 0.5초
//     count++;
//     banner.style.transition = "transform 0.5s";
//     banner.style.transform = `translate(${-2000 * (count + 1)}px)`;
//     if (count == 3) {
//         setTimeout(() => {
//             banner.style.transition = "transform 0s";
//             banner.style.transform = `translate(-2000px)`;
//         }, 500);
//         count = 0;
//     }
//     console.log(temp);
//     temp.style.backgroundColor = "#f0f0f0";
//     buttons[count].style.background = "black";
//     temp = buttons[count];
// };

// let inter = setInterval(autoSlide, 2000);

let count = 0;
const banner = document.querySelector(".listend-list");
const slides = Array.from(banner.children);

// 첫번째 슬라이드를 복사해서 맨 뒤에 붙이기
const firstClone = slides[0].cloneNode(true);
banner.appendChild(firstClone);

// 마지막 슬라이드를 복사해서 맨 앞에 붙이기
const lastClone = slides[slides.length - 1].cloneNode(true);
banner.insertBefore(lastClone, slides[0]);

// 슬라이드의 너비를 계산
const slideWidth = slides[0].getBoundingClientRect().width;

// 각 슬라이드의 위치 설정
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
});

// 슬라이드 이동 함수
function autoSlide() {
    count++;
    if (count > slides.length) {
        banner.style.transform = `translateX(0)`;
        count = 0;
    } else {
        banner.style.transform = `translateX(-${slideWidth * count}px)`;
    }
}

// 2초마다 슬라이드 이동
setInterval(autoSlide, 2000);
