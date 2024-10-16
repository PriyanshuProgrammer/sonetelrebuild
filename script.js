const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

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
        height:"auto",
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
                height:"0",
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
                height:"0",
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
        document.body.style.overflow = "hidden";
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
