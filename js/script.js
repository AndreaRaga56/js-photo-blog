const mainElem = document.querySelector("main");
let textHTML ='';

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) =>{
    
    for(let i=0; i<6; i++){
        let titolo =resp.data[i].title;
        titolo = titolo[0].toUpperCase() + titolo.slice(1);
        console.log(titolo);
        let immagine = resp.data[i].url;
        textHTML +=`
        <div class="ms-card card">
            <div class="pin"> <img src="./img/pin.svg" alt=""></div>
            <section> <img src="${immagine}" alt=""></section>
            <p class="desc">${titolo}</p>
        </div>
        `;
    }
    mainElem.innerHTML=textHTML;

});




