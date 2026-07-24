document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CUSTOM CURSOR ---
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button');

    window.addEventListener('mousemove', (e) => {
        if(cursor && cursorDot) {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            
            setTimeout(() => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }, 50);
        }
    });

    hoverTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => cursor?.classList.add('cursor-hover'));
        trigger.addEventListener('mouseleave', () => cursor?.classList.remove('cursor-hover'));
    });

    // --- 2. PARALLAX GEMBOK 3D ---
    const heroSection = document.getElementById('hero-3d');
    const padlockWrapper = document.querySelector('.padlock-wrapper');

    if (heroSection && padlockWrapper) {
        heroSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            // Memastikan gembok merespons kursor mouse
            padlockWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            padlockWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
            padlockWrapper.style.transition = `transform 0.5s ease`;
        });

        heroSection.addEventListener('mouseenter', () => {
            padlockWrapper.style.transition = `transform 0.1s ease-out`;
        });
    }

    // --- 3. ANIMASI TEKS 5 DETIK ---
    const titleContainer = document.getElementById('dynamic-title');
    const part1 = document.getElementById('title-part-1');
    const part2 = document.getElementById('title-part-2');

	const textData = [
		{ top: "Secure", bottom: "Your Data" },
		{ top: "Encrypt", bottom: "Your Secret Files" },
		{ top: "Protect", bottom: "Your Digital Privacy" },
		{ top: "Unbreakable", bottom: "AES-256 Shield" }
	];
    let currentIndex = 0;

    setInterval(() => {
        titleContainer.classList.add('title-hidden');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textData.length;
            part1.innerText = textData[currentIndex].top;
            part2.innerText = textData[currentIndex].bottom;
            titleContainer.classList.remove('title-hidden');
        }, 700); 
    }, 5000); 

    // --- 4. ANIMASI SCROLL ---
    const scrollElements = document.querySelectorAll('.scroll-anim');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
            else entry.target.classList.remove('show');
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    scrollElements.forEach(el => scrollObserver.observe(el));
});

// --- 5. FUNGSI MODAL (JENDELA MELAYANG) ---
function openModal() {
    const modal = document.getElementById('app-modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('app-modal');
    const content = document.getElementById('modal-content');
    
    modal.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}