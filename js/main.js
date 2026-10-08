const hero = document.querySelector(".main-hero");
const nextSection = document.querySelector(".main-about");

if (hero && nextSection) {
  let isScrolling = false;

  window.addEventListener("wheel", (e) => {

    if (e.ctrlKey) return;

    if (isScrolling) {
      e.preventDefault();
      return;
    }

    if (e.deltaY <= 0) return;

    const nextTop =
      nextSection.getBoundingClientRect().top +
      window.scrollY;

    if (window.scrollY >= nextTop - 2) return;

    e.preventDefault();

    isScrolling = true;

    window.scrollTo({
      top: nextTop,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth"
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);

  }, { passive: false });
}
