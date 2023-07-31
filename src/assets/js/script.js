// Get the header element
const header = document.querySelector('.header-area');

// Get the initial offset of the header from the top of the document
const headerOffsetTop = header.offsetTop;

// Function to handle the scroll event
function handleScroll() {
  // Get the current vertical scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Determine if the scroll position is greater than or equal to the initial offset of the header
  if (scrollTop >= headerOffsetTop) {
    // If it is, add a class to fix the header at the top of the viewport
    header.classList.add('header-fixed');
  } else {
    // If it's not, remove the class to revert to the original position
    header.classList.remove('header-fixed');
  }
}

// Attach the handleScroll function to the 'scroll' event
window.addEventListener('scroll', handleScroll);
