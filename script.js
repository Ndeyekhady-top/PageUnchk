//  Menu mobile 
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
btnMenu.addEventListener('click', () => nav.classList.toggle('ouvert'));

//  Carrousel 
const slides = document.querySelectorAll('#carrousel .slide');
let courant = 0;
let minuteur;

function afficher(index) {
  slides[courant].classList.remove('actif');
  courant = (index + slides.length) % slides.length;
  slides[courant].classList.add('actif');
}

function demarrerAuto() {
  clearInterval(minuteur);
  minuteur = setInterval(() => afficher(courant + 1), 5000);
}

document.getElementById('suiv').addEventListener('click', () => { afficher(courant + 1); demarrerAuto(); });
document.getElementById('prec').addEventListener('click', () => { afficher(courant - 1); demarrerAuto(); });
demarrerAuto();

//  Bouton « retour en haut » 
const haut = document.getElementById('haut');
window.addEventListener('scroll', () => {
  haut.classList.toggle('visible', window.scrollY > 300);
});
haut.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

//  Barre de recherche 
document.getElementById('btn-recherche').addEventListener('click', () => {
  const terme = prompt('Rechercher sur le site :');
  if (terme) alert('Recherche : ' + terme);
});