const mouseCircle=document.querySelector("#mouseCircle");
const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

const main= document.querySelector("#main");
var timeOut;
function circleChaptaKaro(){
    var xScale=1;
    var yScale=1;
    var xPrev=0;
    var yPrev=0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeOut);
        xScale= gsap.utils.clamp(.8, 1.2, dets.clientX - xPrev);
        yScale= gsap.utils.clamp(.8, 1.2, dets.clientY -yPrev);

        xPrev=dets.clientX;
        yPrev=dets.clientY;

        mouseMove(xScale, yScale);

        timeOut= setTimeout(function (){
            mouseCircle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}
circleChaptaKaro();
mouseMove();

function mouseMove(xScale,yScale){
    window.addEventListener("mousemove", function(dets){
        mouseCircle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xScale}, ${yScale})`;

    })
}

function firstPageAnimation(){
    const t1= gsap.timeline();
    t1.from(".navbar", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    t1.to(".boundingElem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1.5,
        stagger: 0.2
    })
    t1.to(".footP1", {
        y: "0",
        opacity: 1,
        duration: 1.5,
        delay: -1.3,
        ease: Expo.easeInOut
    })

}
firstPageAnimation();

document.querySelectorAll(".elem").forEach(function (elem){
    var rot;
    var diffRot=0;
    elem.addEventListener("mousemove", function (details){
        diffRot= details.clientX- rot;
        rot= details.clientX;
        var diff= details.clientY-elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector(".imgs"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRot*0.5)
        });
    });
});
document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mouseleave", function (details){
        gsap.to(elem.querySelector(".imgs"), {
            opacity: 0
        });
    });
});
