const mainElem = document.querySelector("main");
const overElem = document.getElementById("over-list");
let textHTMLMain = '';
let textHTMLOver ='';

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {


    for (let i = 0; i < 6; i++) {
        let titolo = resp.data[i].title;
        titolo = titolo[0].toUpperCase() + titolo.slice(1);
        console.log(titolo);
        let immagine = resp.data[i].url;
        textHTMLMain += `
        <div class="ms-card card">
            <div class="pin"> <img src="./img/pin.svg" alt=""></div>
            <section> <img src="${immagine}" alt=""></section>
            <p class="desc">${titolo}</p>
        </div>
        `;
        textHTMLOver+=`
        <div class="over">
            <button type="button" class="btn btn-lg btn-light"> CHIUDI </button>
            <img src="${immagine}" alt="">
        </div>
        `
    }
    mainElem.innerHTML = textHTMLMain;
    overElem.innerHTML = textHTMLOver;


});




