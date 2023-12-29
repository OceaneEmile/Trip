const theme = {
    init: function () {
        // On sélectionne le bouton qui permet de switcher de thème
        const themeSwitchButton = document.querySelector('#theme-switch');

        // On place un écouteur d'évènement sur le bouton
        themeSwitchButton.addEventListener('click', theme.handleToggleTheme);
        
        
        
        
        
    },
    handleToggleTheme: function() {
        // On sélectionne l'élément <body>
        const body = document.querySelector('body');
        // On retire la classe 'theme-dark' si elle existe, sinon on l'ajoute
        body.classList.toggle('theme-dark');

    
    },
    handleThemeColorclick: function(){

        const themeButton = document.querySelector('#theme-button');
        themeButton.addEventListener('click', theme.changeColorTheme);
        

    },

    changeColorTheme :function(){
       document.getElementById('theme-green').addEventListener('click', event => {
            event.currentTarget.style.backgroundColor="green"    });

            const body = document.querySelector('body');
            
            body.classList.toggle('theme-green');
            
            if (body.classList.contains('theme-dark')) {
          body.classList.remove('theme-dark');
              } else {
          body.classList.add('theme-green');
         // On crée une nouvelle balise img
         const newLogo = document.createElement('img'); // <img>
         // On lui donne le chemin vers le fichier image
         newLogo.src = 'img/' + imgName; // <img src="img/...">
         // On lui applique les classes qui vont bien
         newLogo.classList.add('logo__image'); // <img src="img/..." class="slider__img">
          }
              
            
        }

    


    /**
     * Actions à réaliser lors du clic sur le bouton de switch du thème

/**
 * Pose des écouteurs: 

Je vais selectionner les pastilles de couleurs et leur ajouter un evenement au click
et utiliser la méthode handleThemeColorClick()

     */



/**const themecolors = {
    init: function () {
        // je selectionne la couleur
       const menuColorSwitcher = document.querySelector('#menu__color-switcher');
        button.menuColorSwitcher = document.querySelectorAll('.button');



        // On place un écouteur d'évènement sur le bouton
        menuColorSwitcher.addEventListener('click',themecolors.handleThemeColorClick;

      
        //Action lors du clic sur le lien du menu 

        handleThemeColorClick : function(event){
            event.preventDefault();

        //j'ajoute la class  them button au menu
        menuColorSwitcher.addEventListener.classList.add('theme-button')



        }
       



orClick);
    },
    console.console.log();

        //Realiser une action au clic

        handleThemeColorClick: function(themeButton){
           

        },
    
        //appliquer id à une nouvelle méthode
    
        changeColorTheme :function(){
            const body = document.querySelector('body');
            body.classList.remove('theme-green');
        }

    
    }
*/}
