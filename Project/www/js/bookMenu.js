var $bookMenu = $('#book-menu');

var booksFiltered = [];

function showBooks(list = all_books, filter = '') {
    $bookMenu.html('');
    require('Templates.ejs');

    function addBook(book) {
        var html_code = new EJS({url: 'Template/BookTemplate.ejs'}).render();

        var $node = $(html_code);

        $node.find(".buy-big").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        });

        $bookMenu.append($node);
    }

    all_books.forEach(addBook);
}

$(function () {
    showBooks();
});