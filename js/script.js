let originalImageURL = doucument.getElementById("image").style.backgroundImage;
let originalText = document.getElementById("image").innerText;
function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerText = previewPic.alt;
}
function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerText = "Hover over an image below to display here."
}

