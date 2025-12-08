// Global JS Starts

 document.querySelector(".hamburger-icon").addEventListener("click",()=>{
    document.getElementById("ham-menu").classList.add("active");
    document.body.classList.add("popup");
 });
 document.querySelector(".ham-menu-close-btn").addEventListener("click",()=>{
    document.getElementById("ham-menu").classList.remove("active");
    document.body.classList.remove("popup");
 });   

 $(document).ready(function(){
   $('.cust-login').click(function(){
       $('.cust-login-dd').toggleClass('active')
   })
});
document.querySelector('.cart-icon').addEventListener('click', ()=>{
    document.body.classList.add('js-my-cart-open');
})

$(document).ready(function(){
   $('.header-link.dropdown').click(function(){
     $(this).toggleClass('active');
     $('.mega-menu-wrapper').toggleClass('active');
     $('body').toggleClass('overlay');
     $('header').toggleClass('menu-open');
   });

   $(document).on('click', function(event) {
      if (!$(event.target).closest('.mega-menu-wrapper').length && !$(event.target).closest('.header-link.dropdown').length) {
         $('.header-link.dropdown').removeClass('active');
         $('.mega-menu-wrapper').removeClass('active');
         $('body').removeClass('overlay');
         $('header').removeClass('menu-open');
      }
   });
});
$(document).keydown(function(e) {
   if (e.keyCode === 27) { // Check if the pressed key is the escape key (keyCode 27)
       $('.header-link.dropdown').removeClass('active');
       $('.mega-menu-wrapper').removeClass('active');
       $('body').removeClass('overlay');
       $('header').removeClass('menu-open');
   }
});

$(document).ready(function(){
   // $('.dd-oc').click(function(){
   //     $('.mobLink-dropdown-links').slideToggle(350);
   //     $(this).toggleClass('active');
   // });
  $('.mobile-link').click(function(){
       $(this).children('.mobLink-dropdown-links').slideToggle(350);
       $(this).children('.dd-oc').toggleClass('active');
   });
   $('.dd-oc-sl').click(function(){
      // Check if the clicked element already has the active class
      if($(this).hasClass('active')) {
          // If it's active, slide it up and remove the active class
          $(this).removeClass('active').next('.ham-childlinks').slideUp(350).removeClass('active');
      } else {
          // If it's not active, close all other elements, and slide down the clicked one
          $('.dd-oc-sl').removeClass('active');
          $(this).addClass('active');
          $('.ham-childlinks').slideUp(350).removeClass('active');
          $(this).next('.ham-childlinks').slideToggle(350).addClass('active');
      }
  });
});
//  Global JS Ends

