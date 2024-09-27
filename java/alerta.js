let isAlertShown = false;
let isFadingOut = false;

// Função throttle para limitar a execução do código
function throttleScroll(callback, delay) {
    let throttleTimeout = null;
    return function () {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                callback();
                throttleTimeout = null;
            }, delay);
        }
    };
}

// Função para exibir o alerta suavemente
function showAlert() {
    Swal.fire({
        html: `
        <div class="swal2-scroll-popup fade-in">
            <div class="emoji">😊</div>Se ainda não viu meus certificados <br><br>
            <a href="https://www.linkedin.com/in/marcos-lopes-982616215/details/certifications/"
                target="_blank" class="clique-aqui-2" style="outline: none; color: #f9004d !important;">clique aqui</a>
        </div>
        `,
        backdrop: false,
        position: window.innerWidth <= 1024 ? 'center' : 'bottom-start', // Centraliza no modo responsivo
        customClass: {
            popup: 'swal2-scroll-popup',
        },
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
            const popup = document.querySelector('.swal2-popup');
            if (popup) {
                popup.style.opacity = '0';
                setTimeout(() => {
                    popup.style.transition = 'opacity .5s ease';
                    popup.style.opacity = '1';
                }, 50);
            }
        },
    });
}

// Função para aplicar transição suave ao alerta quando desaparecer
function smoothAlertFadeOut() {
    if (isFadingOut) return;
    const popup = document.querySelector('.swal2-popup');
    if (popup) {
        isFadingOut = true;
        popup.style.transition = 'opacity .5s ease';
        popup.style.opacity = '0';
        setTimeout(() => {
            Swal.close();
            isFadingOut = false;
        }, 1000);
    }
}

// Função para verificar o scroll e exibir/ocultar o alerta
function checkScroll() {
    const contactSection = document.getElementById('contato');
    if (!contactSection) return;  // Verifica se a seção existe

    const contactRect = contactSection.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    const contactTop = contactRect.top + scrollY;
    const contactBottom = contactRect.bottom + scrollY;

    // Verificar se estamos na seção de contato ou abaixo dela
    if (scrollY + windowHeight >= contactBottom && !isAlertShown) {
        setTimeout(() => {
            showAlert();
            isAlertShown = true;
        }, 50);
    }

    // Verificar se o usuário rola para cima antes de atingir a seção contato
    if (scrollY + windowHeight < contactTop && isAlertShown) {
        smoothAlertFadeOut();
        isAlertShown = false;
    }
}

// Detectar eventos de rolagem em dispositivos móveis
function handleTouchScroll() {
    // Evento de rolagem em dispositivos com touchscreen
    window.addEventListener('touchmove', throttleScroll(checkScroll, 50), { passive: true });
    window.addEventListener('touchend', throttleScroll(checkScroll, 50), { passive: true });
}

// Adicionar o evento de scroll com a função throttle
window.addEventListener('scroll', throttleScroll(checkScroll, 50));

// Detectar quando o usuário está usando touchscreen
handleTouchScroll();

// Função para rolar suavemente até a seção "contato" e exibir o alerta ao clicar no botão
document.querySelector('.botaoLuminoso').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });

    // Adicionar um pequeno delay para garantir que o alerta apareça após a rolagem suave
    setTimeout(() => {
        showAlert();
        isAlertShown = true;
    }, 1000); // Delay de 1 segundo para sincronizar com a rolagem
});

// Estilo para garantir que o alerta tenha a prioridade visual
const style = document.createElement('style');
style.innerHTML = `
    .swal2-scroll-popup {
        z-index: 9999 !important; /* Garante que o alerta esteja no topo */
    }

    .botaoLuminoso {
        position: relative;
        z-index: 1; /* Certifica que o botão não sobrepõe o alerta */
    }
`;
document.head.appendChild(style);
