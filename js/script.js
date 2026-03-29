// ===== Stagger Grid (anime.js) =====
(function() {
    var grid = document.getElementById('staggerGrid');
    if (!grid || typeof anime === 'undefined') return;
    var cols = 20, rows = 10;
    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('--grid-rows', rows);
    for (var i = 0; i < cols * rows; i++) {
        var dot = document.createElement('div');
        dot.classList.add('stagger-dot');
        var inner = document.createElement('div');
        inner.classList.add('stagger-dot-inner');
        dot.appendChild(inner);
        grid.appendChild(dot);
    }
    function playWave() {
        anime({
            targets: '.stagger-dot-inner',
            scale: [
                { value: 1, duration: 0 },
                { value: 3, duration: 600 },
                { value: 1, duration: 600 }
            ],
            opacity: [
                { value: 0.12, duration: 0 },
                { value: 0.7, duration: 600 },
                { value: 0.12, duration: 600 }
            ],
            backgroundColor: [
                { value: 'rgba(255,255,255,0.12)', duration: 0 },
                { value: '#f59e0b', duration: 600 },
                { value: 'rgba(255,255,255,0.12)', duration: 600 }
            ],
            delay: anime.stagger(50, { grid: [cols, rows], from: 'center' }),
            easing: 'easeInOutQuad',
            complete: function() {
                setTimeout(playWave, 2500);
            }
        });
    }
    // Start after preloader
    setTimeout(playWave, 2200);
})();

// ===== World of Possibilities (anime.js) =====
(function() {
    if (typeof anime === 'undefined' || !document.getElementById('worldAnimation')) return;

    function startWorldAnimation() {
        var tl = anime.timeline({ easing: 'easeOutExpo' });

        // 1. Globe fades in and scales up
        tl.add({
            targets: '.globe-group',
            opacity: [0, 1],
            scale: [0.3, 1],
            duration: 1200,
        });

        // 2. Orbit rings expand with a pulse
        tl.add({
            targets: '.orbit-ring-1',
            opacity: [0, 1],
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1000,
            easing: 'easeInOutQuad',
        }, '-=600');

        tl.add({
            targets: '.orbit-ring-2',
            opacity: [0, 1],
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1000,
            easing: 'easeInOutQuad',
        }, '-=700');

        // 3. Orbit icons fly in one by one with stagger
        tl.add({
            targets: ['.orbit-icon-1', '.orbit-icon-2', '.orbit-icon-3', '.orbit-icon-4', '.orbit-icon-5', '.orbit-icon-6'],
            opacity: [0, 1],
            scale: [0, 1],
            delay: anime.stagger(150),
            duration: 600,
            easing: 'easeOutBack',
        }, '-=400');

        // 4. Student silhouette rises from below
        tl.add({
            targets: '.student-figure',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutQuad',
        }, '-=300');

        // 5. Touch spark appears where hands meet globe
        tl.add({
            targets: '.touch-spark',
            opacity: [0, 0.9, 0],
            r: [2, 12, 4],
            duration: 800,
            easing: 'easeOutQuad',
        }, '-=200');

        // 6. Globe glows gold
        tl.add({
            targets: '.globe-glow',
            opacity: [0, 0.5],
            duration: 600,
        }, '-=600');

        // 7. Constellation lines burst outward
        tl.add({
            targets: '.constellation',
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuad',
        }, '-=400');

        // 8. Particles float up
        tl.add({
            targets: '.particle',
            opacity: [0, 0.7],
            translateY: function() { return anime.random(-20, -60); },
            delay: anime.stagger(100),
            duration: 1000,
            easing: 'easeOutQuad',
        }, '-=600');

        // Continuous animations after timeline completes
        tl.finished.then(function() {
            // Globe slow continuous rotation
            anime({
                targets: '.globe-group',
                rotate: 360,
                duration: 40000,
                loop: true,
                easing: 'linear',
            });

            // Orbit icons gentle floating
            anime({
                targets: '.orbit-icon',
                translateY: function() { return anime.random(-6, 6); },
                duration: function() { return anime.random(2000, 3000); },
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: anime.stagger(200),
            });

            // Particles continuous float
            anime({
                targets: '.particle',
                translateY: function() { return anime.random(-30, -80); },
                opacity: [0.7, 0],
                duration: function() { return anime.random(2000, 4000); },
                loop: true,
                easing: 'easeOutQuad',
                delay: anime.stagger(400),
            });

            // Globe glow pulse
            anime({
                targets: '.globe-glow',
                opacity: [0.3, 0.6],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
            });
        });
    }

    // Start after preloader
    setTimeout(startWorldAnimation, 2400);
})();

