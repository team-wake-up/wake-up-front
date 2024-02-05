const title = document.querySelector("label.title-text-label");
const title_input = document.querySelector("input.title-text-input");
// console.log(input);

input.addEventListener("focus", () => {
    title_input.style.border = "2px solid #b388ff";
});

input.addEventListener("blur", () => {
    title_input.style.border = "";
});

const tag = document.querySelector("label.tag-input-label");
// console.log(tag);

const tagline = document.querySelector("input.tag-input");
// console.log(tagline);
tagline.addEventListener("focus", () => {
    tagline.style = "";
    tag.style.border = "2px solid #b388ff";
});

tagline.addEventListener("blur", () => {
    tag.style.border = "";
});
