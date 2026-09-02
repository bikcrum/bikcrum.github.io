document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".yt-facade-play").forEach((btn) => {
    btn.addEventListener("click", () => {
      const facade = btn.closest(".yt-facade");
      const id = facade.getAttribute("data-yt-id");
      if (typeof gtag === "function") {
        const clean = (text) => (text || "").replace(/\s+/g, " ").trim();
        const cardTitle = facade.closest(".card")?.querySelector(".card-title");
        const pageTitle = document.querySelector(".post-title");
        const label = cardTitle ? clean(cardTitle.textContent) : pageTitle ? clean(pageTitle.textContent) : id;
        gtag("event", "video_play", {
          event_category: "engagement",
          event_label: label,
        });
      }
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("allowfullscreen", "");
      facade.replaceWith(iframe);
    });
  });
});
