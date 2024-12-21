
function render() {
    formatPrices();
    renderBooks();
}


function renderBooks() {
    let booksRef = document.getElementById('books');
    booksRef.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        booksRef.innerHTML += renderTemplateBook(i);
    };
};

function addComment(bookIndex) {
    const commentInput = document.querySelectorAll('.book')[bookIndex].querySelector('.comment input');
    const newComment = commentInput.value.trim();

    if (newComment === '') {
        alert('Bitte geben Sie einen Kommentar ein!');
        return;
    }

    books[bookIndex].comments.unshift({
        name: 'Anonym',
        comment: newComment
    });

    commentInput.value = '';

    renderBooks();
}

function formatPrices() {
    books.forEach(book => {
        book.price = book.price.toFixed(2).replace('.', ',');
    });
}

function toggleLike(bookIndex) {
    const book = books[bookIndex];
    const likeCountElement = document.getElementById(`like-count-${bookIndex}`);
    
    if (book.liked) {
        book.likes--; // Likes verringern
    } else {
        book.likes++; // Likes erhöhen
    }

    // Like-Status umkehren
    book.liked = !book.liked;

    // Anzeige aktualisieren
    likeCountElement.textContent = book.likes;

    renderBooks();
}



