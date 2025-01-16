// Add event listeners to navigation links for smooth scrolling
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  
  // Add a scroll-to-top button functionality
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "⬆️";
  scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background: #6a11cb;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(scrollToTopButton);
  
  // Show/hide scroll-to-top button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  // Scroll to the top when the button is clicked
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
  // Dynamic greeting in the header
  const headerGreeting = document.querySelector("header h1");
  const currentHour = new Date().getHours();
  let greetingMessage;
  
  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }
  
  headerGreeting.textContent = greetingMessage;
  