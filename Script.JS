// ================================
// EFFET 1 : Texte qui se tape tout seul
// ================================
const texteATaper = "Développeuse Full Stack en formation · Essonne, Paris - France";
const elementTexte = document.querySelector("header p");
let index = 0;

// On efface d'abord le texte original
elementTexte.textContent = "";

function taper() {
  if (index < texteATaper.length) {
    elementTexte.textContent += texteATaper[index];
    index++;
    setTimeout(taper, 50); // 50ms entre chaque lettre
  }
}

// On lance l'effet au chargement de la page
taper();


// ================================
// EFFET 2 : Apparition au scroll
// ================================
const sections = document.querySelectorAll("section");

const observateur = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

// On prépare chaque section à être invisible au départ
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observateur.observe(section);
});


// ================================
// EFFET 3 : Message de confirmation au clic
// ================================
const boutonContact = document.querySelector("header a");

boutonContact.addEventListener("click", (e) => {
  e.preventDefault(); // On empêche l'ouverture de l'email
  alert("Merci pour votre message ! Je vous réponds très vite 😊");
});
```

4. Dans le commit message écris :
```
Ajoute les effets JavaScript interactifs
