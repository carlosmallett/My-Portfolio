const events = [
  {
    title: "Exec 2025-2026",
    files: [
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/1. Cover Photo.PNG",
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/2. Mia and Yazan.PNG",
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/3. Siddarth, Maya, Meera.PNG",
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/4. Marielle and Caden.PNG",
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/5. Irma and Daliya .PNG",
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/6. David and Geethika.PNG",
      "Projects/Small Town Record Graphics/Exec Committe (IG Post)/7. Carlos and Jenna.PNG"
    ]
  },
  {
    title: "What is Small Town Records",
    files: [
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/1. Cover Image.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/2. What is STR.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/3. Highlights.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/4. What We do.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/5. Sound Engineering.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/6. Production.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/7. House Band.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/8. A&R:Management.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/9. Booking & Outreach.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/10. Marketing.PNG",
      "Projects/Small Town Record Graphics/What is Small Town Records (IG Application Post)/11. Visual Media.PNG"
    ]
  },
  {
    title: "STR Applications",
    files: [
      "Projects/Small Town Record Graphics/STR Application Posters/1. Interest Meeting (Social Media).png",
      "Projects/Small Town Record Graphics/STR Application Posters/2. Artist Audition Application Poster.png",
      "Projects/Small Town Record Graphics/STR Application Posters/3. Exec Commitee Application Poster.png"
    ]
  },
  {
    title: "STR Audition Show",
    files: [
      "Projects/Small Town Record Graphics/STR Audition Show (IG POST)/1. Cover Photo.jpeg",
      "Projects/Small Town Record Graphics/STR Audition Show (IG POST)/2. Wiley Ray.jpeg",
      "Projects/Small Town Record Graphics/STR Audition Show (IG POST)/3. Ninth Street.jpeg",
      "Projects/Small Town Record Graphics/STR Audition Show (IG POST)/4. Jack Stapleton.jpeg",
      "Projects/Small Town Record Graphics/STR Audition Show (IG POST)/5. Solfish.jpeg",
      "Projects/Small Town Record Graphics/STR Audition Show (IG POST)/6. Lampshade.jpeg"
    ]
  },
  {
    title: "Introducing Lampshade",
    files: [
      "Projects/Small Town Record Graphics/Introducing Lampshade (IG POST)/1. Lampshade Cover Photo.png",
      "Projects/Small Town Record Graphics/Introducing Lampshade (IG POST)/2. Alexia.png",
      "Projects/Small Town Record Graphics/Introducing Lampshade (IG POST)/2. Will.png",
      "Projects/Small Town Record Graphics/Introducing Lampshade (IG POST)/3. Kareem.png",
      "Projects/Small Town Record Graphics/Introducing Lampshade (IG POST)/4. Michael.png",
      "Projects/Small Town Record Graphics/Introducing Lampshade (IG POST)/5. Ruben.png"
    ]
  },
  {
    title: "Introducing Solfish",
    files: [
      "Projects/Small Town Record Graphics/Introducing Solfish (IG POST)/1. Solfiich Cover Photo.png",
      "Projects/Small Town Record Graphics/Introducing Solfish (IG POST)/1. Nabrissa .png",
      "Projects/Small Town Record Graphics/Introducing Solfish (IG POST)/2. Ricky .png",
      "Projects/Small Town Record Graphics/Introducing Solfish (IG POST)/3. Aidan .png",
      "Projects/Small Town Record Graphics/Introducing Solfish (IG POST)/4. JR.png",
      "Projects/Small Town Record Graphics/Introducing Solfish (IG POST)/5. Ryan.png"
    ]
  },
  {
    title: "Introducing Jack Stapleton + P-Check Promotion",
    files: [
      "Projects/Small Town Record Graphics/Jack Stapleton P-Check Promotion.mov"
    ]
  },
  {
    title: "Winter Wonderland Recap",
    files: [
      "Projects/Small Town Record Graphics/Winter Wonderland Recap/1. Cover Photo.JPG",
      "Projects/Small Town Record Graphics/Winter Wonderland Recap/2. Grace & Dialtone.JPG",
      "Projects/Small Town Record Graphics/Winter Wonderland Recap/3. Mia Bella.JPG",
      "Projects/Small Town Record Graphics/Winter Wonderland Recap/4. Hannon.JPG",
      "Projects/Small Town Record Graphics/Winter Wonderland Recap/5. Crafts.JPG",
      "Projects/Small Town Record Graphics/Winter Wonderland Recap/6. Crowd.JPG"
    ]
  },
  {
    title: "Welcome to Small Town",
    files: [
      "Projects/Small Town Record Graphics/Welcome to Small Town Promotion/Welcome to Small Town IG POST.JPG",
      "Projects/Small Town Record Graphics/Welcome to Small Town Promotion/Welcome to Small Town Poster.png",
      "Projects/Small Town Record Graphics/Welcome to Small Town Promotion/JDON Promo Vid.mov"
    ]
  }
];

