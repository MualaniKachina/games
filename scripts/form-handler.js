document.querySelector('#join-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const username = formData.get('username');
    
    alert(`Welcome to Gameverse, ${name}! Your email is ${email}, and your username is ${username}.`);
});
