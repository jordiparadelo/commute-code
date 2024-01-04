import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import "@/styles/lenis.css"

gsap.registerPlugin(ScrollTrigger)

/* SMOOTH SCROLL */
function initSmoothScrolling() {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      gestureOrientation: 'vertical',
      normalizeWheel: false,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    lenis.on('scroll', ScrollTrigger.update)

    requestAnimationFrame(raf)
  }

  export default initSmoothScrolling