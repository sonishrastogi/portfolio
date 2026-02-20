// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor Follower
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
    });
});

// 2. Hero Entrance Animation
const tl = gsap.timeline();

tl.from(".reveal", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.5
})
.from(".name", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
}, "-=0.4")
.from(".tagline", {
    opacity: 0,
    duration: 1
}, "-=0.6");

// 3. Scroll Reveal for Cards
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

// 4. Hover effect on links
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 4, backgroundColor: "transparent", border: "1px solid #00f2ff" });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "#00f2ff", border: "none" });
    });
});