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

// Função para aplicar a animação de cor e sombra na string inteira, com três cores
function textColorLoopWholeString(element, color1, color2, color3, shadow1, shadow2, shadow3, interval) {
    let currentColorIndex = 0;
    const colors = [color1, color2, color3]; // Array com as cores
    const shadows = [shadow1, shadow2, shadow3]; // Array com as sombras

    function changeColor() {
        element.style.color = colors[currentColorIndex];
        element.style.textShadow = shadows[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length; // Alterna entre as três cores
    }

    setInterval(changeColor, interval);
}

// Função para aplicar as animações de texto, incluindo a lógica para .custom-text-3 com três cores
function applyTextEffects() {
    var textElements = document.querySelectorAll('.custom-text, .custom-text-2, .custom-text-3');
    textElements.forEach(function (element) {
        if (element.classList.contains('custom-text')) {
            // Animação para custom-text (letra por letra)
            wrapTextWithSpan(element);  // Adiciona spans para animação letra por letra
            textColorLoop(element, 'white', '#f9004d', 'none', '0 0 5px #f9004d', 600);
        } else if (element.classList.contains('custom-text-2')) {
            // Animação para custom-text-2 (letra por letra)
            wrapTextWithSpan(element);  // Adiciona spans para animação letra por letra
            textColorLoop(element, 'white', 'gray', 'none', '0 0 2px yellow', 300);
        } else if (element.classList.contains('custom-text-3')) {
            // Animação para custom-text-3 (toda a string de uma só vez) com três cores e sombras
            textColorLoopWholeString(element, 'white', 'gray', '#f9004d', '0 0 2px yellow', '0 0 2px yellow', '0 0 2px #f9004d', 5000);
        }
    });
}

// Certificar que o script roda após o carregamento
window.addEventListener('load', applyTextEffects);
