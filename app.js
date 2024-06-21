// Define route handlers
function showHomePage() {
    fetch('index.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
  }
  
  function showAboutPage() {
    fetch('about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
  }
  
  function showContactPage() {
    fetch('contact.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
  }
  
  function showServicePage() {
    fetch('service.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
  }
  
  // Set up routes
  page('/index', showHomePage);
  page('/about', showAboutPage);
  page('/contact', showContactPage);
  page('/service', showServicePage);
  
  // Start page.js
  page();
  