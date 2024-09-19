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
             target="_blank" class="clique-aqui-2" style="outline: none;">clique aqui</a>
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
          popup.style.opacity = '1'; // Aparece suavemente
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
    popup.style.transition = 'opacity 1s ease';
    popup.style.opacity = '0'; // Desvanece o alerta ao longo de 3 segundos
    setTimeout(() => {
      Swal.close();
      isFadingOut = false;
    }, 1000); // Fecha após 1 segundo
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

    // Mostrar o alerta quando ultrapassa a seção project
    if (scrollY + windowHeight >= contactBottom && !isAlertShown) {
      showAlert();
      isAlertShown = true;
    }

    // Ocultar o alerta quando sai da seção project
    if (scrollY + windowHeight < contactTop && isAlertShown) {
      smoothAlertFadeOut();
      isAlertShown = false;
    }
  }
}

// Adicionar o evento de scroll com a função throttle
window.addEventListener('scroll', throttleScroll(checkScroll, 50));
