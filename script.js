document.addEventListener('DOMContentLoaded', () => {
    // Update year dynamically
    const yearElement = document.getElementById('hero-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItemsWithDropdown = document.querySelectorAll('.nav-links .has-dropdown');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    navItemsWithDropdown.forEach(item => {
        const trigger = item.querySelector(':scope > a');

        if (!trigger) return;

        trigger.addEventListener('click', event => {
            if (window.innerWidth > 860) return;

            event.preventDefault();

            if (item.classList.contains('open')) {
                item.classList.remove('open');
                return;
            }

            navItemsWithDropdown.forEach(otherItem => otherItem.classList.remove('open'));
            item.classList.add('open');
        });
    });

    document.addEventListener('click', event => {
        if (!event.target.closest('.has-dropdown')) {
            navItemsWithDropdown.forEach(item => item.classList.remove('open'));
        }

        if (
            navLinks &&
            navLinks.classList.contains('active') &&
            !event.target.closest('.main-nav') &&
            !event.target.closest('#menu-toggle')
        ) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const isDropdownTrigger = link.nextElementSibling && link.nextElementSibling.classList.contains('nav-dropdown');

            if (window.innerWidth <= 860 && navLinks && !isDropdownTrigger) {
                navLinks.classList.remove('active');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevButton = document.getElementById('hero-prev');
    const nextButton = document.getElementById('hero-next');
    let activeSlide = 0;
    let sliderTimer = null;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        activeSlide = (index + slides.length) % slides.length;
        slides[activeSlide].classList.add('active');

        if (dots[activeSlide]) {
            dots[activeSlide].classList.add('active');
        }
    }

    function startSlider() {
        stopSlider();
        sliderTimer = window.setInterval(() => {
            showSlide(activeSlide + 1);
        }, 5500);
    }

    function stopSlider() {
        if (sliderTimer) {
            window.clearInterval(sliderTimer);
        }
    }

    if (slides.length > 0) {
        showSlide(0);
        startSlider();

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                showSlide(activeSlide - 1);
                startSlider();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                showSlide(activeSlide + 1);
                startSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                startSlider();
            });
        });
    }

    const serviceDetails = {
        'automatic-main-gates': {
            title: 'Gate Motor Automation',
            description: 'Our automatic main gates offer the right balance of security, convenience, and visual appeal for residential estates, commercial facilities, and industrial compounds. We build and install sliding and swing systems with strong materials, dependable control systems, and practical safety features.',
            features: [
                'Sliding or swing gate configurations available',
                'Heavy-duty motors for residential and commercial use',
                'Smartphone app control and monitoring',
                'Multiple access methods including remotes and keypads',
                'Video intercom integration capability',
                'Automatic closing timers and schedules',
                'Emergency manual release mechanism',
                'Rust-resistant powder coating finishes'
            ],
            benefits: [
                'Professional installation by experienced technicians',
                'Quality materials from trusted manufacturers',
                'Nationwide delivery across Ghana',
                'After-sales support and maintenance'
            ],
            gallery: ['images/gate auto1.jpg', 'images/gate auto2.jpg', 'images/gate auto3.jpg']
        },
        'roller-shutters': {
            title: 'Roller Shutter Automation',
            description: 'Our roller shutter systems are designed for shops, warehouses, garages, and business fronts that need strong daily protection with smooth opening and closing performance.',
            features: ['Manual and automated shutter options', 'Heavy-duty slats and secure side guides', 'Commercial and residential shutter sizing', 'Reliable motors and control systems', 'Locking and safety sensor options', 'Clean finishes for storefronts and garages'],
            benefits: ['Practical for daily business use', 'Built for durability and security', 'Neat fabrication and fitting', 'Maintenance and support available'],
            gallery: ['images/shutter 1.jpg', 'images/shutter2.jpg', 'images/shutter3.jpg', 'images/garage door5.jpeg']
        },
        'electric-fencing': {
            title: 'Electric Fencing',
            description: 'Our electric fencing installations improve perimeter security for homes, estates, and commercial premises using clean layouts, secure mounting, and strong deterrent coverage.',
            features: ['Wall-top and perimeter line installations', 'Neat insulated bracket mounting', 'Warning and deterrent security setup', 'Coverage for residential and commercial boundaries', 'Expandable layouts for larger compounds', 'Designed for long-term outdoor use'],
            benefits: ['Strong perimeter deterrence', 'Professional installation quality', 'Proper routing and finishing', 'Site inspection and support available'],
            gallery: ['images/electric fence1.png', 'images/electric fence 2.png', 'images/electric fence 3.png', 'images/electric fence 4.png']
        },
        'security-cameras': {
            title: 'CCTV Cameras Installation',
            description: 'Our CCTV camera installation service gives homes, offices, and business facilities clearer monitoring, stronger incident review capability, and better day-to-day oversight.',
            features: ['Indoor and outdoor camera installation', 'Fixed-angle and wide-coverage setups', 'Recording and monitor integration', 'Neat cable routing and mounting', 'Coverage planning for property blind spots', 'Remote viewing support options'],
            benefits: ['Better property visibility', 'Clean and secure installation work', 'Suitable for homes and businesses', 'Support for upgrades and maintenance'],
            gallery: ['images/surveillance1.png', 'images/surveillance 2.png', 'images/surveillance 3.png', 'images/surveillance 4.png']
        },
        'garage-door-automation': {
            title: 'Remote Control Garage Door Automation',
            description: 'Our garage door automation service improves convenience and access control for residential and commercial garages with smooth motorized operation.',
            features: ['Automatic opening and closing systems', 'Remote access control options', 'Reliable motor support', 'Safety stop and control features', 'Residential and commercial applications', 'Clean mechanical fitting'],
            benefits: ['Convenient everyday use', 'Improved controlled access', 'Professional installation', 'Service support when needed'],
            gallery: ['images/garage door 1.jpg', 'images/garage door 2.jpg', 'images/garage door 3.jpg', 'images/garage door4.jpeg', 'images/garage door5.jpeg']
        },
        'access-control': {
            title: 'Access Control Systems',
            description: 'Our access control systems help you manage who enters key spaces with smarter control points for homes, offices, and managed facilities.',
            features: ['Controlled entry system setup', 'Keypad and remote access options', 'Integration with gates and doors', 'Visitor and staff access management', 'Suitable for residential and business sites', 'Expandable control points'],
            benefits: ['Better entry management', 'Improved property control', 'Flexible setup options', 'Support for future upgrades'],
            gallery: ['images/gate auto2.jpg', 'images/gate auto3.jpg', 'images/surveillance1.png', 'images/surveillance 3.png']
        },
        'glass-works': {
            title: 'Glass Works',
            description: 'Our glass works service covers partitions, shopfronts, and clean interior or exterior glass finishing that supports both modern aesthetics and practical use.',
            features: ['Office and interior partitions', 'Glass shopfront installations', 'Clean framed and fitted finishing', 'Residential and commercial applications', 'Custom sizing and fitting', 'Support for aluminum integration'],
            benefits: ['Modern clean appearance', 'Custom-fit installation', 'Professional measurement and fitting', 'Works with larger fabrication projects'],
            gallery: ['images/alum1.jpg', 'images/alum2.jpg', 'images/alum3.jpg']
        },
        'aluminum-fabrication': {
            title: 'Aluminum Fabrication',
            description: 'Our aluminum fabrication service covers windows, doors, framing, partitions, and structural finishing designed to fit each project accurately and cleanly.',
            features: ['Custom aluminum windows and doors', 'Frames, partitions, and finishing works', 'Measured fabrication for each opening', 'Suitable for homes, offices, and shops', 'Strong, neat, and durable materials', 'Integrated glass and accessory support'],
            benefits: ['Precise fabrication and fitting', 'Clean modern finishing', 'Made to project requirements', 'Reliable installation support'],
            gallery: ['images/alum1.jpg', 'images/alum2.jpg', 'images/alum3.jpg']
        }
    };

    const serviceModal = document.getElementById('service-modal');
    const serviceModalClose = document.getElementById('service-modal-close');
    const serviceModalTitle = document.getElementById('service-modal-title');
    const serviceModalDescription = document.getElementById('service-modal-description');
    const serviceModalFeatures = document.getElementById('service-modal-features');
    const serviceModalBenefits = document.getElementById('service-modal-benefits');
    const serviceModalGallery = document.getElementById('service-modal-gallery');

    function renderList(target, items) {
        if (!target) return;
        target.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }

    function openServiceModal(serviceKey) {
        const details = serviceDetails[serviceKey];
        if (!details || !serviceModal) return;

        serviceModalTitle.textContent = details.title;
        serviceModalDescription.textContent = details.description;
        renderList(serviceModalFeatures, details.features);
        renderList(serviceModalBenefits, details.benefits);
        serviceModalGallery.innerHTML = details.gallery
            .map(src => `<img src="${src}" alt="${details.title} gallery image">`)
            .join('');

        serviceModal.classList.add('active');
        serviceModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeServiceModal() {
        if (!serviceModal) return;
        serviceModal.classList.remove('active');
        serviceModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.service-detail-btn').forEach(button => {
        button.addEventListener('click', () => {
            openServiceModal(button.dataset.service);
        });
    });

    if (serviceModalClose) {
        serviceModalClose.addEventListener('click', closeServiceModal);
    }

    if (serviceModal) {
        serviceModal.addEventListener('click', event => {
            if (event.target === serviceModal) {
                closeServiceModal();
            }
        });
    }

    // Testimonials Section
    const testimonialsGrid = document.getElementById('testimonials-grid');
    const testimonials = [
        {
            name: 'John Mensah',
            service: 'Gate Automation',
            text: 'Sanzer installed our automatic gate and we are very satisfied. The work was done professionally and the gate operates smoothly. Highly recommended!',
            rating: 5
        },
        {
            name: 'Grace Owusu',
            service: 'CCTV Installation',
            text: 'The CCTV system they installed gives us clear visibility of our property. The technicians were professional and the installation was clean and neat.',
            rating: 5
        },
        {
            name: 'Kwame Boateng',
            service: 'Garage Door Automation',
            text: 'Best decision we made for our garage. The automated door works reliably and the customer service from Sanzer is excellent. Five stars!',
            rating: 5
        },
        {
            name: 'Ama Asante',
            service: 'Electric Fencing',
            text: 'Professional team, quality work, and attention to detail. Our perimeter is now secure and the installation looks great. Worth every penny.',
            rating: 5
        },
        {
            name: 'Kodwo Appiah',
            service: 'Gate Automation',
            text: 'Sanzer installed our gate motor and it is the best. They understood our needs and delivered excellent work. I recommend them to all my friends.',
            rating: 5
        },
        {
            name: 'Yaa Boateng',
            service: 'Aluminum Fabrication',
            text: 'The aluminum windows and doors they fabricated are of excellent quality. Perfect fit, clean installation, and they offer great after-sales support.',
            rating: 5
        }
    ];

    if (testimonialsGrid) {
        testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            let starsHtml = '';
            for (let i = 0; i < testimonial.rating; i++) {
                starsHtml += '<i class="fa-solid fa-star"></i>';
            }
            
            const initials = testimonial.name.split(' ').map(n => n[0]).join('');
            
            card.innerHTML = `
                <div class="testimonial-rating">
                    ${starsHtml}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${initials}</div>
                    <div class="testimonial-author-info">
                        <div class="testimonial-name">${testimonial.name}</div>
                        <div class="testimonial-service">${testimonial.service}</div>
                    </div>
                </div>
            `;
            testimonialsGrid.appendChild(card);
        });
    }

    const ghanaRegions = {
        'Ahafo': ['Goaso', 'Kenyasi', 'Hwidiem', 'Duayaw Nkwanta', 'Bechem'],
        'Ashanti': ['Kumasi', 'Obuasi', 'Ejisu', 'Mampong', 'Konongo'],
        'Bono': ['Sunyani', 'Berekum', 'Dormaa Ahenkro', 'Wenchi', 'Techiman'],
        'Bono East': ['Techiman', 'Kintampo', 'Atebubu', 'Nkoranza', 'Yeji'],
        'Central': ['Cape Coast', 'Kasoa', 'Winneba', 'Mankessim', 'Saltpond'],
        'Eastern': ['Koforidua', 'Nkawkaw', 'Akim Oda', 'Suhum', 'Mpraeso'],
        'Greater Accra': ['Accra', 'Tema', 'Madina', 'Kasoa', 'Dodowa'],
        'North East': ['Nalerigu', 'Walewale', 'Bunkpurugu', 'Chereponi', 'Yagaba'],
        'Northern': ['Tamale', 'Yendi', 'Savelugu', 'Gushegu', 'Bimbilla'],
        'Oti': ['Dambai', 'Jasikan', 'Kadjebi', 'Nkwanta', 'Kete Krachi'],
        'Savannah': ['Damongo', 'Bole', 'Sawla', 'Salaga', 'Daboya'],
        'Upper East': ['Bolgatanga', 'Navrongo', 'Bawku', 'Paga', 'Zebilla'],
        'Upper West': ['Wa', 'Lawra', 'Tumu', 'Jirapa', 'Nadowli'],
        'Volta': ['Ho', 'Hohoe', 'Keta', 'Aflao', 'Kpando'],
        'Western': ['Sekondi-Takoradi', 'Tarkwa', 'Axim', 'Takoradi', 'Shama'],
        'Western North': ['Sefwi Wiawso', 'Bibiani', 'Aowin', 'Dadieso', 'Juaboso']
    };

    const regionSelect = document.getElementById('form-region');
    const townSelect = document.getElementById('form-town');

    function fillSelectOptions(select, options, placeholder) {
        if (!select) return;
        select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });
    }

    if (regionSelect && townSelect) {
        fillSelectOptions(regionSelect, Object.keys(ghanaRegions), 'Select a region');

        regionSelect.addEventListener('change', () => {
            const selectedRegion = regionSelect.value;
            const towns = ghanaRegions[selectedRegion] || [];
            fillSelectOptions(townSelect, towns, 'Select a town');
            townSelect.disabled = towns.length === 0;
        });
    }

    const contactFormSubmit = document.getElementById('contact-form');

    if (contactFormSubmit) {
        contactFormSubmit.addEventListener('submit', event => {
            event.preventDefault();

            const name = document.getElementById('form-name')?.value.trim() || '';
            const phone = document.getElementById('form-phone')?.value.trim() || '';
            const email = document.getElementById('form-email')?.value.trim() || '';
            const region = regionSelect?.value || '';
            const town = townSelect?.value || '';
            const area = document.getElementById('form-area')?.value.trim() || '';
            const service = document.getElementById('form-service')?.value || '';
            const message = document.getElementById('form-message')?.value.trim() || '';

            const text = [
                'Hello Sanzer,',
                '',
                'I would like to request your service.',
                '',
                `Full Name: ${name}`,
                `Phone Number: ${phone}`,
                `Email Address: ${email}`,
                `Region: ${region}`,
                `Town / City: ${town}`,
                `Specific Area / Landmark: ${area || 'Not provided'}`,
                `Service Needed: ${service}`,
                '',
                'Project Details:',
                message
            ].join('\n');

            const whatsappUrl = `https://wa.me/233594495388?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeServiceModal();
        }
    });
});
