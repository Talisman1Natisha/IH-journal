/*
 * Small script to handle the lightbox functionality. All images within
 * figures tagged with the class `artwork` will open in a modal when
 * clicked. The caption is derived from the image's alt attribute. The
 * modal can be closed by clicking the X icon or anywhere outside the image.
 */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementById("closeBtn");

  // Attach click listeners to all artwork images
  const images = document.querySelectorAll(".artwork img");
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  // Close the modal when clicking on X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});