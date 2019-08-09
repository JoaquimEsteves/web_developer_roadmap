import Puppy from './img/puppy_better_quality.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Picture of a cute puppy!',
    img.width = 300;
    img.src = Puppy;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;