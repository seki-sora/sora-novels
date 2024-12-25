// Function to apply theme
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save theme to localStorage
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Set initial theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    applyTheme(savedTheme);

    // Update toggle button state
    const toggleButton = document.getElementById('toggleButton');
    if (savedTheme === 'dark') {
        toggleButton.classList.add('dark');
    } else {
        toggleButton.classList.remove('dark');
    }
});

// Update toggle button class when toggling theme
document.getElementById('toggleButton').addEventListener('click', () => {
    toggleTheme();

    // Update toggle button state
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.classList.toggle('dark');
});