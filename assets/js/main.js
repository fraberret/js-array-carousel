console.log('It works');

/*Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
*/

//creare un array
let slides =['01.webp','02.webp','03.webp','04.webp','05.webp']
console.log(slides);

//variabile dove salvo la posizione dell immagine attiva
const activeImage= 0

//seleziono dalla DOM 
let slidesElement=document.querySelector('.slides')

//creo un ciclo for per scorrere tra le immagini
for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    
    //creo il markup 
    const slidesMarkup=  `<img class="${ index===activeImage ?'active':''}" src="./assets/img/${slide}" alt="">`
   
    //inserisco il markup nella DOM
    slidesElement.insertAdjacentHTML('beforeend', slidesMarkup)
    
}