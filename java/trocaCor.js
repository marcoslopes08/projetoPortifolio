// Função para aplicar a animação de cor e sombra letra por letra
function textColorLoop(element, color1, color2, shadow1, shadow2, interval) {
    var chars = element.getElementsByTagName('span'); // Seleciona as letras como spans
    var currentCharIndex = 0; // Índice da letra atual

    // Função que altera a cor e sombra da letra atual
    function changeColor() {
        // Se a letra atual existe, altere a cor e a sombra
        if (currentCharIndex < chars.length) {
            var currentChar = chars[currentCharIndex];

            if (currentChar.style.color === color1) {
                currentChar.style.color = color2; // Troca para a segunda cor
                currentChar.style.textShadow = shadow2; // Troca para a segunda sombra
            } else {
                currentChar.style.color = color1; // Troca para a primeira cor
                currentChar.style.textShadow = shadow1; // Troca para a primeira sombra
            }
            currentCharIndex++; // Move para a próxima letra
        } else {
            // Reinicia o índice ao final
            currentCharIndex = 0;
        }
    }

    // Executar a mudança de cor e sombra em um intervalo definido
    setInterval(changeColor, interval);
}

// Função para quebrar o texto em spans, letra por letra
function wrapTextWithSpan(element) {
    var text = element.innerHTML;
    var newText = '';
    var chars = text.length;

    for (var i = 0; i < chars; i++) {
        newText += '<span>' + text.charAt(i) + '</span>'; // Envolve cada letra em <span>
    }

    element.innerHTML = newText; // Atualiza o HTML com as letras envoltas em spans
}

// Função para aplicar a animação a todos os elementos com as classes custom-text e custom-text-2
function applyTextEffects() {
    var textElements = document.querySelectorAll('.custom-text, .custom-text-2');

    textElements.forEach(function (element) {
        wrapTextWithSpan(element); // Envolve as letras em spans

        // Aplica o efeito de troca de cor e sombra baseado na classe
		// Troca de cor e sombra letra por letra (De Branco para Rosa), a cada 300ms
        if (element.classList.contains('custom-text')) {
            textColorLoop(element, 'white', '#f9004d', 'none', '0 0 5px #f9004d', 300);
		// Troca de cor e sombra letra por letra (De Branco para Cinza), a cada 100ms
        } else if (element.classList.contains('custom-text-2')) {
            textColorLoop(element, 'white', '#fcfc', 'none', '0 0 2px #fcfc', 100);
        }
    });
}

// Chama a função ao carregar a página
window.onload = applyTextEffects;
