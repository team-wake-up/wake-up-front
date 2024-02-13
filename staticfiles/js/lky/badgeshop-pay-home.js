document.addEventListener('DOMContentLoaded', function () {
    const allCheck = document.querySelector('input[formcontrolname=allCheck]');
    const otherCheckboxes = document.querySelectorAll('.wrap-terms .inp-check');

    allCheck.addEventListener('change', function () {
        const isChecked = allCheck.checked;
        otherCheckboxes.forEach(function (checkbox) {
            checkbox.checked = isChecked;
        });
    });

    otherCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const allChecked = [...otherCheckboxes].every(function (checkbox) {
                return checkbox.checked;
            });
            allCheck.checked = allChecked;
        });
    });
});
