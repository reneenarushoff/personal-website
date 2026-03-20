document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("menu[role='tablist']").forEach(tabList => {
    const tabButtons = tabList.querySelectorAll("[role='tab']");

    tabButtons.forEach(tabButton => {
      tabButton.addEventListener("click", e => {
        e.preventDefault();

        const container = tabList.parentElement;
        const targetId = tabButton.getAttribute("aria-controls");

        tabButtons.forEach(btn =>
          btn.setAttribute("aria-selected", "false")
        );

        tabButton.setAttribute("aria-selected", "true");
        tabButton.focus();

        container
          .querySelectorAll("[role='tabpanel']")
          .forEach(panel => panel.hidden = true);

        container
          .querySelector(`#${targetId}`)
          .hidden = false;
      });
    });
  });
});


// Function to toggle the post index visibility
function toggleIndex() {
  const indexContent = document.getElementById('post-index');
  const isVisible = indexContent.style.display !== 'none';
            
  if (isVisible) {
    indexContent.style.display = 'none';
  } else {
    indexContent.style.display = 'block';
    }
}

function handlePostSelection() {
  const dropdown = document.getElementById('post-select');
  const selectedValue = dropdown.value;

  if (selectedValue) {
    const targetPost = document.getElementById(selectedValue);

    if (targetPost) {
      targetPost.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
}
         
// Back to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
     behavior: 'smooth'
  });
}
         
// Show/hide back to top button based on scroll position
function toggleBackToTopButton() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
         
// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('post-select');
  if (dropdown) {
    dropdown.addEventListener('change', handlePostSelection);
  }
            
// Add scroll event listener for back to top button
window.addEventListener('scroll', toggleBackToTopButton);
});