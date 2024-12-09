document.addEventListener("DOMContentLoaded", function () {
  const selectedWorksItems = document.querySelectorAll(".selected-works-item");
    
  const projectPages = [
    'broadcom-experience.html',
    'pogoh-bike-analysis.html',
    'involvemint-marketplace.html',
    'storyworlds-narratives.html',
  ];

  selectedWorksItems.forEach((item, index) => {
    const h2Element = item.querySelector('h2');
    const imageElement = item.querySelector('.work-image');

    // Navigate to the project page on H2 or image click
    h2Element.addEventListener('click', function () {
      navigateToProjectPage(index);
    });

    imageElement.addEventListener('click', function () {
      navigateToProjectPage(index);
    });
  });

  // Navigation function
  function navigateToProjectPage(index) {
    if (index < projectPages.length) {
      window.location.href = projectPages[index];
    }
  }

  function checkScroll() {
    selectedWorksItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * 0.75) {
        item.style.transform = "translateY(0)";
        item.style.opacity = "1";
      }
    });
  }

  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

// Open resume in a new tab
function openResume() {
  window.open(
    'https://drive.google.com/file/d/1yY4Vplgs6Vw6-er-CuDL3v5XwzhcccEJ/view?usp=sharing',
    '_blank'
  );
}

// Copy email to clipboard
function copyToClipboard(text) {
  const dummyTextarea = document.createElement('textarea');
  dummyTextarea.value = text;
  document.body.appendChild(dummyTextarea);
  dummyTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(dummyTextarea);
  alert('Email copied to clipboard!');
}
