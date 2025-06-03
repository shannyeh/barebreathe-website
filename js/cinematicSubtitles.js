// cinematicSubtitles.js
// 動態電影字幕跑馬燈效果

const cinematicLines = [];

let cinematicSubtitleActive = false;

function showCinematicSubtitles() {
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

  // About Me 按鈕
  let aboutBtn = document.createElement('button');
  aboutBtn.type = 'button';
  aboutBtn.className = 'cinematic-btn about-btn';
  aboutBtn.textContent = 'About Me';
  btnGroup.appendChild(aboutBtn);

  // Portfolio 按鈕
  let portfolioBtn = document.createElement('button');
  portfolioBtn.type = 'button';
  portfolioBtn.className = 'cinematic-btn portfolio-btn';
  portfolioBtn.textContent = 'Portfolio';
  btnGroup.appendChild(portfolioBtn);

  // My Playground 按鈕
  let playgroundBtn = document.createElement('button');
  playgroundBtn.type = 'button';
  playgroundBtn.className = 'cinematic-btn playground-btn';
  playgroundBtn.textContent = 'My Playground';
  btnGroup.appendChild(playgroundBtn);

  // 預留事件綁定（可於未來添加）
  // aboutBtn.onclick = ...
  // portfolioBtn.onclick = ...
  // playgroundBtn.onclick = ...

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
