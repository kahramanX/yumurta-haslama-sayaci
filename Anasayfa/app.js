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
    if (e.target.className == "fas fa-chevron-down") {
        //  üstteki class isimli i etiketine tıkladığımda displayler block olmuyordu. Bu yüzden yeni bir if açtım
        e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "block";
        e.target.parentElement.nextSibling.nextSibling.style.display = "block";
        e.target.style.transform = "rotate(180deg)";
    }
}