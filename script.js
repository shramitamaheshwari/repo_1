document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quoteText");
    const newQuoteBtn = document.getElementById("newQuote");
  
    if (quoteText && newQuoteBtn) {
      const quotes = [
        "Code is like humor. When you have to explain it, it’s bad. – Cory House",
        "First, solve the problem. Then, write the code. – John Johnson",
        "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
        "The best way to predict the future is to invent it. – Alan Kay",
        "Simplicity is the soul of efficiency. – Austin Freeman"
      ];
  
      function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
      }
  
      getRandomQuote();
  
      newQuoteBtn.addEventListener("click", getRandomQuote);
    }
  
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    if (contactForm && formMessage) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
  
        if (name === "" || email === "" || phone === "") {
          formMessage.textContent = "⚠️ Please fill in all fields.";
          formMessage.style.color = "red";
        } else {
          formMessage.textContent = "✅ Thank you! Your message has been submitted.";
          formMessage.style.color = "green";
          contactForm.reset();
        }
      });
    }
  });
  