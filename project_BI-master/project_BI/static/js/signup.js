
const signInLink = document.querySelector('.para a');
signInLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    window.location.href = 'signin.html';
});


// Cibler le bouton "Create Account"
const createAccountButton = document.querySelector('.sign-up button');
createAccountButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    // Sélectionner l'élément pour afficher le message
    const messageContainer = document.querySelector('.message-container');
    
    // Remplacer le contenu de l'élément avec votre message
    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message'); // Ajouter une classe CSS si nécessaire
    successMessage.textContent = 'Account created successfully!'; // Personnaliser le message ici
    
    // Effacer le contenu précédent du conteneur de message
    messageContainer.innerHTML = '';
    
    // Ajouter le message au conteneur
    messageContainer.appendChild(successMessage);
});

