// Get references to elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const links = navLinks.getElementsByTagName('a');  // Get all anchor tags (links) inside the navLinks

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});

// Close the menu when a link is clicked
Array.from(links).forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); 
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

// Mail logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  // Function to show status messages
  function showStatusMessage(message, isSuccess = true) {
  const status = document.getElementById("form-status");

  status.textContent = message;
  status.style.color = isSuccess ? "green" : "red";
  status.style.opacity = 1;  // show message

  // Hide after 3 seconds
  setTimeout(() => {
    status.style.opacity = 0;  // fade out
    // Optional: clear the message after fade
    setTimeout(() => {
      status.textContent = "";
    }, 500);
  }, 3000);
}

  form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoader = submitBtn.querySelector(".btn-loader");

  // Show loader, hide text
  btnText.style.display = "none";
  btnLoader.style.display = "inline-block";

  // Clear any previous message
  showStatusMessage("");

  emailjs
    .sendForm("service_lfgffvc", "template_vmeys88", this)
    .then(() => {
      showStatusMessage("✅ Message sent! I will get back to you soon.");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      showStatusMessage("❌ Failed to send message. Please try again.", false);
    })
    .finally(() => {
      // Reset button state
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
    });
});
});
