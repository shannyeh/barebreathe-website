// Works Page Menu Toggle Script
// Toggles visibility of works sections based on menu button clicks

document.addEventListener('DOMContentLoaded', function () {
    // 對應新六大分類
    const sectionIds = [
        'section-advertising',
        'section-tech',
        'section-merchandise',
        'section-newdining',
        'section-hospitality',
        'section-artips',
        'section-luxury'
    ];
    const menuButtons = document.querySelectorAll('.works-side-menu .works-menu-btn');
    // 預設顯示第一個 section
    sectionIds.forEach((id, idx) => {
        const section = document.getElementById(id);
        if (section) section.style.display = (idx === 0) ? '' : 'none';
    });
    // 點擊切換 section
    menuButtons.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            sectionIds.forEach((id, sidx) => {
                const section = document.getElementById(id);
                if (section) section.style.display = (idx === sidx) ? '' : 'none';
            });
            menuButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
