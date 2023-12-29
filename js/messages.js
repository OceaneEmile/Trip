/**
 * Module générique de gestion des messages d'informations
 */
const messages = {
    create: function (message, parentElement)
    {
        // On commence par supprimer tous les messages qu'on a pu créer auparavant
        messages.clear(parentElement);

        // On crée notre élément <p> qui contiendra notre message
        const messageEl = document.createElement('p'); // <p></p>

        messageEl.classList.add('message'); // <p class="message"></p>
        messageEl.textContent = message; // <p class="message">Les adresses jetables ne sont pas admises</p>

        parentElement.prepend(messageEl);
    },

    clear: function (parentElement)
    {
        // On sélectionne tous les éléments avec la classe "message" qui se trouvent
        // dans notre élément "parentElement"
        const oldMessages = parentElement.querySelectorAll('.message');

        // On boucle sur tous les éléments précédemment récupérés pour les retirer
        // du DOM (et donc les masquer)
        for (const oldMessage of oldMessages) {
            // https://developer.mozilla.org/fr/docs/Web/API/Element/remove
            oldMessage.remove();
        }
    }
}
