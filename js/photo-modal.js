import {bigPictureContainer, renderingBigPicture} from './rendering-photo-fullsize.js';
import {picturesContainer} from './rendering-thumbnails.js';
import {isEscapeKey} from './utils.js';

const bigPictureCloseButton = bigPictureContainer.querySelector('button[type="reset"]');
const pageContent = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const openPhotoModal = (evt) => {
  if (evt.target.tagName === 'IMG' || evt.target.tagName === 'A') {
    pageContent.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');

    bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');

    renderingBigPicture(evt);

    document.addEventListener('keydown', onDocumentKeydown);
  }
};

function closePhotoModal () {
  pageContent.classList.remove('modal-open');
  bigPictureContainer.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

picturesContainer.addEventListener('click', openPhotoModal);

bigPictureCloseButton.addEventListener('click', closePhotoModal);
