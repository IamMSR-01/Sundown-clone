let stripC = document.querySelector(".strip-container");
let fixedVedio = document.querySelector("#fixed-img");

stripC.addEventListener("mouseenter", function () {
  fixedVedio.style.display = "block";
});

stripC.addEventListener("mouseleave", function () {
  fixedVedio.style.display = "none";
});

let strips = document.querySelectorAll(".strip");

strips.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    let image = e.getAttribute("data-img")
    fixedVedio.style.backgroundImage = `url(${image})`
  })
});


let loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%"
}, 4000);

let design1 = document.querySelector(".design1");
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para3 = document.querySelector(".para3");
let blackImg1 = document.querySelector(".black-img1 img");
let blackImg2 = document.querySelector(".black-img2 img");
let blackImg3 = document.querySelector(".black-img3 img");


design1.addEventListener("click", function () {
  design1.style.color = "white"
  design1.style.borderColor = "orangered"
  design3.style.color = "#5a5756"
  design3.style.borderColor = "#5a5756"
  design2.style.color = "#5a5756"
  design2.style.borderColor = "#5a5756"
  para2.style.display = "none"
  para3.style.display = "none"
  para1.style.display = "block"
  blackImg1.style.display = "block"
  blackImg2.style.display = "none"
  blackImg3.style.display = "none"


});

let design2 = document.querySelector(".design2");

design2.addEventListener("click", function () {
  design2.style.color = "white"
  design2.style.borderColor = "orangered"
  design1.style.color = "#5a5756"
  design1.style.borderColor = "#5a5756"
  design3.style.color = "#5a5756"
  design3.style.borderColor = "#5a5756"
  para2.style.display = "block"
  para3.style.display = "none"
  para1.style.display = "none"
  blackImg1.style.display = "none"
  blackImg2.style.display = "block"
  blackImg3.style.display = "none"

});

let design3 = document.querySelector(".design3");

design3.addEventListener("click", function () {
  design3.style.color = "white"
  design3.style.borderColor = "orangered"
  design2.style.color = "#5a5756"
  design2.style.borderColor = "#5a5756"
  design1.style.color = "#5a5756"
  design1.style.borderColor = "#5a5756"
  para2.style.display = "none"
  para3.style.display = "block"
  para1.style.display = "none"
  blackImg1.style.display = "none"
  blackImg2.style.display = "none"
  blackImg3.style.display = "block"
});

let swiper = document.querySelector(".swiper-container");
let cursor = document.querySelector("#cursor");

swiper.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});

swiper.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

swiper.addEventListener("mousemove", TrackCursor);

function TrackCursor(e) {
  const w = cursor.clientWidth;
  const h = cursor.clientHeight
  cursor.style.transform = `translate(${e.clientX - w/2}px, ${e.clientY - 2 * h}px)`;
}