// ===== Ascending Staircase (anime.js) =====
(function() {
    if (typeof anime === 'undefined' || !document.getElementById('staircaseAnimation')) return;

    var staircaseStarted = false;

    function startStaircaseAnimation() {
        if (staircaseStarted) return;
        staircaseStarted = true;

        var tl = anime.timeline({ easing: 'easeOutExpo' });

        // 1. Draw the connecting path
        tl.add({
            targets: '.stair-path',
            strokeDashoffset: [500, 0],
            opacity: [0, 1],
            duration: 2000,
            easing: 'easeInOutQuad',
        });

        // 2. Steps appear from bottom to top
        tl.add({
            targets: '.stair-step-1',
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 600,
        }, '-=1600');

        tl.add({
            targets: '.stair-step-1 .stair-fill',
            width: [0, 120],
            duration: 800,
            easing: 'easeInOutQuad',
        }, '-=400');

        tl.add({
            targets: '.stair-step-2',
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 600,
        }, '-=600');

        tl.add({
            targets: '.stair-step-2 .stair-fill',
            width: [0, 120],
            duration: 800,
            easing: 'easeInOutQuad',
        }, '-=400');

        tl.add({
            targets: '.stair-step-3',
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 600,
        }, '-=600');

        tl.add({
            targets: '.stair-step-3 .stair-fill',
            width: [0, 120],
            duration: 800,
            easing: 'easeInOutQuad',
        }, '-=400');

        tl.add({
            targets: '.stair-step-4',
            opacity: [0, 1],
            translateX: [-30, 0],
            scale: [0.9, 1],
            duration: 800,
        }, '-=600');

        tl.add({
            targets: '.stair-step-4 .stair-fill',
            width: [0, 120],
            duration: 1000,
            easing: 'easeInOutQuad',
        }, '-=500');

        // 3. Climbers appear one by one
        tl.add({
            targets: '.stair-climber-1',
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 500,
        }, '-=1800');

        tl.add({
            targets: '.stair-climber-2',
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 500,
        }, '-=1200');

        tl.add({
            targets: '.stair-climber-3',
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 500,
        }, '-=800');

        // 4. Leader appears at top
        tl.add({
            targets: '.stair-leader',
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.5, 1],
            duration: 800,
            easing: 'easeOutBack',
        }, '-=300');

        // 5. Star shines
        tl.add({
            targets: '.stair-star',
            opacity: [0, 1],
            scale: [0, 1],
            duration: 600,
            easing: 'easeOutBack',
        }, '-=400');

        // 6. Glow particles
        tl.add({
            targets: '.stair-glow',
            opacity: [0, 0.8],
            scale: [0, 1.5],
            delay: anime.stagger(80),
            duration: 600,
            easing: 'easeOutQuad',
        }, '-=300');

        // 7. Floating shapes
        tl.add({
            targets: '.stair-float',
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 800,
        }, '-=1500');

        // Continuous animations
        tl.finished.then(function() {
            anime({
                targets: '.stair-float-1, .stair-float-4',
                translateY: function() { return anime.random(-15, 15); },
                translateX: function() { return anime.random(-8, 8); },
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
            });

            anime({
                targets: '.stair-float-2, .stair-float-3, .stair-float-5',
                translateY: function() { return anime.random(-10, 10); },
                rotate: function() { return anime.random(-15, 15); },
                duration: 4000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: anime.stagger(300),
            });

            anime({
                targets: '.stair-glow',
                opacity: [0.4, 0.9],
                scale: [1, 1.8],
                duration: function() { return anime.random(1500, 2500); },
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: anime.stagger(200),
            });

            anime({
                targets: '.stair-star',
                rotate: 360,
                duration: 8000,
                loop: true,
                easing: 'linear',
            });

            anime({
                targets: '.stair-climber',
                translateY: function() { return anime.random(-3, 3); },
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: anime.stagger(300),
            });

            anime({
                targets: '.stair-leader',
                scale: [1, 1.05],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
            });
        });
    }

    // Trigger on scroll into view
    var staircaseEl = document.getElementById('staircaseAnimation');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                startStaircaseAnimation();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    observer.observe(staircaseEl);
})();

// ===== Preloader =====
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
        setTimeout(animateHero, 200);
    }, 1800);
});

// ===== Header Scroll Effect =====
var header = document.getElementById('header');
var backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    if (scrollY > 60) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
    if (scrollY > 500) { backToTop.classList.add('visible'); }
    else { backToTop.classList.remove('visible'); }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Mobile Navigation =====
var navToggle = document.getElementById('navToggle');
var nav = document.getElementById('nav');
var navOverlay = document.getElementById('navOverlay');

function closeNav() {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openNav() {
    nav.classList.add('open');
    navToggle.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

navToggle.addEventListener('click', function() {
    if (nav.classList.contains('open')) {
        closeNav();
    } else {
        openNav();
    }
});

if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
}

document.querySelectorAll('.nav-link, .nav-cta').forEach(function(link) {
    link.addEventListener('click', closeNav);
});

// ===== Parallax Effect =====
function initParallax() {
    var parallaxLayers = document.querySelectorAll('.parallax-layer');
    var parallaxBgImgs = document.querySelectorAll('.parallax-bg-img');

    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;

        parallaxLayers.forEach(function(layer) {
            var speed = parseFloat(layer.dataset.speed) || 0.2;
            var yPos = scrollY * speed;
            layer.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
        });

        parallaxBgImgs.forEach(function(bg) {
            var speed = parseFloat(bg.dataset.speed) || 0.3;
            var rect = bg.parentElement.getBoundingClientRect();
            var yPos = rect.top * speed;
            bg.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
        });
    });
}

