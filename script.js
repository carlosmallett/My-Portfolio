const gateForm = document.getElementById("gateForm");
const gateMessage = document.getElementById("gateMessage");
const passwordInput = document.getElementById("password");
const profilePhoto = document.getElementById("profilePhoto");
const photoFrame = document.querySelector(".photo-frame");

if (profilePhoto && photoFrame) {
  profilePhoto.addEventListener("error", () => {
    photoFrame.classList.add("show-fallback");
  });
}

if (gateForm && gateMessage && passwordInput) {
  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = passwordInput.value.trim();

    if (!value) {
      gateMessage.textContent = "Please enter a password.";
      gateMessage.style.color = "#ffd7d7";
      return;
    }

    if (value === "Camreddish2026") {
      gateMessage.textContent = "Access granted. Redirecting to your work page...";
      gateMessage.style.color = "#d6f9d6";
      setTimeout(() => {
        window.location.href = "work.html";
      }, 550);
    } else {
      gateMessage.textContent = "Incorrect password. Please try again.";
      gateMessage.style.color = "#ffd7d7";
    }
  });
}
