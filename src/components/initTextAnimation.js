import { gsap } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import wrapElements from '@utils/wrapElements'

/* TEXT ANIMATIONS */
function initTextAnimation() {
    const splittingCollection = Splitting();
    
    const timelineSettings = {
      staggerValue: 0.014,
      charsDuration: 0.5
    };

    // Wrap words inside spans
    splittingCollection.map(({ el: textParent }) => {
      wrapElements([...textParent.children], "span", "word-wrapper");

      gsap.set(textParent, {
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: "0.2em"
      });
    });

    gsap.set(".word-wrapper", {
      overflow: "hidden"
    });

    const timeline = gsap.timeline().addLabel("start").staggerFrom(
      ".char",
      timelineSettings.charsDuration,
      {
        ease: "Power3.easeOut",
        y: "-100%",
        opacity: 0
      },
      timelineSettings.staggerValue,
      "start"
    );
  }

  export default initTextAnimation