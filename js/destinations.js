/**
 * Module de gestion des actions possibles pour les destinations
 */
const destinations = {
    // Un module est un objet, il peut aussi contenir des propriétés
    // Ici on a une propriété qui stocke notre message d'erreur en cas de user non connecté
    notLoggedInUserMessage: 'Vous devez être connecté⋅e pour gérer vos favoris :(',

    /**
     * Méthode permettant d'initialiser le module "destinations",
     * souvent la méthode init() sert à ajouter des écouteurs d'évènement
     */
    init: function () {
        destinations.addLikeEvents();
    },

    /**
     * Méthode permettant d'écouter les clics sur les boutons like
     */
    addLikeEvents: function () {
        // On sélectionne l'ensemble des boutons like
        const likeButtons = document.querySelectorAll('.btn__like');

        // Sur chaque bouton like, on écoute le clic
        for (const likeButton of likeButtons) {
            likeButton.addEventListener('click', destinations.handleLikeClick);
        }
    },

    /**
     * Actions lors du clic sur un bouton like
     */
    handleLikeClick: function (event) {
        // On sélectionne la card parente du bouton like sur lequel on vient de cliquer
        const destElement = event.currentTarget.closest('.card');

        // On ajoute le message en haut de la card
        messages.create(destinations.notLoggedInUserMessage, destElement);
    }
}
