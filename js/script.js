// Elemento main dove inserire le carte
const mainElem = document.querySelector("main");
// Elemento over dove inserire gli over
const overElem = document.querySelector(".over-list");

let textHTMLMain = '';
let textHTMLOver = '';

// Funzione per mostrare le card
function printPhoto(a) {
    // Iterazion su array di  oggetti
    for (let i = 0; i < a.length; i++) {
        // Estrapolazione e lavorazione dei dati utili
        let {url, id, title} = a[i];
        title = title[0].toUpperCase() + title.slice(1);
        
        // Costruzione del codice da inserire nel main
        // ${url} non più funzionante perchè hanno buttato giù il sito
        textHTMLMain += `
        <div class="ms-card card" data-post-id='${id}'>
            <div class="pin"> <img src="./img/pin.svg" alt=""></div>
            <section> <img src="https://placehold.co/600x600/orange/white" alt=""></section>
            <p class="desc">${title}</p>
        </div>
        `;

        // Costruzione del codice da inserire nell'over
        // ${url} non più funzionante perchè hanno buttato giù il sito
        textHTMLOver += `
        <div class="over d-none" data-post-id='${id}'>
            <button type="button" class="btn btn-lg btn-light"> CHIUDI </button>
            <img src="https://placehold.co/600x600/orange/white" alt="">
        </div>
        `
    }

    // Inserimento del codice negli elementi
    mainElem.innerHTML = textHTMLMain;
    overElem.innerHTML = textHTMLOver;
};

// Funzione per mostrare o nascondere gli over
function openAndCloseOver() {
    // Array degli elementicard
    const cardsElem = document.querySelectorAll('.card ');

    // Array degli elementi Over
    const cardsOverElem = document.querySelectorAll('.over');

    // Bottone di chiusura
    const btnsElem = document.querySelectorAll("button");

    // Iterazione per il click
    cardsElem.forEach(curCardElem => {

        // Listener del click per ogni card Elem
        curCardElem.addEventListener("click", function() {
            
            // Attivazione overElem corrispondente
            cardsOverElem.forEach(curOverElem => {
                if(curCardElem.dataset.postId===curOverElem.dataset.postId){
                    // console.log(curOverElem);
                    curOverElem.classList.remove("d-none");
                }
                
                // Chiusura con bottone
                btnsElem.forEach(curBtnElem =>{
                    curBtnElem.addEventListener("click", function(){
                        curOverElem.classList.add("d-none");
                    }) 
                })   
            })
        });
   });
};

// Chiamata API con Axios
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {
    // Lavorazione risposta API
    let photo = resp.data;
    // Inserisci card e over (nascosti) in HTML
    printPhoto(photo);
    // Attiva gli over in relazione alle card
    openAndCloseOver();
});