gsap.set(".slwr-img", {y:100});
  gsap.to(".slwr-img",{
    y:0,
    scrollTrigger:{
        trigger: ".slwr-img",
        pin:false,
        markers:false,
        scrub:1
        }
    });
  gsap.set(".slwr-float-img", {y:140});
  gsap.to(".slwr-float-img",{
    y:0,
    scrollTrigger:{
        trigger: ".slwr-float-img",
        pin:false,
        markers:false,
        scrub:1
        }
    });