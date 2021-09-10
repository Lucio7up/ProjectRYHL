const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: "0%", duration: 1, stagger: 0.5 })

tl.fromTo(".video1", { opacity: 0 }, { opacity: 0.8, duration: 0.1 });

tl.to('.slider', { y: "-100%", duration: 1, stagger: 1.5, delay: 0.5 })

tl.fromTo(".klebers22", {  opacity: 0 }, { opacity: 1, duration: 1 });

tl.to('.intro', { y: "-100%", duration: 1, stagger: 1 }, "-=1");

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".container12", { opacity: 0 }, { opacity: 0.8, duration: 1 });

tl.fromTo(".checkit", { opacity: 0 }, { opacity: 0.8, duration: 1 });

tl.fromTo(".container22", { opacity: 0 }, { opacity: 0.8, duration: 1 });

tl.fromTo(".footer", { opacity: 0 }, { opacity: 0.8, duration: 1 });







