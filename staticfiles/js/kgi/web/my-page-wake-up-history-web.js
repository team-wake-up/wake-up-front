function period() {
    const period = document.querySelector(".period-select");
    const periodTxt = document.querySelector("span.select-option");

    let result = period.options[period.selectedIndex].text;

    periodTxt.innerText = result;
}

function histories() {
    const history = document.querySelector(".history-select");
    const historyTxt = document.querySelector(".his-opt");

    let result = history.options[history.selectedIndex].text;

    historyTxt.innerText = result;
}
