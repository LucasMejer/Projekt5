
const imageArray = [
  'images/bclassic.jpg',
  'images/bsalmiak.jpg',
  'images/bsalt.jpg',
  'images/bsød.jpg'
];

const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const index = parseInt(thumb.getAttribute('data-index'));
    mainImage.src = imageArray[index];

    thumbnails.forEach(t => t.classList.remove('active-thumb'));
    thumb.classList.add('active-thumb');
  });
});