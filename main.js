function likeButtonHandler(element) {
    let tagLikes = element.previousElementSibling;

    let likeNum = parseInt(tagLikes.innerText);
    likeNum++;

    tagLikes.innerText = likeNum;
}