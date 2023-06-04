// !navbar
const header = document.querySelector("#header");
const burger = document.querySelector(".hamburger");
const burger_bar = document.querySelector(".hamburger_bar");
const ul = document.querySelector("#ul_lists");
const items = document.querySelectorAll("#ul_lists li a");

burger.onclick = function () {
  ul.classList.toggle("active");
  burger_bar.classList.toggle("hamactive");
};
items.forEach((item) => {
  item.onclick = function () {
    burger_bar.classList.toggle("hamactive");
    ul.classList.toggle("active");
  };
});


// !about session start
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const profile1 = document.getElementById("profile1")
const profile2 = document.getElementById("profile2")
const profile3 = document.getElementById("profile3")
const profile4 = document.getElementById("profile4")
const profile5 = document.getElementById("profile5")
const block = document.getElementById("block")
btn1.onclick = function () {
  profile1.style.display = "flex";
  profile2.style.display = "none";
  profile3.style.display = "none";
  profile4.style.display = "none";
  profile5.style.display = "none";
  block.style.backgroundColor = "rgba(36, 6, 187, 0.22)";
}      
btn2.onclick = function () {
  profile1.style.display = "none";
  profile2.style.display = "flex";
  profile3.style.display = "none";
  profile4.style.display = "none";
  profile5.style.display = "none";
  block.style.backgroundColor = "#15516d5a";
}      
btn3.onclick = function () {
  profile1.style.display = "none";
  profile2.style.display = "none";
  profile3.style.display = "flex";
  profile4.style.display = "none";
  profile5.style.display = "none";
  block.style.backgroundColor = "#8000805a";

}      
btn4.onclick = function () {
  profile1.style.display = "none";
  profile2.style.display = "none";
  profile3.style.display = "none";
  profile4.style.display = "flex";
  profile5.style.display = "none";
  block.style.backgroundColor = "#561c4c5a";

}      
btn5.onclick = function () {
  profile1.style.display = "none";
  profile2.style.display = "none";
  profile3.style.display = "none";
  profile4.style.display = "none";
  profile5.style.display = "flex";
  block.style.backgroundColor = "#16b19a15";

}      
// !about session end

function changeBackground() {
  let range = document.getElementById("myrange").value;
  let width = `${range}%`;
  const cover = document.querySelector('.cover');
  cover.style.setProperty('width', width);

}

document.getElementById("myrange").addEventListener('input', changeBackground);

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});
