document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            formMessage.textContent = "⚠️ Please fill in all fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "✅ Thank you! Your message has been submitted.";
            formMessage.style.color = "green";

            // Optionally, clear the form
            contactForm.reset();
        }
    });
});
