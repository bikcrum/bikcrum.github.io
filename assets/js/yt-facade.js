document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".yt-facade-play").forEach((btn) => {
    btn.addEventListener("click", () => {
      const facade = btn.closest(".yt-facade");
      const id = facade.getAttribute("data-yt-id");
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
