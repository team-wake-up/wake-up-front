const selected = document.querySelectorAll(".main-section-left-mid-tag button");

function handleButtonClick(event) {
    selected.forEach((button) => {
        button.classList.remove("main-section-left-mid-tag-button-select");
        button.classList.add("main-section-left-mid-tag-button-no-select");

        const span1 = button.querySelector(
            ".main-section-left-mid-tag-button-span1-select"
        );
        const span2 = button.querySelector(
            ".main-section-left-mid-tag-button-span2-select"
        );
        if (span1 && span2) {
            span1.classList.remove(
                "main-section-left-mid-tag-button-span1-select"
            );
            span1.classList.add(
                "main-section-left-mid-tag-button-span1-no-select"
            );
            span2.classList.remove(
                "main-section-left-mid-tag-button-span2-select"
            );
            span2.classList.add(
                "main-section-left-mid-tag-button-span2-no-select"
            );
        }
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.remove(
        "main-section-left-mid-tag-button-no-select"
    );
    clickedButton.classList.add("main-section-left-mid-tag-button-select");

    const clickedSpan1 = clickedButton.querySelector(
        ".main-section-left-mid-tag-button-span1-no-select"
    );
    const clickedSpan2 = clickedButton.querySelector(
        ".main-section-left-mid-tag-button-span2-no-select"
    );
    if (clickedSpan1 && clickedSpan2) {
        clickedSpan1.classList.remove(
            "main-section-left-mid-tag-button-span1-no-select"
        );
        clickedSpan1.classList.add(
            "main-section-left-mid-tag-button-span1-select"
        );
        clickedSpan2.classList.remove(
            "main-section-left-mid-tag-button-span2-no-select"
        );
        clickedSpan2.classList.add(
            "main-section-left-mid-tag-button-span2-select"
        );
    }
}

selected.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

selected[0].classList.add("main-section-left-mid-tag-button-select");

const firstButtonSpan1 = selected[0].querySelector(
    ".main-section-left-mid-tag-button-span1-no-select"
);
const firstButtonSpan2 = selected[0].querySelector(
    ".main-section-left-mid-tag-button-span2-no-select"
);
if (firstButtonSpan1 && firstButtonSpan2) {
    firstButtonSpan1.classList.remove(
        "main-section-left-mid-tag-button-span1-no-select"
    );
    firstButtonSpan1.classList.add(
        "main-section-left-mid-tag-button-span1-select"
    );
    firstButtonSpan2.classList.remove(
        "main-section-left-mid-tag-button-span2-no-select"
    );
    firstButtonSpan2.classList.add(
        "main-section-left-mid-tag-button-span2-select"
    );
}
