const workRows = document.querySelectorAll("[data-row]");

workRows.forEach((row) => {
  const track = row.querySelector("[data-track]");

  if (!track) {
    return;
  }

  track.style.overflow = "visible";
  track.style.scrollBehavior = "auto";
});
