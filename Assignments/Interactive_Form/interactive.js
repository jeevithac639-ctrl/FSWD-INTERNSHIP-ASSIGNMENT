document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message');

    if (name && email) {
        message.textContent = 'Form submitted successfully!';
        message.classList.remove('error');
    } else {
        message.textContent = 'Please fill all fields.';
        message.classList.add('error');
    }
});