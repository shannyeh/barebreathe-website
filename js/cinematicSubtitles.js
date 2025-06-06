// cinematicSubtitles.js
// 動態電影字幕跑馬燈效果

console.log('cinematicSubtitles.js loaded');

const cinematicLines = [];

let cinematicSubtitleActive = false;

function showCinematicSubtitles() {
  console.log('showCinematicSubtitles called');
  if (cinematicSubtitleActive) return; // 防止重複初始化
  cinematicSubtitleActive = true;

  // 隱藏 hero 區域
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.style.opacity = '0';
    heroSection.style.pointerEvents = 'none';
  }

  // 建立字幕容器
  let subtitleContainer = document.getElementById('cinematic-subtitles');
  if (!subtitleContainer) {
    subtitleContainer = document.createElement('div');
    subtitleContainer.id = 'cinematic-subtitles';
    document.body.appendChild(subtitleContainer);
  }
  subtitleContainer.innerHTML = '';
  subtitleContainer.style.display = 'flex';
  subtitleContainer.classList.remove('fade-out');

  // 建立按鈕區域（垂直排列）
  let btnGroup = document.createElement('div');
  btnGroup.className = 'cinematic-btn-group';
  btnGroup.style.flexDirection = 'column'; // 垂直排列
  btnGroup.style.gap = '1.2em';
  subtitleContainer.appendChild(btnGroup);

  // About 按鈕
  let aboutBtn = document.createElement('button');
  aboutBtn.type = 'button';
  aboutBtn.className = 'cinematic-btn about-btn';
  aboutBtn.textContent = 'About';
  aboutBtn.onclick = function() { 
    console.log('About clicked');
    window.location.href = 'intro.html'; 
  };
  btnGroup.appendChild(aboutBtn);

  // Portfolio 按鈕
  let portfolioBtn = document.createElement('button');
  portfolioBtn.type = 'button';
  portfolioBtn.className = 'cinematic-btn portfolio-btn';
  portfolioBtn.textContent = 'Portfolio';
  portfolioBtn.onclick = function() { 
    console.log('Portfolio clicked');
    window.location.href = 'works.html'; 
  };
  btnGroup.appendChild(portfolioBtn);

  // My Playground 按鈕
  let playgroundBtn = document.createElement('button');
  playgroundBtn.type = 'button';
  playgroundBtn.className = 'cinematic-btn playground-btn';
  playgroundBtn.textContent = 'My Playground';
  playgroundBtn.onclick = function() { 
    console.log('Playground clicked');
    window.location.href = 'projects.html'; 
  };
  btnGroup.appendChild(playgroundBtn);

  // 保證所有動態按鈕 hover 狀態有底線
  [aboutBtn, portfolioBtn, playgroundBtn].forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      btn.style.textDecoration = 'underline';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.textDecoration = '';
    });
    btn.addEventListener('focus', function() {
      btn.style.textDecoration = 'underline';
    });
    btn.addEventListener('blur', function() {
      btn.style.textDecoration = '';
    });
  });

}

// 事件綁定
window.addEventListener('DOMContentLoaded', function () {
  const symbolBtn = document.querySelector('.hero-symbol-btn');
  if (symbolBtn) {
    symbolBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showCinematicSubtitles();
    });
  }
});

// 支援 ESC 跳過字幕
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const subtitleContainer = document.getElementById('cinematic-subtitles');
    if (subtitleContainer) subtitleContainer.style.display = 'none';
    // 可選：恢復 hero 區域或進入主頁內容
  }
});
