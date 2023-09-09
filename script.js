let blue = document.querySelector('.blue')
let purple = document.querySelector('.purple')
let yellow = document.querySelector('.yellow')
let midnight = document.querySelector('.midnight')
let starlight = document.querySelector('.starlight')
let red = document.querySelector('.red')
let main_img = document.querySelector('.main_img')
let active = document.querySelector('.active')
let floating_head = document.querySelector('.floating_head')
let body = document.body
blue.onclick = () => {
    main_img.setAttribute('src', './images/iphone-14-finish-select-202209-6-1inch-blue_FMT_WHH.jfif')
}
purple.onclick = () => {
    main_img.setAttribute('src', 'images/iphone-14-finish-select-202209-6-1inch-purple_FMT_WHH.jfif')
}
yellow.onclick = () => {
    main_img.setAttribute('src', 'images/iphone-14-finish-select-202209-6-1inch-yellow_FMT_WHH.jfif')
}
midnight.onclick = () => {
    main_img.setAttribute('src', 'images/iphone-14-finish-select-202209-6-1inch-midnight_FMT_WHH.jfif')
}
starlight.onclick = () => {
    main_img.setAttribute('src', 'images/iphone-14-finish-select-202209-6-1inch-starlight_FMT_WHH.jfif')
}
red.onclick = () => {
    main_img.setAttribute('src', 'images/iphone-14-finish-select-202209-6-1inch-product-red_FMT_WHH.jfif')
}

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

console.log(floating_head);


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