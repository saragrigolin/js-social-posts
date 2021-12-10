/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
*/

//array post
moment.defaultFormat = "DD.MM.YYYY HH:mm";

const post = [
    {
        author: 'Wayne Barnett',
        profilePic: getRndInteger(1, 100),
        date: moment('20.07.2018 09:19', moment.defaultFormat).fromNow(),
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: getRndInteger(1, 100),
        likes: getRndInteger(1, 100),
    },
    {
        author: 'Angela Caroll',
        profilePic: getRndInteger(1, 100),
        date: moment('20.11.2021 09:19', moment.defaultFormat).fromNow(),
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: getRndInteger(1, 100),
        likes: getRndInteger(1, 100),
    },
    {
        author: 'Walter Gordon',
        profilePic: getRndInteger(1, 100),
        date: moment('10.12.2021 09:19', moment.defaultFormat).fromNow(),
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: getRndInteger(1, 100),
        likes: getRndInteger(1, 100)
    },
    {
        author: 'Angela Lopez',
        profilePic: getRndInteger(1, 100),
        date: moment('5.12.2021 09:19', moment.defaultFormat).fromNow(),
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: getRndInteger(1, 100),
        likes: getRndInteger(1, 100),
    },
    
];


let containerPosts = document.getElementById('container');
containerPosts.innerHTML = '';

for (let index = 0; index < post.length; index++) {
    let element = post[index];

    let templatePost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=${element.profilePic}" alt="${element.author}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author}</div>
                        <div class="post-meta__time">${element.date}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${element.text}</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=${element.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
        `;
    
    containerPosts.innerHTML += templatePost;

    let likeButton = document.querySelector('.like-button');
    console.log(likeButton);
    likeButton.addEventListener('click', function () {
        likeButton.classList.add('like-button--liked');
        let containerLike = (document.getElementById('like-counter-1'));
        let numberLike = parseInt(containerLike.innerText);
        numberLike = numberLike + 1;
        containerLike.innerHTML = numberLike;
        console.log(numberLike);
    })

}



//funzione per creare i post
function makePost (array, container) {
    container.innerHTML = '';
    
    let element = '';
    for (let index = 0; index < array.length; index++) {
        element = array[index];

        const templatePost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=${element.profilePic}" alt="${element.author}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author}</div>
                        <div class="post-meta__time">${element.date}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${element.text}</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=${element.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += templatePost;
        console.log(element.likes);
    }
    
}




//funzione per i numeri random delle immagini e i likes
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}