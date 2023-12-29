/**
 * Module gérant toutes les fonctionnalités liées à la newsletter
 */
const newsletter = {
    newsletterAside: null,

    newsletterForm: null,

    forbiddenDomains: [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    init: function () {
        // On sélectionne les éléments du DOM sur lesquels appliquer des écouteurs d'évènement
        const newsletterLink = document.querySelector('#newsletter-link');
        const newsletterCloseButton = document.querySelector('.newsletter .newsletter__close');

        newsletter.newsletterAside = document.querySelector('.newsletter');

        // On applique les écouteurs d'évènement
        newsletterLink.addEventListener('click', newsletter.handleClickOnNewsletterLink);
        newsletterCloseButton.addEventListener('click', newsletter.handleClickOnNewsletterCloseButton)

        // ### FORMULAIRE ###

        // On sélectionne le formulaire
        newsletter.newsletterForm = document.querySelector('.newsletter form');

        // On applique un écouteur d'évènement sur le formulaire
        newsletter.newsletterForm.addEventListener('submit', newsletter.handleOnFormSubmit);
    },

    /**
     * Actions lors du clic sur le lien Newsletter
     */
    handleClickOnNewsletterLink: function (event) {
        // On stoppe le comportement par défaut de l'évènement (ici un rechargement de page)
        event.preventDefault();

        // On ajoute la classe "newsletter--on" sur l'encart newsletter
        newsletter.newsletterAside.classList.add('newsletter--on');
    },

    /**
     * Actions lors du clic sur le bouton de fermeture de l'encart newsletter
     */
    handleClickOnNewsletterCloseButton: function ()
    {
        // On retire la classe "newsletter--on" sur l'encart newsletter
        newsletter.newsletterAside.classList.remove('newsletter--on');
    },

    handleOnFormSubmit: function (event) {
        // On stoppe le comportement par défaut, à savoir ici : l'envoi du formulaire
        event.preventDefault();

        // On sélectionne l'élément <input> pour récupérer la valeur saisie par le user
        const inputEl = newsletter.newsletterForm.querySelector('input');
        const inputValue = inputEl.value;

        // On vérifie si l'adresse email saisie est interdite
        const isForbidden = newsletter.isForbiddenEmail(inputValue);

        // Si l'adresse email est interdite, alors on affiche le message d'erreur
        if (isForbidden) {
            // On appelle le module dédié à la création des messages
            messages.create('Les adresses jetables ne sont pas admises', newsletter.newsletterAside);
        }
    },

    /**
     * Vérifie si l'adresse email donnée en entrée est interdite
     *
     * @param {String} email Adresse email à tester
     * @returns True si l'adresse email contient un domaine interdit, false sinon
     */
    isForbiddenEmail: function (email) {
        // On boucle sur le tableau contenant tous les domaines interdits
        for (const domain of newsletter.forbiddenDomains) {
            // Si l'adresse email saisie par le user contient un domaine interdit,
            // on affiche un message d'erreur
            if (email.includes(domain)) {
                return true;
            }
        }

        return false;
    }

}
