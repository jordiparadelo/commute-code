import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function stepAnimation() {
    const featureItemsCollection = [...document.querySelectorAll('#platform-features .rc-feature-item')]
  
    // Features Items
    featureItemsCollection.forEach((item, index) => {
      const stepAnimation = gsap.timeline()
      const [title, text, dot, line] = [
        item.querySelector('.rc-feature-description_title'),
        item.querySelector('.rc-feature-description_content'),
        item.querySelector('.dot-shadow'),
        item.querySelector('.bullet_path')
      ]
  
      stepAnimation.add({delay: (index + 1) * featureItemsCollection.lenght})	
  
      stepAnimation
        .to(dot, {scale: 2.5, duration: 1})
        .from(line, {scaleY: 0, duration: 2}, "-=0.5")
        .from(title, {opacity: 0, duration: 2}, "-=1")
        .from(text, {opacity: 0, duration: 2, y:'50%'})
  
      stepAnimation.duration(1.5) // Duration of the length of the animation
  
      ScrollTrigger.create({
        id: "stepper",
        trigger: item,
        start:"20% 90%",
        // markers: true,
        animation: stepAnimation
      })
    })
  
  }

export default stepAnimation;

