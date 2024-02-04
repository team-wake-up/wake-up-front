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
        console.log(count);

        banner.style.transform = `translate(${-338.97 * count}px)`;
        banner.style.transition = "transform 0.7s";

        changeButtonStyle();

        slide = setInterval(() => autoSlide(), 3000);
    });
});

function autoSlide() {
    check = false;
    banner.style.transform = `translate(${-338.97 * ++count}px)`;
    banner.style.transition = "transform 0.7s";

    if (count == 6) {
        setTimeout(() => {
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(-338.97px)`;
        }, 700);
        count = 1;
    }
    changeButtonStyle();
    setTimeout(() => {
        check = true;
    }, 700);
}
