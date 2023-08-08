import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector('.gallery');
const galleryItemsElement = galleryItems.map((image) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img 
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
    />
    </a>
    </li>`;
}).join('');

galleryElement.innerHTML = galleryItemsElement;
//first way
// let instance;
    
// galleryElement.addEventListener('click', openLightBox);

// function openLightBox(event) {
//     //cancellation of default events
//     event.preventDefault();
//     if (!event.target.nodeName === 'IMG') {
//         return;
//     }
//     instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}"/>`);
//     instance.show();
// }

// document.addEventListener('keydown', closeGallery);
// function closeGallery(event) {
//     if(event.code === 'Escape') instance.close();
// }

//second way
galleryElement.addEventListener('click', showImg);

const instance = basicLightbox.create(`<img/>`, {
    onShow: (instance) => {
        document.addEventListener('keydown', closeImg);
    },
    onClose: (instance) => {
        document.removeEventListener('keydown', closeImg);
    }
});

function showImg(event) {
    event.preventDefault();
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
}

function closeImg(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}