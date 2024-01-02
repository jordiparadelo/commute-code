import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function headerAnimation() {
	const headerCollection = [...document.querySelectorAll(".rc-section_header")];
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	gsap.registerPlugin(ScrollTrigger);

	/* Letters Animation */
	const sectionHeaderSubtitle = Splitting({
		target: ".rc-section_header .rc-section_subtitle",
		by: "words",
	});
	const sectionHeaderTitle = Splitting({
		target: ".rc-section_header .rc-section_title",
		by: "lines",
	});

	/* Header animation */
	headerCollection.forEach((header, index) => {
		const words = header.querySelectorAll(".rc-section_subtitle *");
		const title = header.querySelectorAll(".rc-section_title");
		const headerAnimation = gsap.timeline();
		const hasWords = words.length > 0;

		if (hasWords) {
			headerAnimation.from(words, {
				top: 20,
				opacity: 0,
				ease: "power2.out",
				duration: 0.3,
				stagger: 0.2,
			});
		}

		sectionHeaderTitle[index]?.lines.forEach((line, index) => {
			headerAnimation.from(
				[...line],
				{
					opacity: 0,
					top: 20,
					duration: 0.5,
					delay: (index + 1) * sectionHeaderTitle[index].lines.lenght,
				},
				"-=0.2"
			);
		});

		headerAnimation.duration(1);

		ScrollTrigger.create({
			id: `header-${index}`,
			trigger: headerCollection[index],
			start: "20% 90%",
			// markers: true,
			animation: headerAnimation,
		});
	});
}

export default headerAnimation;
