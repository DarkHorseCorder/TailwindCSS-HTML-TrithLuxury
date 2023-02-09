let faq_sol = document.getElementsByClassName('faq_body')

for (let index = 0; index < faq_sol.length; index++) {
  let faq_button = document.querySelectorAll('.faq-button')
  faq_button[index].addEventListener('click', function () {
    faq_sol[index].classList.toggle('hidden')
    faq_button[index].classList.toggle('rotate-180')
  })
}

// autoscroll for cards

window.onload = () => {
  let i = 0
  setInterval(() => {
    i += 350
    if (i == 2450) {
      i = 0
    }
    document.querySelector('.wrapperTop').scrollTo(i, 0)
  }, 3000)
}

// mobile navigation

let hover_nav = document.querySelector(".hover-nav");
let hover_width = document.querySelector(".hover-nav > .hover-width");;
hover_nav.addEventListener("mouseover",()=>{
    hover_width.classList.toggle("w-8");
});
hover_nav.addEventListener("mouseout",()=>{
  hover_width.classList.toggle("w-8");
  
})
// mobile sidebar
hover_nav.addEventListener('click',()=>{
let mobile_sidebar = document.querySelector(".mobile-sidebar");
console.log("clivk hum")
mobile_sidebar.classList.toggle("mobile-nav-open");
})

// change background for hero section

function changeBackground() {
  console.log("hello");
  // Get the div element
  var div = document.querySelector(".hero");

  // Create an array of image URLs
  var images = ["../src/assets/img/bg.png", "../src/assets/img/2.jpg", "../src/assets/img/3.jpg"];

  // Set the div's background image to the next image in the array
  div.style.backgroundImage = `url(${images[i]})`;

  // Increment the image index
  i = (i + 1) % images.length;
}

// Initialize the image index to 0
var i = 0;

// Set the interval to change the background image every 5 seconds
setInterval(changeBackground, 1000);
