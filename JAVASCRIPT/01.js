document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de portafolio inicializado correctamente.");

    // --- LÓGICA DE TEMA (DARK/LIGHT MODE) ---
    const btnTheme = document.getElementById('btn-theme');
    const body = document.body;
    
    if (btnTheme) {
        const themeIcon = btnTheme.querySelector('i');

        // Función para cambiar el tema
        const toggleTheme = () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        };

        // Cargar tema guardado
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.className = 'fas fa-sun';
        }

        btnTheme.addEventListener('click', toggleTheme);
    }

    // --- LÓGICA DEL MODAL DE CONTACTO ---
    const modal = document.getElementById('contact-modal');
    const btnContact = document.getElementById('btn-contact');
    const btnClose = document.querySelector('.close-modal');

    if (btnContact && modal) {
        btnContact.onclick = () => modal.style.display = 'flex';
        if (btnClose) btnClose.onclick = () => modal.style.display = 'none';

        window.onclick = (event) => {
            if (event.target == modal) modal.style.display = 'none';
        };
    }

    // --- ANIMACIÓN AL HACER SCROLL (SCROLL REVEAL) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
});