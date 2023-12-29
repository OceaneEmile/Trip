# Actions sur les éléments du DOM

## Modifier une élément du DOM

Une fois sélectionné, on peut accéder ou modifier certaines propriétés sur élément de DOM sélectionné.

```js
const element = document.querySelector('#mon-element');
```

- `element.id` : permet de lire ou de modifier l'attribut HMTL "id"
- `element.className` : permet de lire/modifier l'attribut HTML "class" sous forme de chaine de caractères.
- `element.classList` : permet de lire/modifier l'attribut HTML "class" sous forme de tableau.
- `element.classList.add('ma-classe')` : permet d'ajouter une classe
- `element.classList.remove('ma-classe')` : permet de supprimer une classe
- `element.classList.contains('ma-classe')` : permet de vérifier si une classe donnée en paramètre a été appliquée à la balise element.
- `element.classList.toggle('ma-classe')` : permet d'ajouter la classe donnée en paramètre si elle n'existe pas sur l'element, mais si elle existe déjà, ça la supprime.
- `element.textContent('Mon super contenu')` : permet d'ajouter du texte dans la balise element. **Attention : le HTML n'est pas interprété !**
- `element.innerHTML('Mon super contenu')` : permet d'ajouter du HTML dans la balise element. **Attention : ça peut rendre le site vulnérable aux failles XSS.**

## Créer un élément du DOM

Il est possible de créer directement en JS un élément du DOM via le code suivant :

```js
const newImg = document.createElement('img');
newImg.src = 'img/ocean.jpg';
newImg.classList.add('slider__img');
```

### Insérer un élément dans le DOM (et donc dans le HTML)

```js
const slider = document.querySelector('section.slider');

slider.prepend(newImg); // Insère l'élément newImg au début de notre élément slider
slider.append(newImg); // Insère l'élément newImg à la fin de notre élément slider
```