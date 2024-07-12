document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Submitting signup form with:', { username, email, password });

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => {
        console.log('Received response:', response);
        return response.json();
    })
    .then(data => {
        console.log('Received data:', data);
        const message = document.getElementById('message');
        if (data.error) {
            message.style.color = 'red';
            message.textContent = data.error;
        } else {
            message.style.color = 'green';
            message.textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
