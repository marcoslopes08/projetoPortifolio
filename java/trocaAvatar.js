// javaScript para controlar a Troca de Foto Principa por AVATAR - Sobre mim

let time = 5000,
currentImageIndex = 0,
images = document.querySelectorAll('#slider img');
max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove('selected')
        
        currentImageIndex++;
        if (currentImageIndex >= max) {
            currentImageIndex = 0
        }

    images[currentImageIndex].classList.add('selected')
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener('load', start)
