// Project detail page logic

document.addEventListener('DOMContentLoaded', () => {
    // Get the project index from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectIndex = parseInt(urlParams.get('id')) || 0;

    // Get projects data - should be loaded by script.js
    const projects = window.projectsData;
    const currentLang = localStorage.getItem('site_lang') || 'en';

    if (!projects || projectIndex >= projects.length || projectIndex < 0) {
        document.body.innerHTML = '<div class="container py-5"><p>Project not found</p></div>';
        return;
    }

    const project = projects[projectIndex];
    const isFr = currentLang === 'fr';

    // Update page title
    const title = isFr ? project.title_fr : project.title_en;
    document.title = title;

    // Update back button text
    const backBtn = document.getElementById('back-btn');
    backBtn.textContent = isFr ? '← Retour' : '← Back';

    // Update description title
    const descTitle = document.getElementById('detail-desc-title');
    descTitle.textContent = isFr ? 'Description' : 'Description';

    // Update project details
    document.getElementById('detail-title').textContent = title;
    document.getElementById('detail-origin').textContent = isFr ? project.origin_fr : project.origin_en;
    document.getElementById('detail-dates').textContent = project.dates;

    // Get full description (use desc as fallback if full_desc is not available)
    const fullDesc = isFr ? (project.full_desc_fr || project.desc_fr) : (project.full_desc_en || project.desc_en);
    document.getElementById('detail-full-desc').textContent = fullDesc;

    // Setup image carousel
    const images = project.images || [];
    let currentImageIndex = 0;

    const imgElement = document.getElementById('detail-img');
    const prevBtn = document.getElementById('detail-img-prev');
    const nextBtn = document.getElementById('detail-img-next');
    const counterElement = document.getElementById('detail-counter');
    const counterCurrent = document.getElementById('detail-counter-current');
    const counterTotal = document.getElementById('detail-counter-total');

    // Show/hide carousel controls based on number of images
    if (images.length > 1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        counterElement.style.display = 'block';
        counterTotal.textContent = images.length;

        // Add carousel event listeners
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        });
    }

    function updateImage() {
        imgElement.src = images[currentImageIndex];
        counterCurrent.textContent = currentImageIndex + 1;
    }

    // Set initial image
    if (images.length > 0) {
        imgElement.src = images[0];
    }

    // Listen for language changes
    const langBtn = document.getElementById('lang-btn');
    langBtn.addEventListener('click', () => {
        location.reload();
    });

    // Handle CV link language
    const cvLink = document.getElementById('cv-link');
    const texts = {
        en: {
            cvName: 'Download CV',
            cvFile: 'assets/CV2026_EN.pdf',
            cvDownloadName: 'CV2026_EN.pdf'
        },
        fr: {
            cvName: 'Télécharger CV',
            cvFile: 'assets/CV2026_FR.pdf',
            cvDownloadName: 'CV2026_FR.pdf'
        }
    };

    const t = texts[currentLang] || texts.en;
    cvLink.textContent = t.cvName;
    cvLink.href = t.cvFile;
    cvLink.setAttribute('download', t.cvDownloadName);

    // Set language button text
    langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
    document.documentElement.lang = currentLang;

    // Reveal obsidian bottom bar when it scrolls into view
    const obsidianBar = document.getElementById('obsidianBar');
    if (obsidianBar && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    obsidianBar.classList.add('visible');
                    observer.unobserve(obsidianBar);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.05 });
        obs.observe(obsidianBar);
    } else if (obsidianBar) {
        obsidianBar.classList.add('visible');
    }
});
