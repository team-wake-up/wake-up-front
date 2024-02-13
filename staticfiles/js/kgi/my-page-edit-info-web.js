// 지역선택
var region1_num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
var region1_name = new Array("서울", "부산", "대구", "인천", "광주", "대전", "울산", "강원", "경기", "경남", "경북", "전남", "전북", "제주", "충남", "충북");

var region2_num = new Array();
var region2_name = new Array();

region2_num1 = new Array(17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41);
region2_name1 = new Array("강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구");

region2_num2 = new Array(42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57);
region2_name2 = new Array("강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군");

region2_num3 = new Array(58, 59, 60, 61, 62, 63, 64, 65);
region2_name3 = new Array("남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군");

region2_num4 = new Array(66, 67, 68, 69, 70, 71, 72, 73, 74, 75);
region2_name4 = new Array("계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군");

region2_num5 = new Array(76, 77, 78, 79, 80);
region2_name5 = new Array("광산구", "남구", "동구", "북구", "서구");

region2_num6 = new Array(81, 82, 83, 84, 85);
region2_name6 = new Array("대덕구", "동구", "서구", "유성구", "중구");

region2_num7 = new Array(86, 87, 88, 89, 90);
region2_name7 = new Array("남구", "동구", "북구", "중구", "울주군");

region2_num8 = new Array(91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108);
region2_name8 = new Array("강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군");

region2_num9 = new Array(109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148);
region2_name9 = new Array(
    "고양시 덕양구",
    "고양시 일산구",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시 소사구",
    "부천시 오정구",
    "부천시 원미구",
    "성남시 분당구",
    "성남시 수정구",
    "성남시 중원구",
    "수원시 권선구",
    "수원시 장안구",
    "수원시 팔달구",
    "시흥시",
    "안산시 단원구",
    "안산시 상록구",
    "안성시",
    "안양시 동안구",
    "안양시 만안구",
    "오산시",
    "용인시",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "하남시",
    "화성시",
    "가평군",
    "양주군",
    "양평군",
    "여주군",
    "연천군",
    "포천군"
);

region2_num10 = new Array(149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168);
region2_name10 = new Array("거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군");

