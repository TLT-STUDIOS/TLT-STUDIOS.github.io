document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        const actionUrl = 'https://hkdk.events/s7pe2vfovfvt0r';

        fetch(actionUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Assuming the server returns JSON
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log('Success:', data);
            // You can add additional success handling here, like displaying a message
            alert("Your data was sent!")
        })
        .catch((error) => {
            console.error('Error:', error);
            // You can add error handling here
        });
    });
});
