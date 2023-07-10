let images = [
    '/franks-1.jpg',
    '/franks-2.jpg',
    '/franks-3.jpg',
    '/franks-4.jpg',
    '/franks-5.jpg',
    '/franks-6.jpg',
    '/franks-7.jpg',
    '/franks-8.jpg',
    '/franks-9.jpg',
];

let index = 0;
const imgElement = document.querySelector('#image');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};

