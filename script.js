document.addEventListener("DOMContentLoaded", () => {

  /* ========= PREMIUM REVEAL ANIMATION ========= */
  const animatedItems = document.querySelectorAll(
    ".hero, .card, .stat-card, .highlight-card, .section-title, .publication-card, .research-card, .lab-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  animatedItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index * 60, 300)}ms`;
    observer.observe(item);
  });

  /* ========= MOBILE MENU ========= */
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  }

  /* ========= CLOSE MENU AFTER CLICK ========= */
  const menuLinks = document.querySelectorAll("#mobileMenu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.remove("show");
    });
  });

  /* ========= DARK MODE ========= */
  const darkBtn = document.querySelector(".dark-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

});
