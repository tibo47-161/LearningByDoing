// JavaScript Grundlagen - Lernskript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ist geladen!');
    
    // Initialisiere die Anwendung
    initApp();
});

// Hauptfunktion zur Initialisierung
function initApp() {
    // Navigation Smooth Scrolling
    setupSmoothScrolling();
    
    // Formular Handling
    setupFormHandling();
    
    // Interaktive Elemente
    setupInteractiveElements();
    
    // Animationen
    setupAnimations();
}

// Smooth Scrolling für Navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Formular Handling
function setupFormHandling() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Formular-Daten sammeln
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validierung
            if (validateForm(data)) {
                // Erfolgreiche Übermittlung simulieren
                showMessage('Formular erfolgreich übermittelt!', 'success');
                this.reset();
            }
        });
    }
}

// Formular Validierung
function validateForm(data) {
    const errors = [];
    
    // Name Validierung
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name muss mindestens 2 Zeichen lang sein');
    }
    
    // Email Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Bitte geben Sie eine gültige E-Mail-Adresse ein');
    }
    
    if (errors.length > 0) {
        showMessage(errors.join(', '), 'error');
        return false;
    }
    
    return true;
}

// Nachrichten anzeigen
function showMessage(message, type = 'info') {
    // Bestehende Nachrichten entfernen
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Neue Nachricht erstellen
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Styling
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Farbe basierend auf Typ
    switch(type) {
        case 'success':
            messageDiv.style.backgroundColor = '#28a745';
            break;
        case 'error':
            messageDiv.style.backgroundColor = '#dc3545';
            break;
        default:
            messageDiv.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(messageDiv);
    
    // Nachricht nach 3 Sekunden entfernen
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Interaktive Elemente
function setupInteractiveElements() {
    // Hover Effekte für Sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Button Click Effekte
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Ripple Effekt
            createRippleEffect(this, event);
        });
    });
}

// Ripple Effekt für Buttons
function createRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Animationen Setup
function setupAnimations() {
    // Intersection Observer für Scroll-Animationen
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Sections beobachten
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Utility Funktionen
const utils = {
    // Debounce Funktion
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle Funktion
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Local Storage Helper
    storage: {
        set: function(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error('Fehler beim Speichern in localStorage:', e);
            }
        },
        
        get: function(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('Fehler beim Lesen aus localStorage:', e);
                return null;
            }
        },
        
        remove: function(key) {
            localStorage.removeItem(key);
        }
    }
};

// Event Listener für Window Resize (mit Debounce)
window.addEventListener('resize', utils.debounce(function() {
    console.log('Fenster wurde in der Größe geändert');
    // Hier können responsive Anpassungen gemacht werden
}, 250));

// CSS Animationen hinzufügen
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export für Module (falls benötigt)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initApp, utils };
} 