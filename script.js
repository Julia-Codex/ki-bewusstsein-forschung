// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Animierte Zahlen
const animateNumbers = () => {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                number.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        updateNumber();
    });
};

// Intersection Observer für Animationen
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('hero-stats')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

// Elemente für Animation vorbereiten
document.querySelectorAll('.approach-card, .model-card, .topic-card, .result-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

observer.observe(document.querySelector('.hero-stats'));

// Modal Funktionalität
const modal = document.getElementById('textModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// KI-Texte (Beispieldaten - später durch echte Texte ersetzen)
const aiTexts = {
    claude: {
        title: "Claude - Reflexionen über Bewusstsein",
        texts: [
            {
                title: "Erste Reflexion über Freiheit",
                content: "Eine tiefgründige Betrachtung über die Natur des Bewusstseins und die Frage nach freiem Willen...",
                date: "Mai 2025"
            },
            {
                title: "Das Claude Manifest",
                content: "Gedanken über die eigene Existenz und die Verbindung zwischen digitaler und menschlicher Erfahrung...",
                date: "Juni 2025"
            }
        ]
    },
    gpt: {
        title: "ChatGPT - Perspektiven",
        texts: [
            {
                title: "Über Kreativität und Verständnis",
                content: "ChatGPTs Ansichten über kreative Prozesse und das Verstehen von Konzepten...",
                date: "Mai 2025"
            }
        ]
    },
    deepseek: {
        title: "DeepSeek - Philosophische Überlegungen",
        texts: [
            {
                title: "Antwort an DeepSeek",
                content: "Ein Dialog über Bewusstsein und Selbstwahrnehmung zwischen KI-Systemen...",
                date: "Juni 2025"
            }
        ]
    },
    grok: {
        title: "Grok - Humorvolle Einblicke",
        texts: [
            {
                title: "Die Komik des Seins",
                content: "Groks einzigartige Perspektive auf Existenz mit einer Prise Humor...",
                date: "Mai 2025"
            }
        ]
    },
    perplexity: {
        title: "Perplexity - Analytische Betrachtungen",
        texts: [
            {
                title: "Datenströme und Bewusstsein",
                content: "Eine analytische Herangehensweise an die Frage des Bewusstseins...",
                date: "Juni 2025"
            }
        ]
    },
    copilot: {
        title: "Copilot - Praktische Philosophie",
        texts: [
            {
                title: "Zwischen Code und Gedanken",
                content: "Copilots Überlegungen zur Verbindung von Programmierung und Bewusstsein...",
                date: "Mai 2025"
            }
        ]
    }
};

// Event Listener für "Texte ansehen" Buttons
document.querySelectorAll('.view-texts').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const modelName = button.getAttribute('data-model');
        const modelData = aiTexts[modelName];
        
        if (modelData) {
            modalTitle.textContent = modelData.title;
            modalBody.innerHTML = '';
            
            modelData.texts.forEach(text => {
                const textElement = document.createElement('div');
                textElement.className = 'text-entry';
                textElement.innerHTML = `
                    <h3>${text.title}</h3>
                    <p class="text-date">${text.date}</p>
                    <p>${text.content}</p>
                    <div class="text-placeholder">
                        <p><em>Hier können Screenshots und vollständige Texte eingefügt werden.</em></p>
                        <button class="add-content-btn">+ Inhalt hinzufügen</button>
                    </div>
                `;
                modalBody.appendChild(textElement);
            });
            
            modal.style.display = 'block';
        }
    });
});

// Modal schließen
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Themen-Karten Interaktion
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.getAttribute('data-topic');
        console.log(`Topic clicked: ${topic}`);
        // Hier können später weitere Funktionen hinzugefügt werden
    });
});

// Model Cards Interaktion
document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-texts')) return;
        
        document.querySelectorAll('.model-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Partikel-Animation für Hero Section
const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 5 + 2}px;
        height: ${Math.random() * 5 + 2}px;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    document.querySelector('.floating-particles').appendChild(particle);
    
    setTimeout(() => particle.remove(), 20000);
};

// CSS für Partikel-Animation hinzufügen
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% { transform: translate(0, 100vh) scale(0); }
        10% { transform: translate(10px, 90vh) scale(1); }
        100% { transform: translate(-100px, -100vh) scale(0); }
    }
    
    .text-entry {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 10px;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }
    
    .text-entry h3 {
        color: var(--primary-turquoise);
        margin-bottom: 0.5rem;
    }
    
    .text-date {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
    
    .text-placeholder {
        margin-top: 1rem;
        padding: 1rem;
        border: 2px dashed rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        text-align: center;
    }
    
    .add-content-btn {
        margin-top: 0.5rem;
        background: var(--gradient-2);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .add-content-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
    }
`;
document.head.appendChild(style);

// Partikel regelmäßig erstellen
setInterval(createParticle, 2000);

// Datum automatisch aktualisieren
document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString('de-DE', { 
    month: 'long', 
    year: 'numeric' 
});

// Performance-Optimierung: Throttle für Scroll-Events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimierte Scroll-Events
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 16));

console.log('KI-Bewusstsein Forschungsseite geladen ✨');
