# Les sélecteurs en JS

## Manières historiques de sélectionner des éléments dans la page

- `document.getElementsByTagName('h1')` : récupère tous les éléments de la balise donnée en paramètre. **Renvoie toujours un tableau d'éléments**.
- `document.getElementsByClassName('btn')` : récupère tous les éléments selon la classe donnée en paramètre. **Renvoie toujours un tableau d'éléments !**
- `document.getElementById('page-title')` : récupère l'élément selon l'id qu'on lui a donné en paramètre. **Renvoie toujours un seul élément**.

## Les manières plus actuelles

- `document.querySelector('h1')` : récupère un et un seul élément selon le **sélecteur CSS** donné en paramètre (donc en ajoutant un . pour les classes, un # pour les id etc). **Renvoie uniquement le premier élément rencontré !**
- `document.querySelectorAll('.btn')` : récupère **tous** les éléments selon un **sélecteur CSS**, et ce sous forme d'un tableau contenant tous les éléments, meme si un seul (ou aucun) élément est trouvé.
