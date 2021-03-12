import cart from "./gallery-items.js"

const makeList = document.querySelector('.gallery');
const modalWind = document.querySelector('div.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const buttonClose = document.querySelector('.lightbox__button')
const lightboxOverlay = document.querySelector('.lightbox__overlay');

const makeImageList = cart.reduce((acc, { preview, original, description }) => {
    return acc + `<li class="gallery__item">
  <a
    class="gallery__link"
    src=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
  
}, '')
makeList.insertAdjacentHTML('afterbegin', makeImageList)

makeList.addEventListener('click', ({ target }) => {
  if (target.nodeName != 'IMG') {
    return
  }
  modalWind.classList.toggle('is-open');
  lightboxImage.src = target.dataset.source;
   
})

buttonClose.addEventListener('click', (evn) => {
  if (evn.target.nodeName === "BUTTON") {
     modalWind.classList.remove('is-open');
  lightboxImage.src = ""
  }
 
})
lightboxOverlay.addEventListener('click', (evn) => {
  if (evn.target === evn.currentTarget) {
    modalWind.classList.remove('is-open');
  lightboxImage.src = ""
  }
})
window.addEventListener('keyup', (e) => {
  
  if (e.key === 'Escape') {
    modalWind.classList.remove('is-open');
  lightboxImage.src = ""
  }
})







