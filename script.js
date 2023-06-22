var gold = document.querySelectorAll(".gold");
var red = document.querySelectorAll(".red");

gold.forEach((elm, i) => {
  red.forEach((val, ii) => {
    elm.addEventListener("mousemove", function () {
      elm.style.transform = "rotate(-10deg)";
      elm.style.scale = "1.03";
      if (i === ii) {
        val.style.textShadow = "5px 5px 50px red";
      }
    });
  });
});

gold.forEach((elm, i) => {
  red.forEach((val, ii) => {
    elm.addEventListener("mouseleave", function () {
      elm.style.transform = "initial";
      if (i === ii) {
        val.style.textShadow = "0px 0px 00px ";
      }
    });
  });
});

document.querySelector("#l").addEventListener("mousemove", function () {
  document.querySelector("#l").style.transform = "rotate(-7deg)";
});

document.querySelector("#l").addEventListener("mouseleave", function () {
  document.querySelector("#l").style.transform = "rotate(10deg)";
});

// gsap.set("#main",{display:"none"})

// setTimeout(function(){
//   gsap.to("#page",{
//     // delay:4,
//     display:"none",
//     duration:1
//   })
//   gsap.to("#main",{
//     display:"initial",
//     delay:1
//   })
// },4500)

gsap.to("#line1", {
  height: "50%",
  duration: 1,
  delay: 1,
});

gsap.to("#line2", {
  height: "80%",
  duration: 1,
  delay: 1,
});

gsap.set(".head", { y: 100, opacity: 0 });
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top 60%",
    scrub: 1,
    end: "bottom 80%",
    // markers:true,
    // reverse:true
  },
});
tl1.to(".head", {
  opacity: 1,
  y: 0,
  ease: Power1,
  // duration:1
});

gsap.set(".p", { opacity: 0 });

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top 30%",
    // markers:true,
    scrub: 1,
    end: "bottom 10%",
  },
});

tl2.to(".p", {
  opacity: 1,
  delay: -1,
  duration: -1,
});

tl2.to(".anchor", {
  opacity: 1,
  delay: -1,
});

// gsap.set("#one",{transform:rotate("0deg")})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    start: "top 70%",
    // markers:true,
    scrub: 1,
    end: "bottom 10%",
  },
});

tl3
  .to("#proj", {
    width: "50%",
  })

  .to(".img", {
    height: '350px',
    // top: "5%",
    ease: Power1,
    duration: 1,
  })

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      start: "top 70%",
      // markers:true,
      scrub: 1,
      end: "bottom 10%",
    },
  });

  tl4
  .to("#proj1",{
    width:"50%"
  })