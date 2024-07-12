var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2.5
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
 backgroundColor:"#000",
 height:"85px",
 duration:0.5,
 scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1
 }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2        
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 65%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#cards-container .card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#cards-container .card",
        scroller:"body",
        start:"top 65%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from("#page3 #colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page3 #colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})

gsap.from("#page3 #colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#page3 #colon2",
        scroller:"body",
        start:"top 80%",
        end:"top 47%",
        scrub:1
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 47%",
        scrub:2
    } 
})