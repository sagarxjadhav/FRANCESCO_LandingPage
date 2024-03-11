var t1=gsap.timeline(); // one by code runs


t1.from("#nav h3",{
    y:-50,      // from top when negative
    opacity: 0,     // is opacity
    delay: 0.4,     // taime to start animation 
   duration: 1,     // animation time to run
   stagger:0.2   // one by one heading appear at 0.3 sec on screen
})

t1.from("#main h1",{
    x:-500,
    opacity: 0,
    duration: 0.8,
    stagger:0.4
} )

t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})