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

        // Mostrar o alerta somente se a rolagem estiver completa até o final da seção "contato"
        if (scrollY + windowHeight >= contactBottom && !isAlertShown) {
            setTimeout(() => {
                showAlert();
                isAlertShown = true;
            }, 50);
        }

        // Ocultar o alerta quando sair da seção contato
        if (scrollY + windowHeight < contactTop && isAlertShown) {
            smoothAlertFadeOut();
            isAlertShown = false;
        }
    }
}

// Adicionar o evento de scroll com a função throttle
window.addEventListener('scroll', throttleScroll(checkScroll, 50));

// Função para rolar suavemente até o final do site
document.querySelector('.botaoLuminoso').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});
