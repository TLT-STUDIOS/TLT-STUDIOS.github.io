document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value || "N/A";
        const email = document.getElementById('email').value || "N/A";
        const website = document.getElementById('website').value || "N/A";
        const address = document.getElementById('address').value || "N/A";
        const subject = document.getElementById('subject').value || "N/A";
        const message = document.getElementById('message').value || "N/A";

        const actionUrl = 'https://hkdk.events/s7pe2vfovfvt0r';

        fetch(actionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set content type
            },
            body: JSON.stringify({ // Convert the object to JSON
                name: name,
                email: email,
                website: website,
                address: address,
                subject: subject,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Assuming the server returns JSON
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log('Success:', data);
            alert("Your data was sent!"); // Notify user of success
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("There was an error sending your data."); // Notify user of error
        });
    });
});
