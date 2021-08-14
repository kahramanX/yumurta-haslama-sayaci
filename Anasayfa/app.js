const transformedArrow = document.querySelectorAll(".fas fa-chevron-down");
console.log(transformedArrow)

addEventListener("click", openArticle); // .without-article altındaki yazıyı display:block yapar
//addEventListener("click",closeArticle); // .without-article altındaki yazıyı display:none yapar

function openArticle(e) {
    if (e.target.className == "article-icon") {
        e.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "block";
        e.target.nextSibling.nextSibling.style.display = "block";
        e.target.firstElementChild.style.transform = "rotate(180deg)"
    }
}