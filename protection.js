// Schutzmaßnahmen für deine Forschungsseite
// WICHTIG: Diese können von technisch versierten Personen umgangen werden,
// aber sie schrecken Gelegenheitskopierer ab

// 1. Rechtsklick deaktivieren
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showCopyrightWarning();
    return false;
});

// 2. Text-Selektion erschweren
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

// 3. Tastenkombinationen blockieren
document.addEventListener('keydown', function(e) {
    // Strg+A (Alles auswählen)
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        showCopyrightWarning();
    }
    // Strg+C (Kopieren)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showCopyrightWarning();
    }
    // Strg+S (Speichern)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showCopyrightWarning();
    }
    // F12 (Entwicklertools) - Optional, kann nervig sein
    if (e.key === 'F12') {
        e.preventDefault();
        showCopyrightWarning();
    }
});

// 4. Copyright-Warnung anzeigen
function showCopyrightWarning() {
    const warning = document.getElementById('copyright-warning');
    if (warning) {
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 3000);
    }
}

// 5. Wasserzeichen zu kopierten Texten hinzufügen (falls doch kopiert wird)
document.addEventListener('copy', function(e) {
    const selection = window.getSelection().toString();
    const copyright = '\n\n© 2025 Julia - KI-Bewusstsein Forschung. Alle Rechte vorbehalten. Quelle: [deine-url]';
    
    e.clipboardData.setData('text/plain', selection + copyright);
    e.preventDefault();
});

// 6. Console-Warnung für Entwickler
console.log('%c⚠️ WARNUNG!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%cDiese Seite und alle Inhalte sind urheberrechtlich geschützt.', 'color: red; font-size: 16px;');
console.log('%c© 2025 Julia - KI-Bewusstsein Forschung. Alle Rechte vorbehalten.', 'color: red; font-size: 16px;');
console.log('%cUnerlaubtes Kopieren oder Verwenden der Inhalte ist strafbar.', 'color: red; font-size: 16px;');

// 7. Bilder schützen (Drag & Drop verhindern)
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// 8. Print-Schutz
window.addEventListener('beforeprint', function(e) {
    alert('Drucken ist nicht erlaubt. © 2025 Julia - Alle Rechte vorbehalten.');
    return false;
});

// 9. DevTools Erkennung (funktioniert nicht überall)
let devtools = {open: false, orientation: null};
const threshold = 160;

setInterval(function() {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
            devtools.open = true;
            console.clear();
            window.location.href = "about:blank";
        }
    } else {
        devtools.open = false;
    }
}, 500);