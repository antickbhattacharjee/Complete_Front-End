/**
 * Day 09: Fetch API & Async/Await Demo
 * 
 * INSTRUCTOR NOTE:
 * Always wrap your logic inside a DOMContentLoaded listener or an IIFE 
 * to ensure the DOM is fully parsed before JavaScript attempts to manipulate it.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Element Selection
    // Use 'const' for DOM elements because they won't be reassigned
    const fetchBtn = document.getElementById('fetchBtn');
    const resultContainer = document.getElementById('result');
    
    /**
     * Fetches user data from an external API
     * Uses modern ES6+ Async/Await syntax
     */
    const loadUserData = async () => {
        try {
            // Display a loading state
            resultContainer.innerHTML = '<p class="loading">Loading data...</p>';
            
            // Wait for the fetch request to complete
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            
            // Check if the response was successful (status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            // Parse the JSON data
            const data = await response.json();
            
            // Destructure the object for cleaner code
            const { name, email, company } = data;
            
            // 2. DOM Manipulation using Template Literals
            resultContainer.innerHTML = `
                <div class="user-card">
                    <h3>${name}</h3>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Company:</strong> ${company.name}</p>
                </div>
            `;
            
        } catch (error) {
            // Error handling is crucial for network requests
            console.error('Fetch failed:', error);
            resultContainer.innerHTML = `
                <p class="error">
                    Failed to load user data. Please try again later.<br>
                    <small>${error.message}</small>
                </p>
            `;
        }
    };
    
    // 3. Event Listeners
    if (fetchBtn) {
        fetchBtn.addEventListener('click', loadUserData);
    }
});
