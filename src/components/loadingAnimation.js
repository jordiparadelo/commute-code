import { gsap } from "gsap/gsap-core";
import { Flip } from "gsap/Flip";

/* LOADING ANIMATION*/
function loadingAnimation() {
    const curtainVideo = document.querySelector(".headline_video");

    if(!curtainVideo) return 
    
    const CLASS_NAME = "is-full-screen";
    let mm = gsap.matchMedia();

    curtainVideo.classList.add(CLASS_NAME);

    // const state = Flip.getState(curtainVideo);
    const state = Flip.getState(curtainVideo, { props: "borderRadius" });
    curtainVideo.classList.toggle(CLASS_NAME);

    if (!curtainVideo) return;

    mm.add("(min-width: 767px)", () => initFlip() )

    function initFlip(){
      avoidScroll();

      // Animate from the initial state to the end state
      Flip.from(state, {
        delay: 3.5,
        absolute: true,
        duration: 1,
        ease: "power3.inOut",
        toggleClass: CLASS_NAME,
        zIndex: 999,
        onComplete: () => {
          gsap.to(".header", {
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut"
          });

          restoreScroll();
        }
      })
    }

    function avoidScroll() {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // document.body.dataset.pageLoad = false;
      document.body.style.overflowY = "hidden";

      gsap.set(".header", {
        // delay: 3.5,
        yPercent: -150
      });
    }
    function restoreScroll() {
      // document.body.dataset.pageLoad = true;
      document.body.style.overflowY = "auto";
    }
  }

  export default loadingAnimation
