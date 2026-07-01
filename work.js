const workRows = document.querySelectorAll("[data-row]");

workRows.forEach((row) => {
  const track = row.querySelector("[data-track]");
  const left = row.querySelector('[data-dir="left"]');
  const right = row.querySelector('[data-dir="right"]');

  if (!track || !left || !right) {
    return;
  }

  const updateArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    left.disabled = track.scrollLeft <= 1;
    right.disabled = track.scrollLeft >= maxScroll - 1 || maxScroll <= 1;
  };

  const scrollByAmount = () => {
    const firstTile = track.querySelector(".work-tile");
    if (!firstTile) {
      return 260;
    }

    return firstTile.getBoundingClientRect().width + 12;
  };

  left.addEventListener("click", () => {
    track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);
  updateArrows();
});
