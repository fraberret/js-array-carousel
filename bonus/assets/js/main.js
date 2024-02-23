console.log('It works');

/*
MILESTONE 1
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

//creare un array
let slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']
console.log(slides);

//variabile dove salvo la posizione dell immagine attiva
let activeImage = 0

//seleziono dalla DOM 
let slidesElement = document.querySelector('.slides')

//creo un ciclo for per scorrere tra le immagini
for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];

    //creo il markup 
    const slidesMarkup = `<img class="${index === activeImage ? 'active' : ''}" src="./assets/img/${slide}" alt="">`

    //inserisco il markup nella DOM
    slidesElement.insertAdjacentHTML('beforeend', slidesMarkup)

}
//quando clicco freccia in alto
document.querySelector('.button_up').addEventListener('click', function () {
    //aumento il valore di active image
    activeImage++
    console.log(activeImage);

    //se scorrendo arriva alla fine ricomincia
    if (activeImage > slides.length - 1) {
        activeImage = 0

    }
    
    //salvo la classe active dalla DOM
    const currentImage = document.querySelector('img.active')
    //console.log(currentImage);
    
    //rimuovo la classe active dalla DOM
    currentImage.classList.remove('active')
    
    //salvo la lista delle immagini dalla DOM
    const allSlides = document.querySelectorAll('.slides img')
    
    //aggiungo la classe active
    allSlides[activeImage].classList.add('active')
})


//quando clicco fraccia in basso
document.querySelector('.button_down').addEventListener('click', function () {

    //aumento il valore di active image
    activeImage--
    console.log(activeImage);

    //se scorrendo arriva alla fine ricomincia
    if (activeImage < 0) {
        activeImage = slides.length - 1

    }
    //salvo la classe active dalla DOM
    const currentImage = document.querySelector('img.active')
    //console.log(currentImage);

    //rimuovo la classe active dalla DOM
    currentImage.classList.remove('active')
    
    //salvo la lista delle immagini dalla DOM
    const allSlides = document.querySelectorAll('.slides img')
    
    //aggiungo la classe active
    allSlides[activeImage].classList.add('active')

})