const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function stamp(nodes: Element[]) {
  nodes.forEach((el, index) => {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${Math.min(index * 0.1, 0.45)}s`);
  });
}

if (!reduce) {
  document.documentElement.classList.add("motion");
  stamp([...document.querySelectorAll(".intro-copy > *, .deity-copy > *, .essay > p")]);
  stamp([...document.querySelectorAll(".intro-media, .deity-media")]);
  stamp([...document.querySelectorAll(".know-card, .fact, .card, .scan-card, .festival-card, .panel")]);
  stamp([...document.querySelectorAll(".chapter, .chapter-copy, .masonry figure, .band-copy > *")]);
  stamp([...document.querySelectorAll(".page-intro > *")]);
  stamp([...document.querySelectorAll("main .page > p, main .page > .seva-wrap, main .page > .actions, main .page > .seva-note")]);
  stamp(
    [...document.querySelectorAll(".section-block")].flatMap((block) =>
      block.querySelector(".card, .fact, .panel, .seva-wrap") ? [...block.querySelectorAll(":scope > h2")] : [block],
    ),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        entry.target.addEventListener("animationend", () => entry.target.classList.add("settled"), { once: true });
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

const header = document.querySelector("[data-header]");
const toTop = document.querySelector<HTMLButtonElement>("[data-to-top]");
const onScroll = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
  toTop?.classList.toggle("show", window.scrollY > 280);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
});