region2_num11 = new Array(169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192);
region2_name11 = new Array("경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시 남구", "포항시 북구", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군");

region2_num12 = new Array(193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214);
region2_name12 = new Array("광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군");

region2_num13 = new Array(215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229);
region2_name13 = new Array("군산시", "김제시", "남원시", "익산시", "전주시 덕진구", "전주시 완산구", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군");

region2_num14 = new Array(230, 231, 232, 233);
region2_name14 = new Array("서귀포시", "제주시", "남제주군", "북제주군");

region2_num15 = new Array(234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248);
region2_name15 = new Array("공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군");

region2_num16 = new Array(249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260);
region2_name16 = new Array("제천시", "청주시 상당구", "청주시 흥덕구", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "진천군", "청원군");

region2_num17 = new Array(261);
region2_name17 = new Array("세종특별자치시");

region2_num99 = new Array(262, 263, 264, 265, 266, 267);
region2_name99 = new Array("아시아", "아프리카", "북아메리카", "남아메리카", "유럽", "오세아니아");

// 시, 도 선택으로 시, 군, 구 option 넣기
function RegionValue() {
    const select1 = document.querySelector("select#region-select1");
    const select2 = document.querySelector("select#region-select2");
    const region1 = document.querySelector("span#state-region");
    const region2 = document.querySelector("span#county-region");
    const newOption = document.createElement("option");

    let resultValue = select1.options[select1.selectedIndex].value;
    let resultName1 = select1.options[select1.selectedIndex].text;
    let resultName2 = select2.options[select2.selectedIndex].text;
    let options = "";
    let spanTxt = "";

    if (resultValue == 1) {
        for (let i = 0; i < region2_num1.length; i++) {
            options += `<option value="${region2_num1[i]}">${region2_name1[i]}</option > `;
        }
    }
    if (resultValue == 2) {
        for (let i = 0; i < region2_num2.length; i++) {
            options += `<option value="${region2_num2[i]}">${region2_name2[i]}</option > `;
        }
    }
    if (resultValue == 3) {
        for (let i = 0; i < region2_num3.length; i++) {
            options += `<option value="${region2_num3[i]}">${region2_name3[i]}</option > `;
        }
    }
    if (resultValue == 4) {
        for (let i = 0; i < region2_num4.length; i++) {
            options += `<option value="${region2_num4[i]}">${region2_name4[i]}</option > `;
        }
    }
    if (resultValue == 5) {
        for (let i = 0; i < region2_num5.length; i++) {
            options += `<option value="${region2_num5[i]}">${region2_name5[i]}</option > `;
        }
    }
    if (resultValue == 6) {
        for (let i = 0; i < region2_num6.length; i++) {
            options += `<option value="${region2_num6[i]}">${region2_name6[i]}</option > `;
        }
    }
    if (resultValue == 7) {
        for (let i = 0; i < region2_num7.length; i++) {
            options += `<option value="${region2_num7[i]}">${region2_name7[i]}</option > `;
        }
    }
    if (resultValue == 8) {
        for (let i = 0; i < region2_num8.length; i++) {
            options += `<option value="${region2_num8[i]}">${region2_name8[i]}</option > `;
        }
    }
    if (resultValue == 9) {
        for (let i = 0; i < region2_num9.length; i++) {
            options += `<option value="${region2_num9[i]}">${region2_name9[i]}</option > `;
        }
    }
    if (resultValue == 10) {
        for (let i = 0; i < region2_num10.length; i++) {
            options += `<option value="${region2_num10[i]}">${region2_name10[i]}</option > `;
        }
    }
    if (resultValue == 11) {
        for (let i = 0; i < region2_num11.length; i++) {
            options += `<option value="${region2_num11[i]}">${region2_name11[i]}</option > `;
        }
    }
    if (resultValue == 12) {
        for (let i = 0; i < region2_num12.length; i++) {
            options += `<option value="${region2_num12[i]}">${region2_name12[i]}</option > `;
        }
    }
    if (resultValue == 13) {
        for (let i = 0; i < region2_num13.length; i++) {
            options += `<option value="${region2_num13[i]}">${region2_name13[i]}</option > `;
        }
    }
    if (resultValue == 14) {
        for (let i = 0; i < region2_num14.length; i++) {
            options += `<option value="${region2_num14[i]}">${region2_name14[i]}</option > `;
        }
    }
    if (resultValue == 15) {
        for (let i = 0; i < region2_num15.length; i++) {
            options += `<option value="${region2_num15[i]}">${region2_name15[i]}</option > `;
        }
    }
    if (resultValue == 16) {
        for (let i = 0; i < region2_num16.length; i++) {
            options += `<option value="${region2_num16[i]}">${region2_name16[i]}</option > `;
        }
    }
    if (resultValue == 17) {
        for (let i = 0; i < region2_num17.length; i++) {
            options += `<option value="${region2_num17[i]}">${region2_name17[i]}</option > `;
        }
    }
    if (resultValue == 99) {
        for (let i = 0; i < region2_num99.length; i++) {
            options += `<option value="${region2_num99[i]}">${region2_name99[i]}</option > `;
        }
    }

    newOption.innerHTML = options;
    select2.innerHTML = "<option>-선택-</option>" + options;

    // 시, 도 선택시 span에 선택한 값 나오게 하기
    region1.innerText = resultName1;
}

// 시, 군, 구 선택시 span에 선택한 값 나오게 하기
function CountyValue() {
    const select2 = document.querySelector("select#region-select2");
    const region2 = document.querySelector("span#county-region");

    let resultName2 = select2.options[select2.selectedIndex].text;

    region2.innerText = resultName2;
}

// 나이선택
function ageValue() {
    const ageValue = document.querySelector("span.age-select-option");
    const ageChoice = document.querySelector("select.select-age-wrap");
    ageValue.innerText = ageChoice.options[ageChoice.selectedIndex].text;
}

// 폰번호 모달창
const phoneModal = document.querySelector(".phone-modal-wrap");
const phoneCloseBtn = document.querySelector(".phone-foot");
const phoneOpenBtn = document.querySelector(".phone-modify-btn");
const body = document.querySelector("html body");

// 휴대폰 번호 변경버튼 클릭 시 모달창 띄우기
phoneOpenBtn.addEventListener("click", () => {
    phoneModal.style.display = "block";
    body.style.overflow = "hidden";
});

// X버튼으로 모달창 닫기
phoneCloseBtn.addEventListener("click", () => {
    phoneModal.style.display = "none";
    body.style.removeProperty("overflow");
});

// 이메일 모달창
const emailModal = document.querySelector(".email-modal-wrap");
const emailCloseBtn = document.querySelector(".email-foot");
const emailOpenBtn = document.querySelector(".email-modify-btn");

// 이메일 변경 버튼 클릭 시 모달창띄우기
emailOpenBtn.addEventListener("click", () => {
    emailModal.style.display = "block";
    body.style.overflow = "hidden";
});

// X버튼으로 모달창 닫기
emailCloseBtn.addEventListener("click", () => {
    emailModal.style.display = "none";
    body.style.removeProperty("overflow");
});

// 프로필 사진
const profileImg = document.querySelector("div.file-upload");
const input = document.getElementById("attach");
const thumbnail = document.querySelector("img.thumb-img");

input.addEventListener("change", (e) => {
    // const thumbnail = document.querySelector("img.thumb-img");
    const newImg = document.createElement("img");
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;

        if (path.includes("image")) {
            profileImg.innerHTML = `<img src="${path}" class="thumb-img" />
            <label for="attach" class="lab-photo">
                <span class="photo-icon">사진첨부</span>
            </label>`;
        } else {
            alert("사진만 올릴 수 있습니다.");
        }
    });
});

// 닉네임 길이
const nameLength = document.querySelector(".input-name");
const nameValue = document.querySelector(".info-append .txt-num");

nameLength.addEventListener("input", () => {
    nameValue.innerText = nameLength.value.length;
});

nameLength.addEventListener("focus", () => {
    nameLength.style.borderColor = "#dc287c";
});

nameLength.addEventListener("blur", () => {
    nameLength.style.borderColor = "#e0e0e0";
});

// 성별 선택
const genderBoxes = document.querySelectorAll(".gender-check");
const genderColors = document.querySelectorAll(".gender-color");

genderBoxes.forEach((genderBox) => {
    genderBox.addEventListener("click", () => {
        // 남자 선택시
        if (genderBox == genderBoxes[0]) {
            genderColors[0].classList.add("gender-check-color");
            genderColors[1].classList.remove("gender-check-color");
            genderColors[2].classList.remove("gender-check-color");

            // 여자 선택시
        } else if (genderBox == genderBoxes[1]) {
            genderColors[0].classList.remove("gender-check-color");
            genderColors[1].classList.add("gender-check-color");
            genderColors[2].classList.remove("gender-check-color");

            // 선택안함
        } else {
            genderColors[0].classList.remove("gender-check-color");
            genderColors[1].classList.remove("gender-check-color");
            genderColors[2].classList.add("gender-check-color");
        }
    });
});
