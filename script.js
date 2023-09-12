let body = document.body;
let blue = document.querySelector(".blue");
let purple = document.querySelector(".purple");
let yellow = document.querySelector(".yellow");
let midnight = document.querySelector(".midnight");
let starlight = document.querySelector(".starlight");
let red = document.querySelector(".red");
let main_img = document.querySelector(".main_img");
let active = document.querySelector(".active");
let floating_head = document.querySelector(".floating_head");
let btn_link = document.querySelector(".btn_link");
let dark_bg = document.querySelector(".dark-bg");
let floating_window = document.querySelector(".floating_window");
let open_details1 = document.querySelector(".open_details1");
let open_details2 = document.querySelector(".open_details2");
let details1 = document.querySelector("#details1");
let details2 = document.querySelector("#details2");
let activate = document.querySelector(".activate");
let down_arrow1 = document.querySelector("#down_arrow1");
let down_arrow2 = document.querySelector("#down_arrow2");
let close_window = document.querySelectorAll("[data-window]");

open_details1.onclick = () => {
  if (details1.style.display === "flex") {
    details1.style.display = "none";
    down_arrow1.style.rotate = "0deg";
    down_arrow1.style.transition = "400ms";
  } else {
    details1.style.display = "flex";
    down_arrow1.style.rotate = "180deg";
    down_arrow1.style.transition = "400ms";
  }
};
open_details2.onclick = () => {
  if (details2.style.display === "flex") {
    details2.style.display = "none";
    down_arrow2.style.rotate = "0deg";
    down_arrow2.style.transition = "400ms";
  } else {
    details2.style.display = "flex";
    down_arrow2.style.rotate = "180deg";
    down_arrow2.style.transition = "400ms";
  }
};

btn_link.onclick = () => {
  floating_window.classList.add("active");
  dark_bg.classList.add("active");
  //   body.style.overflow = "hidden";
};
// dark_bg.onclick = () => {
//   dark_bg.classList.remove("active");
//   floating_window.classList.remove("active");
// };
close_window.forEach((item) => {
  item.onclick = () => {
    dark_bg.classList.remove("active");
    floating_window.classList.remove("active");
  };
});

blue.onclick = () => {
  main_img.setAttribute(
    "src",
    "./images/iphone-14-finish-select-202209-6-1inch-blue_FMT_WHH.jfif"
  );
};
purple.onclick = () => {
  main_img.setAttribute(
    "src",
    "images/iphone-14-finish-select-202209-6-1inch-purple_FMT_WHH.jfif"
  );
};
yellow.onclick = () => {
  main_img.setAttribute(
    "src",
    "images/iphone-14-finish-select-202209-6-1inch-yellow_FMT_WHH.jfif"
  );
};
midnight.onclick = () => {
  main_img.setAttribute(
    "src",
    "images/iphone-14-finish-select-202209-6-1inch-midnight_FMT_WHH.jfif"
  );
};
starlight.onclick = () => {
  main_img.setAttribute(
    "src",
    "images/iphone-14-finish-select-202209-6-1inch-starlight_FMT_WHH.jfif"
  );
};

red.onclick = () => {
  main_img.setAttribute(
    "src",
    "images/iphone-14-finish-select-202209-6-1inch-product-red_FMT_WHH.jfif"
  );
};
// if(details.)
// open_details.onclick = () => {
//   details.classList.add("activate");
//   //   body.style.overflow = "hidden";
// };
// open_details.onclick = () => {
//   details.classList.remove("activate");
// };

// if (window.onscroll) {
//     floating_head.className += "active"
// }
// window.addEventListener('scroll', function() {
//     let st = document.documentElement.scrollTop
//     if(st > 300 && st < 800){
//         floating_head.removeClass('hide')
//     floating_head.addClass('show')
//     } else {
//         floating_head.addClass('hide')
//         floating_head.removeClass('active')
//     }
//     // active.style.display = 'block'

// })

// console.log(floating_head);

// let elY = 0;
// let scrollY = 0;
// window.addEventListener("scroll", function() {
//     const el = document.querySelector('.floating_head');
//     const height = el.offsetHeight;
//     const pos = window.pageYOffset;
//     const diff = scrollY - pos;

//     elY = Math.min(0, Math.max(-height, elY + diff));
//     el.style.position = pos >= height ? 'fixed' : pos === 0 ? 'absolute' : el.style.position;
//     el.style.transform = `translateY(${el.style.position === 'fixed' ? elY : 0}px)`;

//     scrollY = pos;
// })
