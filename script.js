const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const confirmation = document.getElementById("confirmation-message");

        confirmation.textContent = `Thank you for your submission, ${name}!`;

        form.reset();
        form.style.display = "none";
    });
}