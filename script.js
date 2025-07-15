document.addEventListener('DOMContentLoaded', function() {
    // Get all content divs except the about section
    const contentDivs = document.querySelectorAll('.content:not(.about-section)');
    
    // Add click event listener to each content div
    contentDivs.forEach(div => {
        const title = div.querySelector('.content-title');
        
        title.addEventListener('click', function() {
            // Toggle expanded class on the content div
            div.classList.toggle('expanded');
        });
        
        // Make the title cursor pointer to indicate it's clickable
        title.style.cursor = 'pointer';
    });

    // Header reload functionality
    const headerContainer = document.querySelector('.header-container');
    
    if (headerContainer) {
        headerContainer.addEventListener('click', function() {
            location.reload();
        });
        
        // Make header cursor pointer to indicate it's clickable
        headerContainer.style.cursor = 'pointer';
    }
}); 