// Works Page Menu Toggle Script
// Toggles visibility of works sections based on menu button clicks

document.addEventListener('DOMContentLoaded', function () {
    // Menu button labels and corresponding section IDs
    const menuConfig = [
        { label: 'Branding', sectionId: 'branding-pdf-list' },
        { label: 'Brand Collaboration', sectionId: 'brand-collaboration-section' },
        { label: 'Social Media', sectionId: 'social-media-section' },
        { label: 'Advertising', sectionId: 'advertising-section' }
    ];

    // Get all menu buttons
    const menuButtons = document.querySelectorAll('.works-side-menu .works-menu-btn');

    // Map button text to section ID
    const sectionIds = menuConfig.map(cfg => cfg.sectionId);

    // Ensure all sections exist (for now, only Branding exists)
    // If missing, create placeholder sections (hidden by default)
    sectionIds.forEach(id => {
        if (!document.getElementById(id)) {
            const section = document.createElement('section');
            section.className = 'intro-section';
            section.id = id;
            section.style.display = 'none';
            section.innerHTML = `<h2 style="font-family: 'DIN Condensed', sans-serif;">${id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (Coming Soon)</h2>`;
            document.querySelector('main.main-content').appendChild(section);
        }
    });

    // Show Branding section by default
    sections.forEach((section, idx) => {
        if (idx === 0) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });

    // Add click listeners to menu buttons
    menuButtons.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            sections.forEach((section, sidx) => {
                section.style.display = (idx === sidx) ? '' : 'none';
            });
            menuButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    hideAllSections();
    if (document.getElementById('branding-pdf-list')) {
        document.getElementById('branding-pdf-list').style.display = 'block';
        if (menuButtons[0]) menuButtons[0].classList.add('active');
    }
});
