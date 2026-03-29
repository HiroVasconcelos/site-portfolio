// Inicializar ícones
lucide.createIcons();

// Ano dinâmico no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu Mobile Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Fechar menu mobile ao clicar em um link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Scroll Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Para animar apenas uma vez
        }
    });
};

const revealOptions = {
    threshold: 0.15, // Dispara quando 15% do elemento está visível
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Funcionalidade de copiar o e-mail com Toast
const copyBtn = document.getElementById('copy-email-btn');
const toast = document.getElementById('toast-notification');
const emailToCopy = 'gui.a.vasconcelos@gmail.com'; // [cite: 2]

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailToCopy).then(() => {
        // Remove as classes que escondem o toast
        toast.classList.remove('translate-y-10', 'opacity-0');
        
        // Define um tempo (3 segundos) para esconder o toast novamente
        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0');
        }, 3000);
    }).catch(err => {
        console.error('Falha ao copiar e-mail: ', err);
    });
});