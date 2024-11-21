// Get references to elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const links = navLinks.getElementsByTagName('a');  // Get all anchor tags (links) inside the navLinks

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class to show/hide menu
});

// Close the menu when a link is clicked
Array.from(links).forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Remove the active class to close the menu
    });
});


const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Data Analysis', 'Machine Learning',  'Visualization', 'Web Development'],
            datasets: [{
                label: 'Skills',
                data: [70, 60, 40, 30], 
                backgroundColor: [
                    '#1e3a3b', // Data Analysis
                    '#23395d', // Machine Learning
                    '#4d004b', // Visualization
                    '#b91c1c', // development
                ],
                borderColor: '#7D7D7D',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false 
                },
                tooltip: {
                    backgroundColor: '#333',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                }
            }
        }
    });




    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
    
        try {
            // Simulate form submission (replace with your actual AJAX call or fetch request)
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: this.method,
                body: formData,
            });
    
            if (response.ok) {
                // Show success message
                formStatus.textContent = 'Message sent successfully!';
                formStatus.classList.add('success');
                formStatus.classList.remove('error');
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (error) {
            // Show failure message
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.classList.add('error');
            formStatus.classList.remove('success');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
    
            // Clear the status message after 3 seconds
            setTimeout(() => {
                formStatus.classList.remove('success', 'error');
                formStatus.textContent = ''; // Clear text
            }, 3000);
        }
    });
    