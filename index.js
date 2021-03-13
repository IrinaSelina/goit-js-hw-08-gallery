import gallery from './gallery-items.js';
const galleryListRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const modalImgRef = document.querySelector('.lightbox__image');
const closeBtnRef = document.querySelector('.lightbox__button');
const overleyRef = document.querySelector('.lightbox__overlay');
let activeIndex = 0;
const markup = gallery.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}"
            >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
});
galleryListRef.insertAdjacentHTML('beforeend', markup.join(''));
galleryListRef.addEventListener('click', openModal);
window.addEventListener('keydown', onPressArrow);
function onPressArrow(e) {
  if (e.key === 'ArrowLeft' && activeIndex > 0) {
    activeIndex -= 1;
    modalImgRef.src = gallery[activeIndex].original;
  }
  if (e.key === 'ArrowRight' && activeIndex < gallery.length - 1) {
    activeIndex += 1;
    modalImgRef.src = gallery[activeIndex].original;
  }
}
function openModal(e) {
  e.preventDefault();
  if (e.target.localName === 'img') {
    modalRef.classList.add('is-open');
    modalImgRef.src = e.target.dataset.source;
  }
  for (let el of markup) {
    if (el.includes(e.target.src)) {
      activeIndex = markup.indexOf(el);
    }
  }
}
closeBtnRef.onclick = closeModal;
function closeModal() {
  modalRef.classList.remove('is-open');
  modalImgRef.removeAttribute('src');
}
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
overleyRef.addEventListener('click', closeModal);







