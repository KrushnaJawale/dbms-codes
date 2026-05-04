document.addEventListener('DOMContentLoaded', () => {
    const secretBtn = document.getElementById('secret-btn');
    const dbmsOverlay = document.getElementById('dbms-overlay');
    const closeBtn = document.getElementById('close-overlay');

    // Open overlay on secret button click
    secretBtn.addEventListener('click', () => {
        dbmsOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable background scroll
        console.log('Secret section unlocked.');
    });

    // Close overlay
    closeBtn.addEventListener('click', () => {
        dbmsOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
    });

    // Optional: Close on Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dbmsOverlay.classList.contains('active')) {
            dbmsOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Copy Code Functionality
function copyCode(badge) {
    const textarea = badge.parentElement.querySelector('.code-area');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        navigator.clipboard.writeText(textarea.value);
        const originalText = badge.innerText;
        badge.innerText = 'Copied!';
        badge.style.background = '#00ff00';
        badge.style.color = '#000';
        
        setTimeout(() => {
            badge.innerText = originalText;
            badge.style.background = '';
            badge.style.color = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
