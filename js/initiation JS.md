```markdown
# Cours d'Introduction aux Fonctionnalités JavaScript

---

## Introduction

Bienvenue dans le monde merveilleux du JavaScript ! Imaginez que JavaScript est comme un chef d'orchestre pour une page web. Il prend en charge tous les petits détails qui rendent une page interactive et dynamique, un peu comme un chef d'orchestre qui fait jouer tous les instruments en harmonie.

---

## Les Bases du JavaScript

### `document.addEventListener`

#### Qu'est-ce que c'est ?

Pensez à `document.addEventListener` comme un vigile dans un musée. Son travail est d'attendre que quelque chose se passe, comme un visiteur appuyant sur un bouton d'exposition. Lorsque cela se produit, le vigile alerte l'orchestre pour qu'il commence à jouer une musique spécifique.

#### Exemple

```javascript
document.addEventListener('DOMContentLoaded', function () {
    alert('Le document est entièrement chargé et analysé.');
});
```

### `document.getElementById`

#### Qu'est-ce que c'est ?

Imaginez que `document.getElementById` est comme un guide touristique avec une carte. Il peut rapidement trouver et montrer une attraction spécifique à partir de son numéro ID unique.

#### Exemple

```javascript
const myElement = document.getElementById('myElementId');
console.log(myElement);
```

### `document.querySelectorAll`

#### Qu'est-ce que c'est ?

Pensez à `document.querySelectorAll` comme à un pêcheur avec un filet magique. Il peut lancer son filet dans la mer (le document) et attraper tous les poissons (éléments) qui correspondent à un critère spécifique.

#### Exemple

```javascript
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.style.backgroundColor = 'blue';
});
```

### `localStorage`

#### Qu'est-ce que c'est ?

Imaginez `localStorage` comme une boîte de rangement à la maison. Vous pouvez y stocker des objets importants (données) que vous souhaitez retrouver plus tard, même après avoir quitté la maison (fermé le navigateur).

#### Exemple

```javascript
localStorage.setItem('username', 'JohnDoe');
const username = localStorage.getItem('username');
console.log(username);
```

### `JSON.parse` et `JSON.stringify`

#### Qu'est-ce que c'est ?

Pensez à `JSON.parse` comme un traducteur qui transforme un message codé (JSON) en une langue compréhensible (JavaScript). `JSON.stringify` fait le contraire : il prend une langue compréhensible (JavaScript) et la code (JSON) pour l'envoyer dans une bouteille à la mer.

#### Exemple

```javascript
const user = {
    name: 'John',
    age: 30
};
const userStr = JSON.stringify(user); // Encode en JSON
console.log(userStr);
const userObj = JSON.parse(userStr); // Décode en JavaScript
console.log(userObj);
```

### `createElement` et `appendChild`

#### Qu'est-ce que c'est ?

Imaginez `createElement` comme un menuisier fabriquant une nouvelle chaise (élément). `appendChild` est l'action de placer cette nouvelle chaise dans la salle à manger (le document).

#### Exemple

```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Bonjour le monde !';
document.body.appendChild(newDiv);
```

### `innerHTML`

#### Qu'est-ce que c'est ?

Pensez à `innerHTML` comme un artiste qui peint l'intérieur d'une maison (élément). Il peut y mettre du texte, des images, des couleurs, tout ce qui rend la maison belle et fonctionnelle.

#### Exemple

```javascript
const myDiv = document.getElementById('myDiv');
myDiv.innerHTML = '<p>Ceci est un paragraphe</p>';
```

### `addEventListener('submit', function)`

#### Qu'est-ce que c'est ?

Imaginez un concours où chaque participant doit déposer sa fiche d'inscription dans une boîte. `addEventListener('submit', function)` est comme un juge qui se tient près de la boîte, prêt à vérifier chaque fiche d'inscription lorsqu'elle est déposée.

#### Exemple

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'action par défaut de soumission
    alert('Formulaire soumis!');
});
```

### `preventDefault`

#### Qu'est-ce que c'est ?

Pensez à `preventDefault` comme à un super-héros qui arrête une action indésirable avant qu'elle ne se produise. Si vous ne voulez pas que votre voiture (formulaire) roule avant que vous ayez bouclé votre ceinture (vérifié les données), vous utilisez `preventDefault`.

#### Exemple

```javascript
const link = document.getElementById('myLink');
link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de suivre l'URL
    alert('Lien cliqué, mais action empêchée!');
});
```

### `FormData`

#### Qu'est-ce que c'est ?

Imaginez `FormData` comme un assistant personnel qui recueille toutes les informations que vous avez inscrites sur un formulaire et les met dans un classeur bien organisé.

#### Exemple

```javascript
const form = document.getElementById('myForm');
const formData = new FormData(form);
formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

### `forEach`

#### Qu'est-ce que c'est ?

Pensez à `forEach` comme à un enseignant qui passe en revue chaque élève de la classe pour s'assurer qu'ils ont bien fait leurs devoirs. Il applique une action spécifique à chaque élément d'une liste.

#### Exemple

```javascript
const fruits = ['pomme', 'banane', 'orange'];
fruits.forEach(fruit => {
    console.log(fruit);
});
```

### `classList.add`, `classList.remove`, `classList.toggle`

#### Qu'est-ce que c'est ?

Imaginez `classList.add` comme ajouter une décoration à votre arbre de Noël. `classList.remove` est comme retirer une vieille décoration. `classList.toggle` est comme allumer ou éteindre une guirlande lumineuse.

#### Exemple

```javascript
const element = document.getElementById('myElement');
element.classList.add('nouvelle-classe');
element.classList.remove('ancienne-classe');
element.classList.toggle('active');
```

### `scrollTop`

#### Qu'est-ce que c'est ?

Pensez à `scrollTop` comme un ascenseur dans un immeuble. Il détermine à quel étage (position verticale) vous vous trouvez et vous permet de vous déplacer vers un autre étage.

#### Exemple

```javascript
const scrollableDiv = document.getElementById('scrollableDiv');
scrollableDiv.scrollTop = 100; // Défile à 100 pixels du haut
```

### `keypress`

#### Qu'est-ce que c'est ?

Imaginez `keypress` comme une sonnette. Chaque fois que quelqu'un appuie sur une touche (sonnette), l'événement est déclenché et le son (action) se produit.

#### Exemple

```javascript
document.addEventListener('keypress', function(event) {
    console.log(`Touche pressée : ${event.key}`);
});
```

### `textContent`

#### Qu'est-ce que c'est ?

Pensez à `textContent` comme écrire une lettre à l'intérieur d'une enveloppe. Il définit ou obtient le contenu textuel d'un élément, sans affecter la structure HTML.

#### Exemple

```javascript
const paragraph = document.getElementById('myParagraph');
paragraph.textContent = 'Nouveau contenu textuel';
```

---

## Conclusion

JavaScript est un outil puissant qui permet de rendre les pages web interactives et dynamiques. Comme un chef d'orchestre, il coordonne les différentes parties de votre page pour créer une expérience utilisateur harmonieuse et engageante. En comprenant ces fonctionnalités de base, vous êtes sur la bonne voie pour devenir un maître du JavaScript !

---

Bonne chance et amusez-vous à coder ! Si vous avez des questions, n'hésitez pas à les poser.

---
```

Vous pouvez copier ce texte dans un éditeur de texte et l'enregistrer sous un fichier avec l'extension `.md` (par exemple, `Cours_Introduction_Fonctionnalites_JS.md`).
