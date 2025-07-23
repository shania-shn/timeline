import { gsap } from 'gsap';

const scrollme = document.querySelector('.scrollme');

gsap.to('.scrollme', {
  scrollTrigger: {
    trigger: '.scrollme',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
  y: -100,
});
// // Initialize GSAP timeline
// const tl = gsap.timeline({ paused: true });

// // Initial page load animation
// gsap.fromTo('.title', 
//   { opacity: 0, y: -50 }, 
//   { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }
// );

// gsap.fromTo('.animate-btn', 
//   { opacity: 0, y: 50 }, 
//   { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "back.out(1.7)" }
// );

// // Create main animation timeline
// tl.fromTo('.box', 
//   { 
//     opacity: 0, 
//     x: -100,
//     rotation: -180,
//     scale: 0
//   }, 
//   { 
//     opacity: 1, 
//     x: 0,
//     rotation: 0,
//     scale: 1,
//     duration: 0.8,
//     ease: "back.out(1.7)",
//     stagger: 0.2 // Animate each box 0.2s after the previous one
//   }
// )
// .to('.box', {
//   rotation: 360,
//   scale: 1.2,
//   duration: 0.5,
//   ease: "power2.inOut",
//   stagger: 0.1
// })
// .to('.box', {
//   rotation: 0,
//   scale: 1,
//   y: -20,
//   duration: 0.3,
//   ease: "bounce.out",
//   stagger: 0.1
// })
// .to('.box', {
//   y: 0,
//   duration: 0.5,
//   ease: "elastic.out(1, 0.3)",
//   stagger: 0.1
// });

// // Button click event
// document.getElementById('animateBtn').addEventListener('click', () => {
//   if (tl.isActive()) {
//     tl.pause();
//   } else if (tl.progress() === 1) {
//     tl.restart();
//   } else {
//     tl.play();
//   }
// });

// // Additional hover animations
// document.querySelectorAll('.box').forEach(box => {
//   box.addEventListener('mouseenter', () => {
//     gsap.to(box, { scale: 1.1, duration: 0.3, ease: "power2.out" });
//   });
  
//   box.addEventListener('mouseleave', () => {
//     gsap.to(box, { scale: 1, duration: 0.3, ease: "power2.out" });
//   });
// });

// console.log('GSAP Timeline project initialized!'); 