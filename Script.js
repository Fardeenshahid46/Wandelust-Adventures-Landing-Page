function toggleMenu() {
  let menu = document.getElementById("menulist");

  if (window.innerWidth <= 478) { // Sirf chhoti screen par chalega
      if (menu.style.display === "block") {
          menu.style.display = "none"; // Menu hide
      } else {
          menu.style.display = "block"; // Menu show
      }
  }
}

// Event listener for menu icon click
document.querySelector(".menu-icon").addEventListener("click", toggleMenu);



function slider(){
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
}
slider()