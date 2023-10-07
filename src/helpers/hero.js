let images = [
    '/franks-1.jpg',
    '/franks-16.jpg',
    '/franks-11.jpg',
    '/franks-7.jpg',

];

let index = 0;
const backgroundHero = document.querySelector('.bg-div');
document.addEventListener('DOMContentLoaded', () => {
    setInterval(FadeImage, 4000);
})

// function change() {
//    imgElement.src = images[index];
//    index > 1 ? index = 0 : index++;
// }

// window.onload = function () {
//     setInterval(change, 5000);
// };


      let current = 0;
      function FadeImage() {
         current++;
         if (current >= images.length) current = 0;
         backgroundHero.style.backgroundImage = `url(${images[current]})`;
      }