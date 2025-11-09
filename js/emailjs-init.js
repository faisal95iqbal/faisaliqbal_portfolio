// EmailJS: replace SERVICE_ID, TEMPLATE_ID, USER_ID with your actual EmailJS values
window.addEventListener('load', function () {
    if (!window.emailjs) return;
    emailjs.init('IGdcZjcHbaX6ONdW7'); // <-- REPLACE with your user id

    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset previous errors
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => {
            msg.textContent = "";
            msg.classList.remove("active");
        });
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(input => input.classList.remove("invalid"));
        // Collect inputs
        const name = form.from_name.value.trim();
        const email = form.reply_to.value.trim();
        const message = form.message.value.trim();
        let isValid = true;

        // Validate name
        if (name.length < 3) {
            showError(form.from_name, "Please enter your full name.");
            isValid = false;
        }
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError(form.reply_to, "Please enter a valid email address.");
            isValid = false;
        }

        // Validate message
        if (message.length < 10) {
            showError(form.message, "Message should be at least 10 characters long.");
            isValid = false;
        }

        if (!isValid) return;
        function showError(input, message) {
            const errorSpan = input.parentElement.querySelector(".error-message");
            input.classList.add("invalid");
            errorSpan.textContent = message;
            errorSpan.classList.add("active");
          }

        status.textContent = 'Sending…';
        const data = new FormData(form);
        const payload = {
            service_id: 'service_7l8yy7r',
            template_id: 'template_kk4ntnm',
            user_id: 'IGdcZjcHbaX6ONdW7',
            template_params: {
                'from_name': data.get('from_name'),
                'reply_to': data.get('reply_to'),
                'message': data.get('message')
            }
        };
        // Use emailjs.send(serviceID, templateID, templateParams)
        emailjs.send(payload.service_id, payload.template_id, payload.template_params)
            .then(function () {
                status.textContent = 'Message sent — I will contact back you as soon as possible.Thank you !';
                form.reset();
            }, function (err) {
                status.textContent = 'An error occurred. Please try again later.';
            });
    });
});