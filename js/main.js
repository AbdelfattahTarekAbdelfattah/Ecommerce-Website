const btn = document.querySelector("#btn");
const span = document.querySelector("#span");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const mainImg = document.querySelector("#main");
const count = document.querySelector("#count");

img1.addEventListener('click', () => {
    mainImg.src = "images/image-product-1-thumbnail.jpg";
});
img2.addEventListener('click', () => {
    mainImg.src = "images/image-product-2-thumbnail.jpg";
});
img3.addEventListener('click', () => {
    mainImg.src = "images/image-product-3-thumbnail.jpg";
});
function positiveCount() {
    count.innerHTML = +count.innerHTML + 1
    span.innerHTML = +span.innerHTML + 125;
}
function negativeCount() {
    if (count.innerHTML >= 1) {
        count.innerHTML = +count.innerHTML - 1
        span.innerHTML = +span.innerHTML - 125;
    }  
    else {
        span.innerHTML = 0
    }
}