// Cibler le lien "Sign Up"
const signUpLink = document.querySelector('.para a');
signUpLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    window.location.href = 'signup.html';
});

// Cibler le lien "Forgot Password"
const forgotPasswordLink = document.querySelector('.forgot-password a');
forgotPasswordLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    window.location.href = 'forgot_password.html'; // Mettez le chemin correct vers la page Forgot Password
});

// Cibler le bouton "Sign In"
const signInButton = document.querySelector('button'); // Cibler directement le bouton
signInButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    // Sélectionner l'élément pour afficher le message
    const messageContainer = document.querySelector('.message-container');
    // Remplacer le contenu de l'élément avec votre message
    messageContainer.innerHTML = '<p class="success-message">Successfully signed in!</p>'; // Personnaliser le message ici

    // Réinitialiser les champs d'entrée (facultatif)
    const emailInput = document.querySelector('.email.input');
    const passwordInput = document.querySelector('.password.input');
    emailInput.value = '';
    passwordInput.value = '';
});
