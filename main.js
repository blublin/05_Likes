// let likesArr = [];
// let likeElements = document.querySelectorAll(".feed-card .feed-likes");
// for (let elem of likeElements) {
//     likesArr.push( ParseInt( elem.innerText ) );
// }

function likeButtonHandler(element) {
    let idValue = element.id;
    let tagLikes = document.querySelector("h3."+idValue)

    let likeNum = parseInt(tagLikes.innerText);
    likeNum++;

    tagLikes.innerText = likeNum;
}