const shareBtn = document.getElementById("share-btn");
const shareImg = document.getElementById("share-img");
const tooltip = document.getElementById("tooltip");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active");
    shareImg.classList.toggle("fill");
    tooltip.classList.toggle("hidden");
})