// Função para aplicar a animação de cor e sombra letra por letra
function textColorLoop(element, color1, color2, shadow1, shadow2, interval) {
    var chars = element.getElementsByTagName('span'); // Seleciona as letras como spans
    var currentCharIndex = 0; // Índice da letra atual

    function changeColor() {
        if (currentCharIndex < chars.length) {
            var currentChar = chars[currentCharIndex];
            currentChar.style.color = currentChar.style.color === color1 ? color2 : color1;
            currentChar.style.textShadow = currentChar.style.textShadow === shadow1 ? shadow2 : shadow1;
            currentCharIndex++;
        } else {
            currentCharIndex = 0;
        }
    }

    setInterval(changeColor, interval);
}

// Função para quebrar o texto em spans
function wrapTextWithSpan(element) {
    var text = element.innerHTML;
    var newText = '';
    for (var i = 0; i < text.length; i++) {
        newText += `<span>${text.charAt(i)}</span>`;
    }
    element.innerHTML = newText;
}

// Aplicar animação de texto sem interferir no GIF de background
function applyTextEffects() {
    var textElements = document.querySelectorAll('.custom-text, .custom-text-2');
    textElements.forEach(function (element) {
        wrapTextWithSpan(element);
        if (element.classList.contains('custom-text')) {
            textColorLoop(element, 'white', '#f9004d', 'none', '0 0 5px #f9004d', 600);
        } else if (element.classList.contains('custom-text-2')) {
            textColorLoop(element, 'white', 'gray', 'none', '0 0 2px yellow', 300);
        }
    });
}

// Certificar que o script roda após o carregamento
window.addEventListener('load', applyTextEffects);
