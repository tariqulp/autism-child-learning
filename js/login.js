document.getElementById('login-button').addEventListener('click', function () {
    //Get Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //Get password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'tariqul@gmail.com' && userPassword == 'tariqul') {
        window.location.href = 'home.html'
    }
    else if (userEmail == 'sakib@gmail.com' && userPassword == 'secret') {
        window.location.href = 'home.html'
    }
})