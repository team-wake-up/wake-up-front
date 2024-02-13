const contentsWrite = document.getElementById("contents-write");
const placeholderLabel = document.querySelector(".editorPlaceholder-tit-label");
const writeMenu = document.querySelector("div.user-write-open-range-add-div");
const writeButton = document.querySelector("a.link-write");
const cancelButton = document.querySelector("button.user-write-cancel-button");
const fixButton = document.querySelector("div.button-top-menu-fix-button");
const fixMenu = document.querySelector("div.user-board-open-menu-layer");
const likeButton = document.querySelector("button.user-btnlike");
const heartImage = likeButton.querySelector("img");
const addImgDiv = document.getElementById("add-img");

// 초기설정
writeMenu.style.display = "none";
fixMenu.style.display = "none";

// 입력란에 포커스가 들어가면 플레이스홀더를 숨김
contentsWrite.addEventListener("focus", () => {
    placeholderLabel.style.display = "none";
    writeMenu.style.display = "block";
});

// 입력란에서 포커스가 벗어나고 내용이 없으면 플레이스홀더를 보여줌
contentsWrite.addEventListener("blur", () => {
    if (contentsWrite.textContent.trim() === "") {
        placeholderLabel.style.display = "block";
    }
});

// 라벨을 클릭할 때 커서를 입력란으로 이동
placeholderLabel.addEventListener("click", () => {
    contentsWrite.focus();
});

// 상단 우측 글쓰기 버튼 누르면 글쓰기 메뉴 표시
writeButton.addEventListener("click", () => {
    writeMenu.style.display = "block";
});

// 취소버튼 클릭 시 초기화면 표시
cancelButton.addEventListener("click", () => {
    contentsWrite.innerText = "";
    writeMenu.style.display = "none";
    placeholderLabel.style.display = "block";
    addImgDiv.innerHTML = ""; // 이미지 추가 부분 초기화
});

// 수정메뉴버튼 클릭 시 메뉴 보여주기
fixButton.addEventListener("click", () => {
    if (fixMenu.style.display === "none") {
        fixMenu.style.display = "block";
    } else {
        fixMenu.style.display = "none";
    }
});

// 하트버튼 클릭 시 색상변경
likeButton.addEventListener("click", () => {
    if (heartImage.src.includes("empty-heart.png")) {
        heartImage.src = "images/full-heart.png";
    } else {
        heartImage.src = "images/empty-heart.png";
    }
});

// 사진등록하기
const photoButton = document.querySelector(
    ".link-menu-mediabutton-photo-button"
);
const photoLink = photoButton.querySelector(
    ".link-menu-mediabutton-photo-a-tag"
);

photoButton.addEventListener("click", (event) => {
    // 쓰기 메뉴 생성
    writeMenu.style.display = "block";
    // 기본 동작인 링크 이동 막기
    event.preventDefault();

    // 파일 업로드를 위한 input 요소를 동적으로 생성
    const fileInput = document.createElement("input");
    fileInput.type = "file";

    // 파일이 선택되었을 때의 동작을 정의
    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0]; // 선택된 파일 가져오기

        // 파일의 확장자가 jpg 또는 png인지 확인
        const isJpgOrPng =
            file.type === "image/jpeg" || file.type === "image/png";
        if (isJpgOrPng) {
            // 이미지 파일일 경우 이미지 엘리먼트를 생성하여 추가
            const imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(file);
            imgElement.width = 500; // 이미지 가로 길이 고정
            imgElement.height = 500; // 이미지 세로 길이 고정
            imgElement.onload = () => {
                URL.revokeObjectURL(imgElement.src); // 사용 후 URL 해제
            };
            addImgDiv.appendChild(imgElement);
        } else {
            console.log("jpg 또는 png 형식의 이미지 파일을 선택해주세요.");
        }
    });

    // input 요소를 클릭하여 파일을 선택하도록 합니다.
    fileInput.click();
});

// 수정/삭제 버튼 정의
const del = document.querySelector(
    "li.user-board-open-menu-layer-li-del-button"
);

const edit = document.querySelector(
    "li.user-board-open-menu-layer-li-fix-button"
);
// 게시글 정의
const content = document.querySelector("div.section-activity");

// 삭제 버튼 클릭 시 게시글 제거
del.addEventListener("click", (e) => {
    if (!confirm("정말로 삭제하시겠습니까?")) {
        return false;
    }
    // 게시글 내용 삭제
    content.style.display = "none";
});
