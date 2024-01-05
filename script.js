const sections = document.querySelectorAll("section");
const animate = document.querySelector(".animate");

window.addEventListener('scroll', function() {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animation");
    } else {
      sec.classList.remove("show-animation");
    }
  });
});