const eventsRoot = document.getElementById("eventsRoot");
const assetVersion = "20260919-5";

const withAssetVersion = (path) => {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}v=${assetVersion}`;
};

const isVideo = (path) => /\.(mov|mp4|webm)$/i.test(path);

const createLightbox = () => {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("aria-hidden", "true");

  const close = document.createElement("button");
  close.className = "lightbox-close";
  close.type = "button";
  close.setAttribute("aria-label", "Close full-size image");
  close.innerHTML = "&times;";

  const image = document.createElement("img");
  image.className = "lightbox-media";
  image.alt = "";

  lightbox.appendChild(close);
  lightbox.appendChild(image);
  document.body.appendChild(lightbox);

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    image.src = "";
    image.alt = "";
    document.body.classList.remove("lightbox-open");
  };

  const openLightbox = (src, alt) => {
    image.src = src;
    image.alt = alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  close.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  return { openLightbox };
};

const { openLightbox } = createLightbox();

const createMedia = (path, label) => {
  const item = document.createElement("article");
  item.className = "item";
  const resolvedPath = withAssetVersion(path);

  if (isVideo(path)) {
    const video = document.createElement("video");
    video.src = resolvedPath;
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", label);
    item.appendChild(video);
  } else {
    const trigger = document.createElement("button");
    trigger.className = "media-trigger";
    trigger.type = "button";
    trigger.setAttribute("aria-label", `View ${label} full size`);

    const img = document.createElement("img");
    img.src = resolvedPath;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = label;

    trigger.appendChild(img);
    trigger.addEventListener("click", () => {
      openLightbox(resolvedPath, label);
    });

    item.appendChild(trigger);
  }

  return item;
};

const createEventSection = (event) => {
  const section = document.createElement("section");
  section.className = "event card";

  const header = document.createElement("div");
  header.className = "event-head";

  const title = document.createElement("h2");
  title.textContent = event.title;

  const meta = document.createElement("span");
  meta.className = "meta";
  meta.textContent = `${event.files.length} assets`;

  header.appendChild(title);
  header.appendChild(meta);

  const carousel = document.createElement("div");
  carousel.className = "carousel";

  const left = document.createElement("button");
  left.className = "arrow";
  left.type = "button";
  left.setAttribute("aria-label", `Scroll ${event.title} left`);
  left.innerHTML = "&larr;";

  const track = document.createElement("div");
  track.className = "track";

  const right = document.createElement("button");
  right.className = "arrow";
  right.type = "button";
  right.setAttribute("aria-label", `Scroll ${event.title} right`);
  right.innerHTML = "&rarr;";

  event.files.forEach((path, index) => {
    track.appendChild(createMedia(path, `${event.title} asset ${index + 1}`));
  });

  const scrollByAmount = () => {
    const card = track.querySelector(".item");
    if (!card) {
      return 240;
    }

    const cardWidth = card.getBoundingClientRect().width;
    return cardWidth + 12;
  };

  const updateArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    left.disabled = track.scrollLeft <= 1;
    right.disabled = track.scrollLeft >= maxScroll - 1 || maxScroll <= 1;
  };

  left.addEventListener("click", () => {
    track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);

  carousel.appendChild(left);
  carousel.appendChild(track);
  carousel.appendChild(right);

  section.appendChild(header);
  section.appendChild(carousel);

  setTimeout(updateArrows, 0);
  return section;
};

events.forEach((event) => {
  eventsRoot.appendChild(createEventSection(event));
});
