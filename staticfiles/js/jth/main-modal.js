// 모든 버튼 요소 선택
const buttonElements = document.querySelectorAll(
    ".main-section-left-up-main-content-info-end-left"
);

// 각 버튼 요소에 대한 처리
buttonElements.forEach((buttonElement) => {
    const spanElement = buttonElement.querySelector(
        ".main-section-left-up-main-content-info-end-left-span"
    );

    // 버튼에 마우스가 올라갔을 때 이벤트 리스너 추가
    buttonElement.addEventListener("mouseenter", function () {
        // 2초 동안 서서히 나타나도록 애니메이션 추가
        spanElement.style.transition = "opacity 2s";
        spanElement.style.opacity = "1";
    });

    // 버튼에서 마우스가 벗어났을 때 이벤트 리스너 추가
    buttonElement.addEventListener("mouseleave", function () {
        // span 요소를 숨김
        spanElement.style.opacity = "0";
    });
});
