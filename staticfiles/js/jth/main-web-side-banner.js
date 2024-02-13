let count = 0;
const banner = document.querySelector(".listend-list");
const slides = Array.from(banner.children); //배열로 만든다
const buttons = Array.from(document.querySelectorAll(".list_paging-button"));

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
function moveSlide(index) {
    count = index;
    banner.style.transform = `translateX(-${slideWidth * (count + 1)}px)`;
    buttons.forEach((button, i) => {
        if (i === index) {
            button.style.backgroundColor = "#202020";
        } else {
            button.style.backgroundColor = "#AEAFAE";
        }
    });
}

// 각 버튼에 클릭 이벤트 등록
buttons.forEach((button, index) => {
    button.addEventListener("click", () => moveSlide(index));
});

// 2초마다 슬라이드 이동
let intervalId = setInterval(
    () => moveSlide((count + 1) % slides.length),
    2000
);

// 버튼 클릭 시 자동 슬라이드 일시정지 및 재시작
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = setInterval(
            () => moveSlide((count + 1) % slides.length),
            2000
        );
    });
});
