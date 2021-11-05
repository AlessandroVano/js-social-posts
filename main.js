/**
 * Ricreiamo un feed social aggiungendo al layout di base fornito il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
 */


// 1. creazione struttura di array di oggetti
// 2. richiamare il container del post tramite una costante
// 3. luppiamo per generare il tutto (creazione funzione con ciclo for)
// 4. generiamo tutti e 5 i post




// 1. creazione struttura di array di oggetti
 const posts = [
     {
        profile: 'https://unsplash.it/300/300?image=15',
        author: 'Phil Mangione',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        numLike: '80',
    },
    {
        profile: 'https://unsplash.it/300/300?image=15',
        author: 'Phil Mangione',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        numLike: '80',
    },
    {
        profile: 'https://unsplash.it/300/300?image=15',
        author: 'Phil Mangione',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        numLike: '80',
    },
    {
        profile: 'https://unsplash.it/300/300?image=15',
        author: 'Phil Mangione',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        numLike: '80',
    },
    {
        profile: 'https://unsplash.it/300/300?image=15',
        author: 'Phil Mangione',
        time: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        numLike: '80',
    },
    
   
     
 ]


 console.table(posts)



 // 2. richiamare il container del post tramite una costante
 const postsContainer = document.querySelector('.posts-list');


  getFullPosts(posts, postsContainer);





 /**************************************************************
                           FUNZIONI
  **************************************************************/

function getFullPosts(posts, postsContainer){
    for(let i = 0; i <posts.length; i++ ) {
        const numPost = posts[i];
        postsContainer.innerHtml += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${numPost.profile}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${numPost.author}</div>
                        <div class="post-meta__time">${numPost.time}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${numPost.text}</div>
            <div class="post__image">
                <img src="${numPost.image}">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numPost.numLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;
    }
}
 