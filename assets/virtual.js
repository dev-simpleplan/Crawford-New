gsap.set(".custom-core-right-img", {y:100});
  gsap.to(".custom-core-right-img",{
    y:0,
    scrollTrigger:{
        trigger: ".custom-core-right-img",
        pin:false,
        markers:false,
        scrub:1
        }
    });
  gsap.set(".custom-core-right-over-image", {y:140});
  gsap.to(".custom-core-right-over-image",{
    y:0,
    scrollTrigger:{
        trigger: ".custom-core-right-over-image",
        pin:false,
        markers:false,
        scrub:1
        }
    });