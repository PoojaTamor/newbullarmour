
  const navLinks = document.querySelectorAll('.navrow .nav-link');

navLinks.forEach(link => {
    // Add a click event listener to each link
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Handle active section on scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 50; // Add some offset for better accuracy

    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// --------------------------------------------------



  const wrappers = document.querySelectorAll('.more-wrapper');
const buttons = document.querySelectorAll('.readmore-btn');

buttons.forEach((btn, i) => {
  const wrapper = wrappers[i];  // same index = same box

  btn.addEventListener('click', () => {
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = null;
      btn.textContent = "Read More";
    } else {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      btn.textContent = "Read Less";
    }
  });
});
