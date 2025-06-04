function showContent(contentIdToShow, clickedButton) {
  // 新增：定義對應網址片段
  const urlMap = {
    'whoami-content': '/intro/WHOAMI',
    'skills-content': '/intro/SKILLS',
    'myworks-content': '/intro/MYWORKS',
    'career-history-content': '/intro/CAREER',
    'educational-background-content': '/intro/EDUCATION',
    'hero-content': '/intro'
  };

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
    // 新增：更新網址（不重新整理頁面）
    const newUrl = urlMap[contentIdToShow] || '/intro';
    if (window.location.pathname + window.location.hash !== newUrl) {
      window.history.pushState({section: contentIdToShow}, '', newUrl);
    }
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
