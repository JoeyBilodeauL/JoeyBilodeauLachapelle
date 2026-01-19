// Toggle language, set CV link and render projects

// Make projects globally accessible for project-detail page
window.projectsData = [
    {
        id: 'p1',
        title_en: 'Rover simulation',
        title_fr: 'Simulation du Rover',
        origin_en: 'Rover - Robotic UDES',
        origin_fr: 'Rover - Robotique UDES',
        desc_en: "3D simulation environnement for testing sensor implementation and algorithm on a rover.",
        desc_fr: "Environnement de simulation 3D pour tester l'implémentaiton de capteurs et d'algorithme sur un rover",
        full_desc_en: `This project originated from our technical team's desire to integrate automation functionalities into a rover.
I was therefore assigned the task of developing a simulation environment to test these functionalities. As part of this project, I:

                   • Modeled the rover using the URDF format
                   • Developed a simulation environment within the Ignition software
                   • Developed a Python script to interface Ignition with ROS
                   
This project allowed me to become familiar with automation and autonomous robotics concepts and to validate them in simulation, particularly through the implementation of an autonomous navigation method based on SLAM.`,

        full_desc_fr: `Ce projet vient d'une volonté de notre groupe technique d'implanter sur notre rover des fonctionnalités d'automatisation.
J'ai donc été confié la tâche de développer un environnement qui nous permettrait d'effecter des tests. Pour ce projet, j'ai dû :

                   • Modéliser le modèle du rover en URDF
                   • Développer un environnement de simulation au sein du logiciel Ignition
                   • Développer un fichier Python permettant de faire le pont entre Ignition et ROS
                   
Ce projet m'a permis de me familiariser avec des concepts d'automatisation et de les tester en simulation, notamment la méthode de navigation automatique SLAM.                   
                   `,
        dates: '2025 — 2025',
        images: ['assets/SimuSLAM.gif'],
        link: 'project.html?id=1'
    },
    {
        id: 'p2',
        title_en: 'H-Bridge for battery charging',
        title_fr: 'Pont en H pour rechargement de batterie',
        origin_en: 'School project',
        origin_fr: 'Project scolaire',
        desc_en: 'H-bridge and SEPIC converter enabling the conversion of mechanical energy from a cyclist into electrical energy. ',
        desc_fr: `Pont en H et SEPIC permettant de convertir de l'énergie mécanique d'un cyclise en énergie électrique.`,
        full_desc_en: `For our third semester, the project we were assigned was to design a PCB for an H-Bridge and another to step down voltage in order to power a load.
The bonus challenge was to recharge a battery, and my team and I decided to take on this challenge. During this project, I was involved in :        

                  • Designing the schematic and PCB of an H-bridge using Altium Designer
                  • Assembling the circuit and performing simulations using MATLAB and Simulink
                  • Programming a PID controller on a microcontroller to control the SEPIC PWM and ensure battery charging in constant current (CC)
                    and constant voltage (CV) modes
                  • Designing measurement and safety circuits
                  
Charging the battery was not a simple task. However, by achieving our objective, my team and I stood out as the first team in five years to successfully recharge the battery.`,

        full_desc_fr: `Pour notre troisième session, le projet que nous avions à faire était conçevoir un PCB pour conduire un moteur et un autre pour abaisser la tension afin d'alimenter une charge.
Le défi bonus était de recharger une batterie et mon équipe et moi avions décider de remonter le défi. Lors de ce projet, j'ai été emmener à :

                  • Conçevoir un schéma et un PCB d'un pont en H à l'aide d'Altium Designer
                  • Faire le montage du circuit et la simulation à l'aide du logiciel Matlab et Simulink
                  • Programmation d'un PID sur microcontrôlleur afin de contrôler le PWM du SEPIC et assurer une recharge de la batterie en courant 
                    constant (CC) et en tension constante (CV)
                  • Conçevoir des circuits de mesure et de sécurité 

Recharger la batterie n'avait pas été une tâche simple à faire. Toutefois, en arrivant à notre objectif, mon équipe et moi nous somme démarqué en ayant été la première équipe en 5 ans à arriver à recharger la batterie.`,
        dates: '2025 — 2025',
        images: ['assets/H-Bridge.png', 'assets/H-BridgeIRL.jpg'],
        link: 'project.html?id=2'
    },
    {
        id: 'p3',
        title_en: 'Video Game controller',
        title_fr: 'Manette de jeux vidéo',
        origin_en: 'School project',
        origin_fr: 'Project scolaire',
        desc_en: 'Video game controller and TankUS game.',
        desc_fr: 'Manette de jeu vidéo et jeux vidéo TankUS.',
        full_desc_en: `During the second semester, a team composed of electrical engineering and computer engineering students was tasked with developing a video game controller and a video game, respectively.
For this project, I designed the PCB of the controller and assisted with the game programming. The skills I developed include:

                  • Designing a schematic and a controller PCB using Altium Designer
                  • Enabling communication between the controller and the computer using the JSON format
                  • Soldering various electronic components onto the PCB

In this project, multidisciplinary collaboration was the greatest challenge. By successfully combining these two engineering disciplines, we were able to design a complete and enjoyable product.`,

        full_desc_fr: `Lors de la deuxième session, une équipe formée d'étant en génie électrique et génie informatique avait pour but de faire respectivement une manette de jeux vidéo et un jeu vidéo
Pour ce projet, j'ai conçu le PCB d'une manette et j'ai aidé dans la programmation du jeu. Les compétence que j'ai développé sont :

                  • Conçevoir un schéma et un PCB d'une manette à l'aide d'Altium Designer
                  • À l'aide du format JSON, permettre la communication entre la manette et l'ordinateur 
                  • Faire les soudures de différents componsants électriques sur le PCB

Lors de ce projet, le travail multidisciplinaire fut le plus grand défi. C'est en arrivant à allier ces deux facettes du génie que nous avons réussi à conçevoir un produit complet et amusant.
                  `,
        dates: '2025 — 2025',
        images: ['assets/Manette.jpg','assets/Manette.gif'],
        link: 'project.html?id=3'
    },
    {
        id: 'p4',
        title_en: 'Smart Pill Dispenser',
        title_fr: 'Pilulier intelligent',
        origin_en: 'School project',
        origin_fr: 'Project scolaire',
        desc_en: 'Smart pillbox designed to assist healthcare staff by enabling the simultaneous monitoring of medication intake for multiple patients.',
        desc_fr: 'Pilulier intelligent conçu pour assister le personnel soignant en permettant le suivi simultané de la prise de médicaments chez plusieurs patients.',
        full_desc_en: `As part of a school project, we were tasked with prototyping a robot designed to help humanity. This project was presented at the Expo mégaGÉNIALE 2024 at the University of Sherbrooke.
In this project, I was particularly involved in the development of the software. More specifically, I:

                 • Implemented the class representing the patients
                 • Developed the robot's movement algorithm
                 • Developed the algorithm for managing medication intake
                 • Integrated various sensors, such as a sonar, an RFID scanner, servomotors, and more
                            
This project gave me the opportunity to refine my knowledge in embedded programming, particularly in C++ and PlatformIO.`,

        full_desc_fr: `Dans le cadre d'un projet scolaire, nous avions la mission de faire le prototype d'un robot devant aider l'humanité. Ce projet fut présenté à l'Expo mégaGÉNIALE en 2024, à l'Université de Sherbrooke.
Dans ce projet, je me suis particulièrement impliqué dans le développement du code informatique. Plus précisemment, jai :

                  • Implanter la classe servant à représenter les patients
                  • Développer l'algorithme de déplacement du robot
                  • Développer l'algorithme de gestion de la prise de médicamments
                  • Implémanter divers capteurs, tel qu'un sonar, un scanneur RFID, des servomoteurs, etc.

Ce projet a été pour moi l'occasion de rafiner mes connaissances en programmation embarqué, plus précisemment en C++ et plateformeIO.`,
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
            subtitle: "Hi, I am an electrical engineer student pursuing my bachelor at the Université of Sherbrooke.\n Welcome to my portfolio.",
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
            subtitle: "Bonjour, je suis un étdudiant en génie électrique et je poursuis mon baccalauréat à l'Université de Sherbrooke.\n Bienvenue sur mon portfolio.",
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
        projectsGrid.innerHTML = projects.map((p, index) => {
            const title = isFr ? p.title_fr : p.title_en;
            const origin = isFr ? p.origin_fr : p.origin_en;
            const desc = isFr ? p.desc_fr : p.desc_en;
            const images = p.images || [p.img]; // fallback for projects with single img
            const hasMultiple = images.length > 1;
            
            // use full width with horizontal layout
            return `
                <div class="col-12">
                    <article class="project-card project-card-horizontal">
                        <div class="date-badge">${p.dates}</div>
                        <div class="project-card-content">
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
                                <a class="btn btn-sm btn-outline-primary more-btn" href="project.html?id=${index}" aria-label="More about ${title}">${t.moreBtn}</a>
                            </div>
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