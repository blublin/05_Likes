function likeButtonHandler(element) {
    let idValue = element.id;
    let tagLikes = document.querySelector("h3."+idValue)

    let likeNum = parseInt(tagLikes.innerText);
    likeNum++;

    tagLikes.innerText = likeNum;
}