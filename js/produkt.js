
const imageArray = [
  'images/bclassic.jpg',
  'images/bsalmiak.jpg',
  'images/bsalt.jpg',
  'images/bsød.jpg'
];

const subimage = document.querySelectorAll('.subimage img');
const mainImage = document.getElementById('mainImage');

subimage.forEach(sub => {
  sub.addEventListener('click', () => {
    const index = parseInt(sub.getAttribute('data-index'));
    mainImage.src = imageArray[index];

    subimage.forEach(t => t.classList.remove('active-sub'));
    sub.classList.add('active-sub');
  });
});