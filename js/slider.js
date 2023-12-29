/**
 * Module permettant de gérer le slider
 */
const slider = {
    // On stocke tous les éléments <img> composant mon slider
    imagesElements: [],

    currentPosition: 0,

    init: function () {
        // Etape 1 : On génère les images du slider
        slider.generateImages();

        // On récupère tous les éléments <img> générés précédemment
        slider.imagesElements = document.querySelectorAll('.slider .slider__img');

        // On ajoute les écouteurs d'évènement "click" sur les boutons du slider
        slider.addEvents();
    },

    generateImages: function () {
        // Définition de notre tableau d'images
        const sliderImagesNames = [
            'road.jpg',
            'ocean.jpg',
            'ski.jpg',
            'city.jpg',
            'nature.jpg',
        ];

        // On sélectionne la balise slider qui va contenir nos images
        const slider = document.querySelector('section.slider');

        let isFirstPass = true;

        // Boucle sur le tableau d'images à afficher
        for (const imgName of sliderImagesNames) {
            // On crée une nouvelle balise img
            const newImg = document.createElement('img'); // <img>
            // On lui donne le chemin vers le fichier image
            newImg.src = 'img/' + imgName; // <img src="img/...">
            // On lui applique les classes qui vont bien
            newImg.classList.add('slider__img'); // <img src="img/..." class="slider__img">

            if (isFirstPass === true) {
                newImg.classList.add('slider__img--current');
            }

            // Insère l'élément newImg à la fin de notre élément slider
            slider.append(newImg);
            isFirstPass = false;
        }
    },

    addEvents: function () {
        // On sélectionne les boutons précédent et suivant
        const sliderButtons = document.querySelectorAll('.slider__btn');

        // On place un écouteur d'évènement sur le bouton précédent
        const previousSliderButton = sliderButtons[0];
        previousSliderButton.addEventListener('click', slider.handleClickPreviousSlide);

        // On place un écouteur d'évènement sur le bouton suivant
        const nextSliderButton = sliderButtons[1];
        nextSliderButton.addEventListener('click', slider.handleClickNextSlide);
    },

    // Cette méthode est appelée lorsqu'on clique sur le bouton précédent.
    // Elle permet de calculer la nouvelle position de l'image courante et de l'afficher.
    handleClickPreviousSlide: function () {
        slider.goToSlide(slider.currentPosition - 1);
    },

    handleClickNextSlide: function () {
        slider.goToSlide(slider.currentPosition + 1);
    },

    goToSlide: function (newPosition) {
        slider.imagesElements[slider.currentPosition].classList.remove('slider__img--current');

        slider.currentPosition = newPosition;

        // Si on est à la première image et qu'on veut la précédente,
        // on masque la première et on affiche la dernière
        if (slider.currentPosition < 0) {
            slider.currentPosition = slider.imagesElements.length - 1;
        }

        // Si on est à la dernière image et qu'on veut la suivante,
        // on masque la dernière et on affiche la première
        if (slider.currentPosition > slider.imagesElements.length - 1) {
            slider.currentPosition = 0;
        }

        slider.imagesElements[slider.currentPosition].classList.add('slider__img--current');
    }
}
