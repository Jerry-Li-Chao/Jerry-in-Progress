const progressWords = ["LEARNING", "WRITING", "RETHINKING", "SHARING"];
const progressWord = document.querySelector("#progress-word");
let progressWordIndex = 0;

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(() => {
    progressWordIndex = (progressWordIndex + 1) % progressWords.length;
    progressWord.animate(
      [
        { opacity: 0, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 420, easing: "cubic-bezier(.2,.75,.25,1)" }
    );
    progressWord.textContent = progressWords[progressWordIndex];
  }, 2400);
}

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".will-reveal").forEach(element => revealObserver.observe(element));
