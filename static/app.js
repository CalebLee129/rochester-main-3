const tl =  gsap.timeline({defaults: {ease: "power1.out"}});

/* tl.to(".text",{y: "0%", duration: 1, stagger: 0.25}); */
tl.to('.slider', {y: "-100%",duration: 1, delay: 4.5});
tl.to('.intro', {y:"-100%", duration: 1});
tl.fromTo('nav', {opacity:0}, {opacity:1,duration: 1});
tl.fromTo('.image-move', {opacity:0.1}, {opacity:1,duration: 2});