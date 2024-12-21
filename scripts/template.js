function renderTemplateBook(i){

    return`
    <div class="book">
        <div>
            <img src="./assets/images/img/book-red.png" alt="">
        </div>
        <h2>${books[i].name}</h2>
        <table>
        <tr>
            <th>Autor:</th>
            <th>${books[i].author}</th>
        </tr>
        <tr>
            <th>Erscheinungsjahr:</th>
            <th>${books[i].publishedYear}</th>
        </tr>
        <tr>
            <th>Genre:</th>
            <th>${books[i].genre}</th>
        </tr>
    </table>
        <div class="price-likes">
            <h4>${books[i].price}€</h4>

            <h5>
                <span id="like-count-${i}">${books[i].likes}</span>
                <button 
                    class="heart ${books[i].liked ? 'liked' : 'not-liked'}" 
                    onclick="toggleLike(${i})">
                    &#10084;
                </button>
            </h5>
        </div>
        <p>Kommentare:</p>
        <div class="comments-container">
            ${books[i].comments.map(comment => 
            `<div class="comment-item">
                <span class="comment-name">${comment.name}:</span>
                <span class="comment-text">${comment.comment}</span>
            </div>`
        ).join('') || '<p>Noch keine Kommentare vorhanden.</p>'}

            </div>
            <div class="comment">
                <input type="text" placeholder="Schreibe dein Kommentar ...">
                <button class="send-button" onclick="addComment(${i})">&#x2709;</button>
            </div>
        </div>
    </div>
    `
};

    