new WOW().init();
const lenis = new Lenis({
    smooth:true,
});
let odochalgaya = false;
let odocontainer = document.querySelector("#page3 #odometercontainer");


function raf(time){
    let rect = odocontainer.getBoundingClientRect();
    if(rect.top >=0 && rect.bottom <= window.innerHeight && !odochalgaya){
        document.querySelector("#page3 #odometercontainer #odometer1").innerHTML = 3522322;
        document.querySelector("#page3 #odometercontainer #odometer2").innerHTML = 239;
    }
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

let ismouse = false;
let services = document.querySelector("nav #navbar #options a");
let scrolldownborder = document.querySelector("nav #scrolldown");
let scrolldowncontent = document.querySelector("nav #scrolldown #scrolldown_content");
let sidebartoggle = document.querySelector("#navbar #buttons span:nth-child(3)");
let issidebaropen = false;
services.addEventListener("mouseenter",(event)=>{
    ismouse = true;
    let tl = gsap.timeline();
    scrolldownborder.style.borderTop = "1px solid gray";
    tl.to("nav #scrolldown",{
        minHeight:"30vh",
        duration:0.2,
    });
    tl.from("nav #scrolldown #scrolldown_content .line1",{
        opacity:0,
        y:-1,
        duration:0.02,
    });
    tl.from("nav #scrolldown #scrolldown_content .line2",{
        opacity:0,
        y:-1,
        duration:0.02,
    });
    tl.from("nav #scrolldown #scrolldown_content .line3",{
        opacity:0,
        y:-1,
        duration:0.02,
    });
    tl.from("nav #scrolldown #scrolldown_content .line4",{
        opacity:0,
        y:-1,
        duration:0.02,
    });

});

services.addEventListener("mouseleave",(event)=>{
    setTimeout(() => {
        if(ismouse){
            scrolldownborder.style.borderTop = "none";
            gsap.to("nav #scrolldown",{
                minHeight:"0",
                duration:0.2,
            });
        }   
    }, 100);
});

scrolldowncontent.addEventListener("mouseenter",(event)=>{
    ismouse = false;
})

scrolldowncontent.addEventListener("mouseleave",(event)=>{
    setTimeout(() => {
        if(!ismouse){
            ismouse = true;
            scrolldownborder.style.borderTop = "none";
            gsap.to("nav #scrolldown",{
                minHeight:"0",
                duration:0.2,
            });
        } 
    }, 100);
})

sidebartoggle.addEventListener("click",()=>{
    if(!issidebaropen){
        document.querySelector("#navbar #buttons span:nth-child(3) i").classList.remove("ri-list-unordered");
        document.querySelector("#navbar #buttons span:nth-child(3) i").classList.add("ri-close-large-line");
        issidebaropen = true;
        lenis.stop();
        gsap.to("#main #page1 #sidebar",{
            transform:"translateX(0%)",
            duration:0.5,
        })
        gsap.from("#navbar #buttons span:nth-child(3)",{
            opacity:0,
            rotate:"180deg",
            duration:0.5,
        })
    }
    else{ 
        document.querySelector("#navbar #buttons span:nth-child(3) i").classList.add("ri-list-unordered");
        document.querySelector("#navbar #buttons span:nth-child(3) i").classList.remove("ri-close-large-line");
        issidebaropen = false;
        lenis.start();
        let tl = gsap.timeline();
        tl.to("#main #page1 #sidebar",{
            transform:"translateX(100%)",
            duration:0.5,
        })
        tl.to("body",{
            overflow:"scroll",
        })
    }
})






let scrollpara = "We believe that globalization and entrepreneurship are key drivers for making this planet a better place.By empowering entrepreneurs in the most remote corners of the world, with a communication solutions that remove distance and levels the playing field, we hope to contribute to this progress.About 200,000 out of those that have signed up – across 170 countries – have also become paying customers."

scrollpara.split("").forEach((word)=>{
    document.querySelector("#page3 #para").innerHTML += `<span>${word}</span>`
})

gsap.from("#page3 #para span",{
    scrollTrigger:{
      trigger:"#page3",
      scroller:"body",
      pin:true,  
      scrub:1,
    },
    opacity:0.2,
    stagger:1,
})

gsap.to("#page1 #page1_content > h1",{
    x:"100vw",
    scrollTrigger:{
        trigger:"#page1 #page1_content > h1",
        scroller:"body",
        start:"top 10%",
        end:"top -80%",
        scrub:1,
    }
})

gsap.to("#page1 #page1_content > h3",{
    x:"-50vw",
    scrollTrigger:{
        trigger:"#page1 #page1_content > h1",
        scroller:"body",
        start:"top 10%",
        end:"top -80%",
        scrub:1,
    }
})

gsap.from("#page1 > img",{
    y:400,
    duration:0.5,
})


gsap.to("#page4 #page4container #img1",{
    bottom:"20vh",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:1,
    }
})

gsap.to("#page4 #page4container #img2",{
    top:"10vh",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:1,
    }
})

gsap.from("#page5 #page5container #news .news1",{
    x:-200,
    duration:2,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
    }
})

gsap.to("#page6 #scalebox",{
    width:"80vw",
    height:"auto",
    minHeight:"90vh",
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        // markers:true,
        pin:true,
        end:"bottom center",
        scrub:true,
    }
})

gsap.from("#page6 #scalebox .cols",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        end:"bottom center",
        // markers:true,
        pin:true,
        scrub:true,
    }
})