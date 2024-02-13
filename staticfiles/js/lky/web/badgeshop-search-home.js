const deleteButton = document.querySelector('.btn-delete');
const searchInput = document.getElementById('schkeyword');

searchInput.addEventListener('input', function () {
    if (searchInput.value.length > 0) {
        deleteButton.style.display = 'inline-block';
    } else {
        deleteButton.style.display = 'none';
    }
});

deleteButton.addEventListener('click', function () {
    searchInput.value = '';
    deleteButton.style.display = 'none';
});