initParallax();

// ===== Hero Mouse Parallax =====
var heroSection = document.querySelector('.hero');
var heroShapes = document.querySelectorAll('.hero-shape');

if (heroSection) {
    heroSection.addEventListener('mousemove', function(e) {
        var xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
        var yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

        heroShapes.forEach(function(shape, i) {
            var depth = (i + 1) * 8;
            var moveX = xPercent * depth;
            var moveY = yPercent * depth;
            shape.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
        });
    });
}

// ===== Scroll-Triggered Animations =====
function animateHero() {
    var heroElements = document.querySelectorAll('.hero [data-animate]');
    heroElements.forEach(function(el) {
        var delay = parseInt(el.dataset.delay) || 0;
        setTimeout(function() {
            el.classList.add('animated');
        }, delay);
    });
}

function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('[data-animate]:not(.hero [data-animate])');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(function() {
                    entry.target.classList.add('animated');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    animatedElements.forEach(function(el) { observer.observe(el); });
}

initScrollAnimations();

// ===== Counter Animation =====
var statNumbers = document.querySelectorAll('.stat-number');
var countersAnimated = false;

function animateCounters() {
    statNumbers.forEach(function(stat) {
        var target = parseInt(stat.getAttribute('data-target'));
        var duration = 2200;
        var startTime = performance.now();

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function updateCounter(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var easedProgress = easeOutExpo(progress);
            var current = Math.floor(target * easedProgress);

            stat.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(updateCounter);
    });
}

var statsSection = document.querySelector('.stats');
if (statsSection) {
    var statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.4 });

    statsObserver.observe(statsSection);
}

// ===== Tilt Effect on Cards =====
function initTiltEffect() {
    var cards = document.querySelectorAll('.program-card, .testimonial-card, .hero-card');

    cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / centerY * -5;
            var rotateY = (x - centerX) / centerX * 5;

            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            setTimeout(function() { card.style.transition = ''; }, 500);
        });
    });
}

initTiltEffect();

// ===== Section Header Reveal =====
function initSectionReveal() {
    var sectionHeaders = document.querySelectorAll('.section-header');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    sectionHeaders.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

initSectionReveal();

// ===== Text Scramble (Hero Badge) =====
function scrambleText(el) {
    var originalText = el.textContent;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var iteration = 0;

    var interval = setInterval(function() {
        el.textContent = originalText.split('').map(function(char, i) {
            if (i < iteration) return originalText[i];
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');

        if (iteration >= originalText.length) clearInterval(interval);
        iteration += 0.5;
    }, 30);
}

var heroBadgeText = document.querySelector('.hero-badge span');
if (heroBadgeText) {
    setTimeout(function() { scrambleText(heroBadgeText); }, 2200);
}

// ===== Smooth Scroll (same-page anchors only) =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
            var headerHeight = header.offsetHeight;
            var targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ===== Gallery Filter =====
var filterBtns = document.querySelectorAll('.gallery-filter');
var galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');

        galleryItems.forEach(function(item) {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===== Gallery Hover =====
galleryItems.forEach(function(item, i) {
    item.addEventListener('mouseenter', function() {
        galleryItems.forEach(function(other, j) {
            if (j !== i && !other.classList.contains('hidden')) {
                other.style.opacity = '0.5';
                other.style.transform = 'scale(0.97)';
            }
        });
    });

    item.addEventListener('mouseleave', function() {
        galleryItems.forEach(function(other) {
            other.style.opacity = '';
            other.style.transform = '';
        });
    });
});

// ===== Contact Form =====
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = contactForm.querySelector('button[type="submit"]');
        var btnText = btn.querySelector('span');
        var originalText = btnText.textContent;

        btn.style.background = '#16a34a';
        btn.style.borderColor = '#16a34a';
        btnText.textContent = 'Message Sent!';
        btn.disabled = true;

        setTimeout(function() {
            btn.style.background = '';
            btn.style.borderColor = '';
            btnText.textContent = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 3000);
    });
}

// ===== Newsletter Form =====
var newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = newsletterForm.querySelector('button[type="submit"]');
        var originalText = btn.textContent;

        btn.textContent = 'Subscribed!';
        btn.style.background = '#16a34a';
        btn.style.borderColor = '#16a34a';

        setTimeout(function() {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            newsletterForm.reset();
        }, 3000);
    });

// ===== Video Modal =====
(function() {
    var modal = document.getElementById('videoModal');
    var overlay = document.getElementById('videoModalOverlay');
    var closeBtn = document.getElementById('videoModalClose');
    var player = document.getElementById('videoPlayer');
    var tourBtn = document.getElementById('virtualTourBtn');

    if (!modal || !tourBtn) return;

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (player) player.play();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (player) {
            player.pause();
            player.currentTime = 0;
        }
    }

    tourBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
}