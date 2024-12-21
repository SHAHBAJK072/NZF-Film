var swiper = new Swiper(".slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 5000,
      },
    pagination: {
      el: ".dots",
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints:{
      1200: {
        slidesPerView:3,
        spaceBetween:24,
      },
      // 992: {
      //   slidesPerView:2,
      //   spaceBetween:24,
      // },
      768: {
        slidesPerView:2,
        spaceBetween:24,
      },  
      0: {
        slidesPerView:1,
      },
  
    }
    
  });
var toper = document.getElementById("top");
window.addEventListener("scroll",() =>{
var val = window.pageYOffset;

  if(val>=1000){
    toper.classList.add("topopen")
  console.log(val)
  }

  else{toper.classList.remove("topopen")}
});
  jQuery(document).on('mouseover', '.hero-img .img-box', function () {
    jQuery('.hero-img .img-box.active').removeClass('active');
    jQuery(this).addClass('active');});
    