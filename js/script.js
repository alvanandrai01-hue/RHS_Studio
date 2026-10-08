document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Portfolio filter
  const filters = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".portfolio-item");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(btn => btn.classList.remove("active"));
      filter.classList.add("active");

      const category = filter.dataset.filter;
      items.forEach(item => {
        const show = category === "all" || item.dataset.category === category;
        item.style.display = show ? "" : "none";
      });
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // WhatsApp placeholder: replace number and message later
  const whatsappNumber = "6285179526502";
  const whatsappMessage = encodeURIComponent(
    "Halo RHS Studio, saya ingin bertanya tentang booking dan paket foto."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  ["whatsappButton", "floatingWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappUrl;
  });

  // Back to top
  const backTop = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 600);
  });
  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
