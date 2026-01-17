// Toggle language, set CV link and render projects

// Make projects globally accessible for project-detail page
window.projectsData = [
    {
        id: 'p1',
        title_en: 'Glowstick detector',
        title_fr: 'Détecteur de glowstick',
        origin_en: 'Rover - Robotic UDES',
        origin_fr: 'Rover - Robotique UDES',
        desc_en: 'Short description of project one.',
        desc_fr: 'Courte description du projet un.',
        full_desc_en: 'Short description of project one.',
        full_desc_fr: 'Courte description du projet un.',
        dates: '2025 — 2025',
        images: ['assets/Picture.JPG'],
        link: 'project.html?id=0'
    },
    {
        id: 'p2',
        title_en: 'Rover simulation',
        title_fr: 'Simulation du Rover',
        origin_en: 'Rover - Robotic UDES',
        origin_fr: 'Rover - Robotique UDES',
        desc_en: 'Short description of project two.',
        desc_fr: 'Courte description du projet deux.',
        full_desc_en: 'Short description of project two.',
        full_desc_fr: 'Courte description du projet deux.',
        dates: '2025 — 2025',
        images: ['assets/SimuSLAM.gif'],
        link: 'project.html?id=1'
    },
    {
        id: 'p3',
        title_en: 'H-Bridge for battery charging',
        title_fr: 'Pont en H pour rechargement de batterie',
        origin_en: 'School project',
        origin_fr: 'Project scolaire',
        desc_en: 'Short description of project three.',
        desc_fr: 'Courte description du projet trois.',
        full_desc_en: 'Short description of project three.',
        full_desc_fr: 'Courte description du projet trois.',
        dates: '2025 — 2025',
        images: ['assets/H-Bridge.png', 'assets/H-BridgeIRL.jpg'],
        link: 'project.html?id=2'
    },
    {
        id: 'p4',
        title_en: 'Video Game controller',
        title_fr: 'Manette de jeux vidéo',
        origin_en: 'School project',
        origin_fr: 'Project scolaire',
        desc_en: 'Short description of project four.',
        desc_fr: 'Courte description du projet quatre.',
        full_desc_en: 'Short description of project four.',
        full_desc_fr: 'Courte description du projet quatre.',
        dates: '2025 — 2025',
        images: ['assets/Manette.jpg','assets/Manette.gif'],
        link: 'project.html?id=3'
    },
    {
        id: 'p5',
        title_en: 'Smart Pill Dispenser',
        title_fr: 'Pillulier intelligent',
        origin_en: 'School project',
        origin_fr: 'Project scolaire',
        desc_en: 'Short description of project five.',
        desc_fr: 'Courte description du projet cinq.',
        full_desc_en: 'Short description of project five.',
        full_desc_fr: 'Courte description du projet cinq.',
        dates: '2024 — 2024',
        images: ['assets/PharmaBob.jpg','assets/PharmaBob.gif'],
        link: 'project.html?id=4'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const LANG_KEY = 'site_lang';
    const btn = document.getElementById('lang-btn');
    const cvLink = document.getElementById('cv-link');
    const htmlEl = document.documentElement;
    const linkedin = document.getElementById('linkedin-link');
    const brandEl = document.getElementById('brand');
    const subtitleEl = document.getElementById('intro-subtitle');
    const projectsGrid = document.getElementById('projects-grid');

    const texts = {
        en: {
            cvName: 'Download CV',
            cvFile: 'assets/CV2026_EN.pdf',
            cvDownloadName: 'CV2026_EN.pdf',
            langBtn: 'FR',
            linkedinText: 'LinkedIn',
            pageP: 'My portfolio',
            subtitle: 'Electrical engineering student - Computer and robotic - Gamer.',
            htmlLang: 'en',
            moreBtn: 'More'
        },
        fr: {
            cvName: 'Télécharger CV',
            cvFile: 'assets/CV2026_FR.pdf',
            cvDownloadName: 'CV2026_FR.pdf',
            langBtn: 'EN',
            linkedinText: 'LinkedIn',
            pageP: 'Mon protfolio',
            subtitle: 'Étudiant en génie électrique - Ordinateur et robotique - Gym bro',
            htmlLang: 'fr',
            moreBtn: 'Plus'
        }
    };

    // projects array (easy to extend). Each project provides en/fr title + desc + origin, dates, img, link.
    const projects = window.projectsData;

    function renderProjects(lang = 'en') {
        if (!projectsGrid) return;
        const isFr = lang === 'fr';
        const t = texts[lang] || texts.en;
        projectsGrid.innerHTML = projects.map(p => {
            const title = isFr ? p.title_fr : p.title_en;
            const origin = isFr ? p.origin_fr : p.origin_en;
            const desc = isFr ? p.desc_fr : p.desc_en;
            const images = p.images || [p.img]; // fallback for projects with single img
            const hasMultiple = images.length > 1;
            
            // use Bootstrap columns: 3 columns on md and up
            return `
                <div class="col-12 col-md-4">
                    <article class="project-card">
                        <div class="date-badge">${p.dates}</div>
                        <div class="card-img-container">
                            <img class="card-img" src="${images[0]}" alt="${title}" data-project-id="${p.id}">
                            ${hasMultiple ? `
                                <button class="carousel-arrow carousel-prev" aria-label="Previous image" data-project-id="${p.id}">‹</button>
                                <button class="carousel-arrow carousel-next" aria-label="Next image" data-project-id="${p.id}">›</button>
                                <div class="carousel-counter"><span class="counter-current" data-project-id="${p.id}">1</span> / ${images.length}</div>
                            ` : ''}
                        </div>
                        <div class="card-body">
                            <div class="card-title">${title}</div>
                            <div class="card-origin">${origin}</div>
                            <div class="card-desc">${desc}</div>
                            <a class="btn btn-sm btn-outline-primary more-btn" href="${p.link}" aria-label="More about ${title}">${t.moreBtn}</a>
                        </div>
                    </article>
                </div>
            `;
        }).join('');
        
        // attach carousel event listeners
        attachCarouselListeners();
    }
    
    function attachCarouselListeners() {
        // track current image index for each project
        const carouselState = {};
        
        // initialize state for each project
        projects.forEach(p => {
            carouselState[p.id] = 0;
        });
        
        // handle prev/next button clicks
        projectsGrid.addEventListener('click', (e) => {
            const prevBtn = e.target.closest('.carousel-prev');
            const nextBtn = e.target.closest('.carousel-next');
            
            if (prevBtn || nextBtn) {
                const projectId = (prevBtn || nextBtn).dataset.projectId;
                const project = projects.find(p => p.id === projectId);
                const images = project.images || [project.img];
                
                if (prevBtn) {
                    carouselState[projectId] = (carouselState[projectId] - 1 + images.length) % images.length;
                } else {
                    carouselState[projectId] = (carouselState[projectId] + 1) % images.length;
                }
                
                // update image and counter
                const img = projectsGrid.querySelector(`img[data-project-id="${projectId}"]`);
                const counter = projectsGrid.querySelector(`.counter-current[data-project-id="${projectId}"]`);
                if (img) img.src = images[carouselState[projectId]];
                if (counter) counter.textContent = carouselState[projectId] + 1;
            }
        });
    }

    function setLang(lang) {
        const t = texts[lang] || texts.en;
        cvLink.textContent = t.cvName;
        cvLink.href = t.cvFile;
        cvLink.setAttribute('download', t.cvDownloadName);
        // show the current language on the button ('EN' for English, 'FR' for French)
        btn.textContent = (lang === 'en') ? 'EN' : 'FR';
        btn.setAttribute('aria-pressed', String(lang === 'fr'));
        htmlEl.lang = t.htmlLang;

        if (brandEl) brandEl.textContent = t.pageP || '';
        if (subtitleEl) subtitleEl.textContent = t.subtitle || '';

        if (linkedin) {
            linkedin.setAttribute('aria-label', t.linkedinText);
            const vis = linkedin.querySelector('.visually-hidden');
            if (vis) vis.textContent = t.linkedinText;
        }

        localStorage.setItem(LANG_KEY, lang);

        // re-render projects (if you use localization for them)
        if (typeof renderProjects === 'function') renderProjects(lang);
    }

    // initial language: localStorage -> browser -> en
    const stored = localStorage.getItem(LANG_KEY);
    const navLang = navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en';
    const initial = stored || navLang || 'en';
    setLang(initial);

    btn.addEventListener('click', () => {
        const current = localStorage.getItem(LANG_KEY) || initial;
        const next = current === 'en' ? 'fr' : 'en';
        setLang(next);
    });

    // Reveal obsidian bottom bar when it scrolls into view (end of page)
    const obsidianBar = document.getElementById('obsidianBar');
    if (obsidianBar && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    obsidianBar.classList.add('visible');
                    observer.unobserve(obsidianBar); // keep it visible once shown
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.05 });
        obs.observe(obsidianBar);
    } else if (obsidianBar) {
        // fallback: show if IntersectionObserver not supported
        obsidianBar.classList.add('visible');
    }
});