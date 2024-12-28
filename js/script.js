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

// Load the story contents
document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById("story-content");

    // Only execute the fetch if the content div exists
    if (contentDiv) {
        const storyTitle = document.getElementById('story-title').textContent;
        const filePath = `../txt/${storyTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}.txt`;
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const lines = data.split("\n");

                lines.forEach(line => {
                    const lineElement = document.createElement("div");
                    lineElement.innerHTML = line; // Safely insert the HTML content
                    contentDiv.appendChild(lineElement); // Append the line to the contentDiv
                });
            })
            .catch(error => {
                console.error("Error reading file:", error);
            });
    }
});
