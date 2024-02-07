const badgeButton = document.querySelector("button.write");
const nonImg = document.querySelector("div.admin-content-post-conetent");
const badgeDiv = document.querySelector("div.details-list-add-list");
let count = 0;
badgeButton.addEventListener("click", (e) => {
    count++;
    badgeDiv.innerHTML += `
    <li class="details-list-add-list-content-all">
        <div class="detalis-list-add-list-img">
            <label for="attach${count}">
                <img src="../images/image.png" class="badge-list-img">
            </label>
            <input type="file" id="attach${count}" style="display: none" />
        </div>
        <div class="detalis-list-add-list-tilte-div">
            <div class="detalis-list-add-list-tilte-div-div">
                <label class="details-list-add-list-title-label">
                    <input class="details-list-add-list-title-label-input" type="text">
                </label>
            </div>                                              
        </div>
        <div class="details-list-add-list-price">
            <label class="details-list-add-list-price-label">
                <input class="details-list-add-list-price-input" type="text">
            </label>
        </div>
        <div class="details-list-add-list-date">
            <label class="details-list-add-list-date-label">
                <input class="details-list-add-list-date-input" type="text">
            </label>
        </div>
        <div class="details-list-add-list-del">
            <button type="button" class="details-list-add-list-del-target">삭제</button>
        </div>
    </li>
`;
    nonImg.style = "display:none";
});

const delButton = document.querySelector(
    "button.details-list-add-list-del-target"
);

badgeDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("details-list-add-list-del-target")) {
        e.target.closest("li").remove();
    }
});

badgeButton.addEventListener("mouseover", (e) => {
    e.target.style.background = "#f2b8cb";
});
badgeButton.addEventListener("mouseout", (e) => {
    e.target.style.background = "#1d1d1e";
});

//
const inputs = document.querySelectorAll("input[type=file]");
const thumbnails = document.querySelector("img.badge-list-img");
const cancel = document.querySelector("div.cancel");

inputs.forEach((input, i) => {
    input.addEventListener("change", (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", (e) => {
            const path = e.target.result;
            cancel.style.display = "block";

            if (path.includes("image")) {
                thumbnails[i].src = path;
            } else {
            }
        });
    });
});

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        cancel.style.display = "block";

        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url('images/canscel.png')`;
        }
    });
});

cancel.addEventListener("click", (e) => {
    thumbnail.style.backgroundImage = `url('images/canscel.png')`;
    e.target.style.display = "none";
    input.value = "";
});
