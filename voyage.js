document.addEventListener("DOMContentLoaded", function () {
  const viewMoreBtn = document.getElementById("view-more-btn");
  const additionalText = document.getElementById("additional-text");

  viewMoreBtn.addEventListener("click", function () {
    if (additionalText.style.display === "none") {
      additionalText.style.display = "block";
      viewMoreBtn.textContent = "Voir Moins";
    } else {
      additionalText.style.display = "none";
      viewMoreBtn.textContent = "Voir Plus";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreButtons = document.querySelectorAll(".view-more-btn");

  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardBody = this.parentElement;
      const additionalText =
        cardBody.querySelector(".additional-text") ||
        cardBody.querySelector("#additional-text");

      if (additionalText.style.display === "none") {
        additionalText.style.display = "block";
        setTimeout(() => {
          additionalText.style.opacity = "1";
        }, 10); // Delay to trigger the fade-in effect
        this.textContent = "Voir Moins";
      } else {
        additionalText.style.opacity = "0";
        setTimeout(() => {
          additionalText.style.display = "none";
        }, 400); // Wait for the fade-out transition
        this.textContent = "Voir Plus";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreButtons = document.querySelectorAll(".view-more-btn");

  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardBody = this.parentElement;
      const additionalText = cardBody.querySelector(".additional-text");

      if (additionalText.style.display === "none") {
        additionalText.style.display = "block"; // Show additional text
        additionalText.style.opacity = "1"; // Set opacity for fade effect
        this.textContent = "Voir Moins"; // Change button text
      } else {
        additionalText.style.opacity = "0"; // Fade out
        setTimeout(() => {
          additionalText.style.display = "none"; // Hide after fade
        }, 400); // Wait for fade out transition
        this.textContent = "Voir Plus"; // Change button text
      }
    });
  });
});
