function showContent(id) {
    // Скрыть все блоки контента
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // Показать выбранный блок контента
    document.getElementById(id).classList.add('active');
}