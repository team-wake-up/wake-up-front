const div = document.querySelector(
    ".main-section-left-slide-doyorn-divend-container"
);
const slideControl = document.querySelector(".slider-control-bottomright-div");

let counts = 0;

setInterval(() => {
    counts++;
    counts == 3 && (counts = 0);
    div.style.transition = `transform 0.5s`;
    div.style.transform = `translate(${-700 * counts}px)`;
    updateSlideControl(counts); // 슬라이드 변경 시 슬라이드 컨트롤 업데이트
}, 2000);

function updateSlideControl(currentSlideIndex) {
    const totalSlides = 3; // 전체 슬라이드 개수
    slideControl.innerHTML = `<strong class="slider-control-bottomright-strong">슬라이드</strong>${
        currentSlideIndex + 1
    }/${totalSlides}`;
}
