const icon = document.querySelectorAll(".icon");
const slide = document.getElementById("slide");
let colors = ["#bc2a8d", "#1DA1F2", "#7245c7", "#25D366"];
icon.forEach((element, ind) => {
  element.addEventListener("mouseover", () => {
    slide.style.backgroundColor = colors[ind];
    slide.style.left = (100 / icon.length) * ind + "%";
  });
});
