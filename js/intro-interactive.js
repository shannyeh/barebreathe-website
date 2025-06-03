function showContent(contentIdToShow, clickedButton) {
  // List of all content section IDs that can be toggled
  const allContentIds = [
    'hero-content',
    'whoami-content',
    'skills-content',
    'myworks-content',
    'career-history-content',
    'educational-background-content'
  ];

  // Hide all content sections first
  allContentIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });

  // Show the selected content section
  const selectedContent = document.getElementById(contentIdToShow);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }

  // Update active button state
  const buttons = document.querySelectorAll('.intro-btn-group .intro-btn');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}
