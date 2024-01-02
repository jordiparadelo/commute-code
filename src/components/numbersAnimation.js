import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function numbersAnimation() {

    const section = document.querySelector('#customer-success')

    if(!section) return

    const teamNumbersCollection = [...document.querySelectorAll('.rc-result-item')]
  
    // Number Animation
    teamNumbersCollection.forEach((teamNumber, index) => {
      const number = teamNumber.querySelector('.rc-result_number')
      const numberAnimation = gsap.timeline()
  
      numberAnimation
        .from(number, {
        duration: 2,
        textContent: "0%",
        snap: { textContent: 1 }
      })
  
      ScrollTrigger.create({
        id: "number",
        trigger: section,
        start:"20% 90%",
        animation: numberAnimation
      })
    })
  }

export default numbersAnimation;