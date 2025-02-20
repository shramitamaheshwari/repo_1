document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad. – Cory House",
        "First, solve the problem. Then, write the code. – John Johnson",
        "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
        "The best way to predict the future is to invent it. – Alan Kay",
        "Simplicity is the soul of efficiency. – Austin Freeman"
    ];

    const quoteText = document.getElementById("quoteText");
    const newQuoteBtn = document.getElementById("newQuote");

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    }

    // Load a quote on page load
    getRandomQuote();

    // Change quote on button click
    newQuoteBtn.addEventListener("click", getRandomQuote);
});
