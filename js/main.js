
const cursorDot = document.getElementById('cursor-dot');
const cursorWrapper = document.getElementById('cursor-wrapper');

document.addEventListener('mousemove', (e) => {
  cursorWrapper.style.left = `${e.clientX}px`;
  cursorWrapper.style.top = `${e.clientY}px`;
});

// Add hover effect for images and anchor tags
document.querySelectorAll('a, img, .gallery-grid, .gallery-single, button, i, h1, h2, h3, p, .img-overlay').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursorDot.classList.add('hover');
    });
  
    element.addEventListener('mouseleave', () => {
      cursorDot.classList.remove('hover');
    });
  });