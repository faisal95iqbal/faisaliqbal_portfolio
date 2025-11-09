// EmailJS: replace SERVICE_ID, TEMPLATE_ID, USER_ID with your actual EmailJS values
window.addEventListener('load', function () {
    if (!window.emailjs) return;
    emailjs.init('YOUR_EMAILJS_USER_ID'); // <-- REPLACE with your user id


    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.textContent = 'Sending…';
        const data = new FormData(form);
        const payload = {
            service_id: 'YOUR_SERVICE_ID',
            template_id: 'YOUR_TEMPLATE_ID',
            user_id: 'YOUR_EMAILJS_USER_ID',
            template_params: {
                'from_name': data.get('from_name'),
                'reply_to': data.get('reply_to'),
                'message': data.get('message')
            }
        };
        // Use emailjs.send(serviceID, templateID, templateParams)
        emailjs.send(payload.service_id, payload.template_id, payload.template_params)
            .then(function () {
                status.textContent = 'Message sent — thank you!';
                form.reset();
            }, function (err) {
                status.textContent = 'An error occurred. Please try again later.';
                console.error('EmailJS error', err);
            });
    });
});