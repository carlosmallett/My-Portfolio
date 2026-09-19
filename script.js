const profilePhoto = document.getElementById("profilePhoto");
const photoFrame = document.querySelector(".photo-frame");

if (profilePhoto && photoFrame) {
  profilePhoto.addEventListener("error", () => {
    photoFrame.classList.add("show-fallback");
  });
}

const projectMap = {
  storyweaver: {
    title: "StoryWaver",
    src: "Projects/story-weaver-presentation.pdf"
  },
  apiary: {
    title: "Apiary",
    src: "Projects/APIARY%20Presentation.pdf"
  },
  insight: {
    title: "Insight Engine 2.0",
    src: "Projects/Insight%20Engine%202.0%20Presentation.pdf"
  },
  collective: {
    title: "The Collective",
    src: "Projects/The%20Collective%20Brand%20Kit.pdf"
  },
  standardAgency: {
    title: "Standard Agency",
    src: "Projects/Standard%20Agency%20Presenation.pdf"
  }
};

const projectModal = document.getElementById("projectModal");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectFrame = document.getElementById("projectFrame");
const projectTriggers = document.querySelectorAll(".work-tile-trigger");
const projectCloseButton = document.querySelector(".project-modal-close");
const projectBackdrop = document.querySelector("[data-close-modal]");

const closeProjectModal = () => {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  if (projectFrame) {
    projectFrame.src = "";
  }
};

projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const key = trigger.dataset.project;
    const project = projectMap[key];

    if (!project) {
      return;
    }

    const pdfUrl = new URL(project.src, window.location.href).toString();
    window.location.href = pdfUrl;

    if (projectModal) {
      closeProjectModal();
    }
  });
});

if (projectCloseButton) {
  projectCloseButton.addEventListener("click", closeProjectModal);
}

if (projectBackdrop) {
  projectBackdrop.addEventListener("click", closeProjectModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal && projectModal.classList.contains("is-open")) {
    closeProjectModal();
  }
});
