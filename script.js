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


// page2
function page2Animation(){
    
}

let page2Center=document.querySelector("#page2-center");
let video=document.querySelector("#page2 video");

page2Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        borderRadius: 0,
        opacity: 1,
    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px"
    })
    
})

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

