// 공통 메뉴와 TOP 버튼
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "메뉴 열기");
}
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
matchMedia("(min-width: 701px)").addEventListener("change", closeMenu);
document
  .querySelectorAll("[data-page] a[data-page], .site-footer a[data-page]")
  .forEach((link) => {
    if (link.dataset.page === document.body.dataset.page)
      link.setAttribute("aria-current", "page");
  });
document
  .querySelector(".top-button")
  .addEventListener("click", () =>
    window.scrollTo({
      top: 0,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    }),
  );
// 파일을 실제로 추가하면 자동으로 활성화합니다. 빈 src/가짜 재생 버튼을 사용하지 않습니다.
document.querySelectorAll("video[data-src]").forEach(async (video) => {
  try {
    const response = await fetch(video.dataset.src, { method: "HEAD" });
    if (
      !response.ok ||
      !(response.headers.get("content-type") || "").startsWith("video/")
    )
      return;
    video.src = video.dataset.src;
    video.hidden = false;
    video.parentElement
      .querySelector(".video-status")
      ?.setAttribute("hidden", "");
    video.closest(".main-hero")?.classList.add("has-video");
  } catch {
    /* Live Server에서 실행하고 video/campaign.mp4를 추가하세요. */
  }
});
