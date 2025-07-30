gsap.registerPlugin(ScrollTrigger);

// Imposta la posizione iniziale FUORI SCHERMO
gsap.utils.toArray(".from-left").forEach(elem => {
  gsap.set(elem, { x: -200});

  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%", // attiva un po' prima
    end: "bottom top",
    
    // Entrando (scroll in giù)
    onEnter: () => gsap.to(elem, {
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }),
    
    // Uscendo (scroll in giù)
    onLeave: () => gsap.to(elem, {
      x: -200,
      duration: 0.8,
      ease: "power2.in"
    }),
    
    // Entrando da sotto (scroll in su)
    onEnterBack: () => gsap.to(elem, {
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }),
    
    // Uscendo verso l’alto
    onLeaveBack: () => gsap.to(elem, {
      x: -200,
      duration: 0.8,
      ease: "power2.in"
    })
  });
});

gsap.utils.toArray(".from-right").forEach(elem => {
  gsap.set(elem, { x:200 });

  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom top",
    
    onEnter: () => gsap.to(elem, {
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }),
    onLeave: () => gsap.to(elem, {
      x: 200,
      duration: 0.8,
      ease: "power2.in"
    }),
    onEnterBack: () => gsap.to(elem, {
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }),
    onLeaveBack: () => gsap.to(elem, {
      x: 200,
      duration: 0.8,
      ease: "power2.in"
    })
  });
});
