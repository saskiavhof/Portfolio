function openResume() {
    // Replace 'your_resume_link' with the actual link to your resume
    window.open('https://drive.google.com/file/d/1FO5z-9wgBYYrK89_coT-uPJHCfs7F_Bz/view?usp=sharing', '_blank');
  }

document.addEventListener("DOMContentLoaded", function () {
  const selectedWorksItems = document.querySelectorAll(".selected-works-item");
  const projectPages = ['project1.html', 'project2.html', 'project3.html', 'project4.html', 'project5.html', 'project6.html'];

  selectedWorksItems.forEach((item, index) => {
    const h3Element = item.querySelector('h3');
    const imageElement = item.querySelector('.work-image');

    // Add a click event listener to the h3 element
    h3Element.addEventListener('click', function () {
      navigateToProjectPage(index);
    });

    // Add a click event listener to the image element
    imageElement.addEventListener('click', function () {
      navigateToProjectPage(index);
    });
  });

  function navigateToProjectPage(index) {
    // Redirect to the corresponding project page based on the index
    if (index < projectPages.length) {
      window.location.href = projectPages[index];
    }
  }

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