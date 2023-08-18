// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });



function init(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
   
    ScrollTrigger.refresh();
}

init();

var cursor=document.querySelector(".cursor")

var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  cursor.style.left=dets.x+20+"px"
  cursor.style.top=dets.y+20+"px"
})


var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 30%",
        end:"top 0",
        scrub:3
     }
})


var tl2=gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -110%",
      end:"top -120%",
      scrub:3
   }
})


var tl3=gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -350%",
      end:"top -380%",
      scrub:3
   }
})

tl3.to(".main",{
  backgroundColor:"#000"
})
tl.to(".page1 h1",{
  x:-80
  
},"anim")

tl.to(".page1 h2",{
    x:100
    
},"anim")

tl.to(".page1 video",{
  width:"90%"
  
},"anim")
tl2.to(".main",{
  backgroundColor:"#fff"
})

var boxes=document.querySelectorAll(".box")

boxes.forEach(function(elem){
 elem.addEventListener("mouseenter",function(){
  var att=elem.getAttribute("data-image")
  cursor.style.width="200px"
  cursor.style.height="200px"
  cursor.style.borderRadius="0"
  cursor.style.backgroundImage=`url(${att})`
  cursor.style.overflow="hidden"
 })

 elem.addEventListener("mouseleave",function(){
  cursor.style.height="10px"
  cursor.style.width="10px"
  cursor.style.borderRadius="50%"
  cursor.style.backgroundImage="none"
 })
})

var h4=document.querySelectorAll(".nh")
var purple=document.querySelector("#purple")
h4.forEach(function(h){
  h.addEventListener("mouseenter",function(){
  
    
    purple.style.display="initial"
    var name=h.getAttribute("set-name")
    document.querySelector("#change").innerHTML=`<marquee loop="0" behavior="scroll" scrollamount="10" direction="left">${name +" "+name+" "+name+" "+name+" "+name+" "+name+" "+name+" "+name+" "}</marquee>`;
    
    
  })
  h.addEventListener("mouseleave",function(){
    purple.style.display="none"

  })

})