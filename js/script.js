const mainElem = document.querySelector("main");
const overElem = document.querySelector(".over-list");
let textHTMLMain = '';
let textHTMLOver = '';

function printPhoto(a) {
    for (let i = 0; i < a.length; i++) {
        let immagine = a[i].url;
        let id = a[i].id;
        let titolo = a[i].title;
        titolo = titolo[0].toUpperCase() + titolo.slice(1);

        textHTMLMain += `
        <div class="ms-card card" data-post-id='${id}'>
            <div class="pin"> <img src="./img/pin.svg" alt=""></div>
            <section> <img src="${immagine}" alt=""></section>
            <p class="desc">${titolo}</p>
        </div>
        `;

        textHTMLOver += `
        <div class="over d-none" data-post-id='${id}'>
            <button type="button" class="btn btn-lg btn-light"> CHIUDI </button>
            <img src="${immagine}" alt="">
        </div>
        `
    }
    mainElem.innerHTML = textHTMLMain;
    overElem.innerHTML = textHTMLOver;
};

function openAndCloseOver() {
    const cardsElem = document.querySelectorAll('.card ');
    const cardsOverElem = document.querySelectorAll('.over');
    const btnsElem = document.querySelectorAll("button");

    cardsElem.forEach(curCardElem => {
        curCardElem.addEventListener("click", function() {
            cardsOverElem.forEach(curOverElem => {
                if(curCardElem.dataset.postId===curOverElem.dataset.postId){
                    console.log(curOverElem);
                    curOverElem.classList.remove("d-none");
                }
                
                btnsElem.forEach(curBtnElem =>{
                    curBtnElem.addEventListener("click", function(){
                        curOverElem.classList.add("d-none");
                    }) 
                })   
            })
        });
   });
};

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {
    let photo = resp.data;
    printPhoto(photo);
    openAndCloseOver();
});