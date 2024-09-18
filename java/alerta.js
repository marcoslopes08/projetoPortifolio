// ALERTA que aparece no fim do site
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
        <div class="alert-container fade-in">
            <div class="message">Se ainda não viu meus certificados<div class="emoji">😊</div></div>
            <footer class="footer">
                <a href="https://www.linkedin.com/in/marcos-lopes-982616215/details/certifications/" target="_blank" class="clique-aqui-2">clique aqui</a>
            </footer>
        </div>
    `,
    backdrop: false,
    position: 'bottom-start',
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
            popup.style.transition = 'opacity 1s ease';
            popup.style.opacity = '1';  // Aparece suavemente
        }, 50);
        }
    },
    });
}

// Função para aplicar transição suave ao alerta quando desaparecer
function smoothAlertFadeOut() {
    if (isFadingOut) return;
    const popup = document.querySelector('.swal2-scroll-popup');
    if (popup) {
    isFadingOut = true;
    popup.style.transition = 'opacity 3s ease';
    popup.style.opacity = '0';  // Desvanece o alerta ao longo de 3 segundos
    setTimeout(() => {
        Swal.close();
        isFadingOut = false;
    }, 3000);  // Fecha após 3 segundos
    }
}

function checkScroll() {
    const contactSection = document.getElementById('project');
    const body = document.body;
    const html = document.documentElement;

    const totalPageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.scrollY;
    const scrollBottom = scrollY + windowHeight;

    if (contactSection) {
    const contactRect = contactSection.getBoundingClientRect();
    const contactTop = contactRect.top + window.scrollY;
    const contactBottom = contactRect.bottom + window.scrollY;

    // Mostrar o alerta apenas quando o usuário atinge o fim do site (contato)
    if (scrollBottom >= contactBottom && !isAlertShown) {
        showAlert();
        isAlertShown = true;
    }

    // Desvanecer suavemente o alerta quando rolar para cima
    if (scrollY < contactTop && isAlertShown) {
        smoothAlertFadeOut();
        isAlertShown = false;
    }
    }
}

// Adicionar o evento de scroll com a função throttle
window.addEventListener('scroll', throttleScroll(checkScroll, 50));