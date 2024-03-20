
const signInButton = document.querySelector('.sign-in-button');
if (signInButton) {
    signInButton.addEventListener('click', function () {
        window.location.href = 'signin.html';
    });
}


const signUpButton = document.querySelector('.sign-up-button');
if (signUpButton) {
    signUpButton.addEventListener('click', function () {
        window.location.href = 'signup.html';
    });
}


