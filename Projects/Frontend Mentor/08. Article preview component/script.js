shareBtn = document.getElementById("share-btn");
shareImg = document.getElementById("share-img");
tooltip = document.getElementById("tooltip");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active");
    shareImg.classList.toggle("fill");
    tooltip.classList.toggle("hidden");
})