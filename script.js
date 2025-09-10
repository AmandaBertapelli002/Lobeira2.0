  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Se quiser que a animação aconteça só uma vez:
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 }); // 20% visível já dispara

    sections.forEach(section => {
      observer.observe(section);
    });
  });