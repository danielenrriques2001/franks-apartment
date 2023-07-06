let images = [
    '/franks-1.webp', 
    '/franks-2.webp', 
    '/franks-3.webp',
    '/franks-4.webp',
    '/franks-5.webp',
    '/franks-6.webp',
    '/franks-7.webp',
    '/franks-8.webp',
    '/franks-9.webp',
    '/franks-10.webp'
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

