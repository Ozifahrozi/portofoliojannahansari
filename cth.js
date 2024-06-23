document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
      event.preventDefault();

      const targetId = navLink.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        smoothScroll(targetElement);
      }
    });
  });

  function smoothScroll(targetElement) {
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;

    const startTime = performance.now();

    function scrollAnimation(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / 1000, 1);

      window.scrollTo(0, startPosition + progress * (targetPosition - startPosition));

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    requestAnimationFrame(scrollAnimation);
  }

  setTimeout(function() {
    document.getElementById("profile-img").style.opacity = "1";
    document.getElementById("about-title").style.opacity = "1";
    document.getElementById("about-text").style.opacity = "1";
    document.getElementById("detail-text").style.opacity = "1";
  }, 500);
});
