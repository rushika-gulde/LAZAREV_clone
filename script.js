let nav=document.querySelector("nav");
nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline()
    tl.to("#nav-bottom",{
        height:"21vh"
    })
    tl.to(".nav-option h5",{
        // display:"block"
        opacity:1
    })
    tl.from(".nav-option h5 span",{
        y:25,
        stagger:{
           amount:0.6
        }
        

    })
})
nav.addEventListener("mouseleave",function(){
    let tl=gsap.timeline()
    tl.to(".nav-option h5 span",{
        y:25,
        stagger:{
           amount:0.1
        }
        

    })
    tl.to(".nav-option h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })

})
