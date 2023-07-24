import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');
const galleryItemsElement = galleryItems.map((image) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img 
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
    />
    </a>
    </li>`;
}).join('');

galleryElement.innerHTML = galleryItemsElement;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});
