function openResume() {
    // Replace 'your_resume_link' with the actual link to your resume
    window.open('your_resume_link', '_blank');
  }

document.addEventListener("DOMContentLoaded", function () {
  const selectedWorksItems = document.querySelectorAll(".selected-works-item");

  function checkScroll() {
    selectedWorksItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * 0.75) {
        // Adjust the threshold (0.75) based on when you want the animation to trigger
        item.style.transform = "translateY(0)";
        item.style.opacity = "1";
      }
    });
  }

  // Initial check on page load
  checkScroll();

  // Check on scroll
  window.addEventListener("scroll", checkScroll);
});

function copyToClipboard(text) {
  const dummyTextarea = document.createElement('textarea');
  dummyTextarea.value = text;
  document.body.appendChild(dummyTextarea);
  dummyTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(dummyTextarea);
  alert('Email copied to clipboard!');
}