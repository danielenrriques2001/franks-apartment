let images = [
    '/franks-16.jpg',
    '/franks-11.jpg',
    '/franks-7.jpg',

];

let index = 0;
const imgElement = document.querySelector('#image');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 3000);
};

