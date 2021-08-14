const article = document.querySelector("article");

addEventListener("click", openArticle); // .without-article altındaki yazıyı toggle sayesinde display:block veya none yapar

function openArticle(e) {
    if (e.target.className == "article-icon") {
        e.target.nextSibling.nextSibling.classList.toggle("my-toggle");
    }
}