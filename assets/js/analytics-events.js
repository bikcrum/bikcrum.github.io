document.addEventListener("DOMContentLoaded", () => {
  if (typeof gtag !== "function") return;

  const clean = (text) => (text || "").replace(/\s+/g, " ").trim();

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    // CV / resume download
    if (link.href && link.href.includes("resume.pdf")) {
      gtag("event", "cv_download", {
        event_category: "engagement",
      });
      return;
    }

    // The "extras" link itself (footer 🧐 icon)
    if (link.getAttribute("href") === "/extras/") {
      gtag("event", "extras_click", {
        event_category: "engagement",
      });
      return;
    }

    // Any link clicked while on the extras page itself
    if (window.location.pathname.replace(/\/$/, "") === "/extras") {
      gtag("event", "extras_page_link_click", {
        event_category: "engagement",
        event_label: clean(link.textContent) || link.href,
      });
      return;
    }

    // Social icon clicks (About page + footer)
    const socialContainer = link.closest(".contact-icons, .social");
    if (socialContainer && link.title) {
      gtag("event", "social_click", {
        event_category: "engagement",
        event_label: clean(link.title),
      });
      return;
    }

    // Co-author clicks on publications
    const bibEntry = link.closest("ol.bibliography li, ol.bibliography > li");
    if (bibEntry && link.closest(".author")) {
      const title = bibEntry.querySelector(".title");
      gtag("event", "author_click", {
        event_category: "engagement",
        event_label: `${clean(link.textContent)} - ${title ? clean(title.textContent) : "unknown"}`,
      });
      return;
    }

    // Publication link buttons (Abs/arXiv/Bib/Code/Website/HTML/PDF)
    if (bibEntry && link.matches(".links a, .btn")) {
      const title = bibEntry.querySelector(".title");
      gtag("event", "publication_link_click", {
        event_category: "engagement",
        event_label: `${clean(link.textContent)} - ${title ? clean(title.textContent) : "unknown"}`,
      });
      return;
    }

    // Inline bio links on the About page (e.g. RAI Institute, MiCROTEC, Alan Fern,
    // and the subtitle line under the name, e.g. Oregon State University)
    const bioContent = link.closest("article .clearfix, .desc");
    if (bioContent) {
      gtag("event", "bio_link_click", {
        event_category: "engagement",
        event_label: clean(link.textContent),
      });
      return;
    }

    // Links inside individual news items (e.g. event pages, external mentions)
    const newsItem = link.closest(".news td");
    if (newsItem) {
      gtag("event", "news_link_click", {
        event_category: "engagement",
        event_label: clean(link.textContent),
      });
      return;
    }

    // Project card clicks on the projects listing page
    const projectCard = link.closest(".projects .card");
    if (projectCard && link.getAttribute("href") && link.getAttribute("href").includes("/projects/")) {
      const title = projectCard.querySelector(".card-title");
      gtag("event", "project_click", {
        event_category: "engagement",
        event_label: title ? clean(title.textContent) : link.getAttribute("href"),
      });
    }
  });
});
