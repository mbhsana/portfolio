// Language switching functionality
let currentLanguage = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-en and data-fr attributes
    document.querySelectorAll('[data-en][data-fr]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text !== null) {
            // Simple text update - works for elements without nested HTML
            element.textContent = text;
        }
    });
    
    // Update language toggle button text
    const toggleBtn = document.getElementById('languageToggle');
    if (toggleBtn) {
        const langText = toggleBtn.querySelector('.lang-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'FR' : 'EN';
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLanguage);
    
    // Add event listener to language toggle button
    const toggleBtn = document.getElementById('languageToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'fr' : 'en';
            updateLanguage(newLang);
        });
    }
});

