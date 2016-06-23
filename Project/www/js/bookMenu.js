var $bookMenu = $('.main');

var booksFiltered = [];

var $BookTemplate=$("<div class='book-wrapper'><div class='book-container'><div class='book-main-part'><img class='book-icon' src=''><span class='book-title'>Назва:title</span><span class='book-genre'>Жанр:gener</span></div><span class='book-review'>rev</span></div></div>");

function showBooks(list = all_books, filter = '') {
    $bookMenu.html('');

    function addBook() {

        var $node = $($BookTemplate).clone();
        
        alert($node.html());

        $bookMenu.append($node);
    }

    all_books.forEach(addBook);
}

$(function () {
    showBooks();
});