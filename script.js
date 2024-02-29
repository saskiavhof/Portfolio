function openResume() {
    window.open('https://drive.google.com/file/d/1SbEmVcUEFDUXaDV1_F9LDMC2J79MIx8O/view?usp=sharing', '_blank');
  }

document.addEventListener("DOMContentLoaded", function () {
  const selectedWorksItems = document.querySelectorAll(".selected-works-item");
  const projectPages = ['project1.html', 'project2.html', 'project3.html', 'project4.html', 'project5.html', 'project6.html'];

  selectedWorksItems.forEach((item, index) => {
    const h2Element = item.querySelector('h2');
    const imageElement = item.querySelector('.work-image');

    h2Element.addEventListener('click', function () {
      navigateToProjectPage(index);
    });

    imageElement.addEventListener('click', function () {
      navigateToProjectPage(index);
    });
  });

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

function copyToClipboard(text) {
  const dummyTextarea = document.createElement('textarea');
  dummyTextarea.value = text;
  document.body.appendChild(dummyTextarea);
  dummyTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(dummyTextarea);
  alert('Email copied to clipboard!');
}