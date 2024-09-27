let isAlertShown = false;
let isFadingOut = false;

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
    
    if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        const contactTop = contactRect.top + window.scrollY;
        const contactBottom = contactRect.bottom + window.scrollY;
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Mostrar o alerta assim que a seção "contato" é visível
        if (scrollY + windowHeight >= contactTop && !isAlertShown) {
            setTimeout(() => {
                showAlert();
                isAlertShown = true;
            }, 50);
        }

        // Ocultar o alerta quando rolar para cima
        if (scrollY + windowHeight < contactTop && isAlertShown) {
            smoothAlertFadeOut();
            isAlertShown = false;
        }
    }
}

// Adicionar o evento de scroll para verificar quando exibir o alerta
window.addEventListener('scroll', checkScroll);

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
