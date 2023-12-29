/**
 * Module général du projet. Il sert à démarrer les autres modules
 * et à faire des actions générales sur le site.
 */
const app = {
    init: function () {
        destinations.init();
        newsletter.init();
        slider.init();
        theme.init();
        
    }
}

// En appelant la méthode init() une fois le DOM chargé, cela va permettre de
// s'assurer que le DOM est bien pret pour recevoir les écouteurs d'évènements
document.addEventListener('DOMContentLoaded', app.init);
