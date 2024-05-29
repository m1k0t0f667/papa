// Get the image element
let mapImage = document.getElementById('mapImage');

// Get the area element
let moment = document.querySelector("area[title='A tout moment']");

// Add mouseover event listener
moment.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS00_HomeMap-atoutmoment.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
moment.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});
let prevenir = document.querySelector("area[title='Prévenir']");

// Add mouseover event listener
prevenir.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS01_map-prevenir.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
prevenir.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});

let depister = document.querySelector("area[title='Dépister']");

// Add mouseover event listener
depister.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS02_map-depister.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
depister.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});

let doutes = document.querySelector("area[title='Doutes']");

// Add mouseover event listener
doutes.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS03_map-doutes.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
doutes.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});

let annonces = document.querySelector("area[title='Annonces']");

// Add mouseover event listener
annonces.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS04_map-annonce.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
annonces.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});
let vivre = document.querySelector("area[title='Vivre']");

// Add mouseover event listener
vivre.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS05_map-vivre.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
vivre.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});


let apres = document.querySelector("area[title='Apres']");
console.log(apres);
// Add mouseover event listener
apres.addEventListener('mouseover', function() {
    console.log("");
    mapImage.src = 'img/GPS10_map-apres.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
apres.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});

let rechute = document.querySelector("area[title='Rechute']");

// Add mouseover event listener
rechute.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS09_map-rechute.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
rechute.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});
let remission = document.querySelector("area[title='Remission']");

// Add mouseover event listener
remission.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS08_map-remission.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
remission.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});


let quotidien = document.querySelector("area[title='Quotidien']");

// Add mouseover event listener
quotidien.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS07_map-organiser.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
quotidien.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});
let essai = document.querySelector("area[title='Essais']");

// Add mouseover event listener
essai.addEventListener('mouseover', function() {
    mapImage.src = 'img/GPS06_map-essais.png';
});

// Add mouseout event listener to change the image back when the mouse leaves the area
essai.addEventListener('mouseout', function() {
    mapImage.src = 'img/GPS99_map-home.png';
});
