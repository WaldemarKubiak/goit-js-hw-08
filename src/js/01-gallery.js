import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryArrRef = document.querySelector('.gallery');
const picturesMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a>`
  )
  .join('');

galleryArrRef.insertAdjacentHTML('afterbegin', picturesMarkup);

// SimpleLightbox library use

new SimpleLightbox('.gallery a', {
  captionType: 'alt',
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(galleryItems);
