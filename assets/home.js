// Home JS Starts
// document.querySelector(".home-banner-cta a").addEventListener("click",()=>{
//     const secondSection = document.querySelector("#first");
//     const headerHeight = document.querySelector("header").offsetHeight;
//     window.scrollBy(0, secondSection.getBoundingClientRect().top - headerHeight);
// });


gsap.set(".custom-core-right-img-base", {y:100});
gsap.to(".custom-core-right-img-base",{
    y:0,
    scrollTrigger:{
        trigger: ".custom-core-right-img-base",
        pin:false,
        markers:false,
        scrub:1
        }
    })
gsap.set(".custom-core-right-over-image", {y:140});
gsap.to(".custom-core-right-over-image",{
    y:0,
    scrollTrigger:{
        trigger: ".custom-core-right-over-image",
        pin:false,
        markers:false,
        scrub:1
        }
    })
let images = gsap.utils.toArray(".three-boxes-img img, .founder-story-left img, .founder-story-small-img img");

images.forEach((image)=>{
gsap.set(image, {scale:1.2});
gsap.to(image,{
    scale:1,
    scrollTrigger:{
            trigger: image,
            pin:false,
            markers:false,
            scrub:1
            }
})    
})
// Home JS Ends