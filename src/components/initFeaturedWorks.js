import { gsap } from "gsap";

/* FEATURED WORKS ANIMATIONS */
function initFeaturedWorks() {
	const element = document.querySelector(".work-item")

	if(!element) return

	const worksItems = [...document.querySelectorAll(".work-item")];

	worksItems.forEach((item, index) =>
		item.addEventListener("mouseenter", () => slideNextProject(index))
	);
}

/* PROJECT CARD SLIDE */
function slideNextProject(index) {
	const slide = 100 / -index + "%";
	// console.log({ nextSlide: index, slide });
	gsap.to(".work-cover-list", {
		y: (i, el) => el.parentElement.clientHeight * -index,
		ease: "none",
		duration: "none",
	});
}

export default initFeaturedWorks;
