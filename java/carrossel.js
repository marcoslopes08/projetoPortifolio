/* A variável 'counter' começa em 1, então sempre que 'counter for MENOR que 4 (pois são 4 Fotos), 
counter volta pro incio e vira um Looping (chega no Final, volta pro começo e isso sempre se repete) */
/* o tempo de rolagem de cada imagem era de 7000, dimuní para 5 segundos */
type="text/javascript"
    var counter = 1;
    setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    }, 5000);
