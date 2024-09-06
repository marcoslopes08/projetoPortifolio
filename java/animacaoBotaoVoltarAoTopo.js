// jQuery que faz o Botão Voltar ao Topo aparecer/desaparecer durante a rolagem na página
jQuery(document).ready(function() {
    var offset = 300;
    var duration = 500;
    var $serviceSection = jQuery('#about');
    var serviceSectionTop = $serviceSection.offset().top;

    // Função para verificar e atualizar o estado do botão
    function checkButtonVisibility() {
        if ($(window).scrollTop() > serviceSectionTop + offset) {
            requestAnimationFrame(() => $('.voltarAoTopo').fadeIn(duration));
        } else {
            requestAnimationFrame(() => $('.voltarAoTopo').fadeOut(duration));
        }
    }
    // Atrasando a primeira verificação em 100ms (ajuste o valor conforme necessário)
    // quando a página for atualizada, o Botão não aparecerá no início
    setTimeout(checkButtonVisibility, 100);

    // Escutador de eventos de rolagem
    $(window).scroll(checkButtonVisibility);
});

/*jQuery(document).ready(function() {
    var offset = 300; // offset: Define a distância em pixels a partir do topo da seção "#about" para que o botão comece a aparecer
    var duration = 500; // duration: Define a duração da animação de fade in/out do botão
    var $serviceSection = jQuery('#about'); // $serviceSection: Seleciona o elemento com o ID "about"
    var serviceSectionTop = $serviceSection.offset().top; // serviceSectionTop: Armazena a posição do topo da seção "about" em relação ao documento

    jQuery(window).scroll(function() { // jQuery(window).scroll: Escuta o evento de rolagem da janela
        // Verifica se a posição de rolagem atual é maior que a posição do topo da seção "about" mais o offset. Se for, o botão é mostrado
        if (jQuery(this).scrollTop() > serviceSectionTop + offset) {
            jQuery('.voltarAoTopo').fadeIn(duration);
        } else {
            jQuery('.voltarAoTopo').fadeOut(duration);
        }
    });
    // jQuery('.voltarAoTopo').click: Escuta o clique no botão e anima a rolagem para o topo da página
    jQuery('.voltarAoTopo').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});*/


/* Antigo Botão - foi melhorado pelo Gemini, pois o Botão já aparecia assim
que eu entrava no site 
jQuery(document).ready(function() {
	
	var offset = 300;
	var duration = 500;

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.voltarAoTopo').fadeIn(duration);
		} else {
			jQuery('.voltarAoTopo').fadeOut(duration);
		}
	});
		
	jQuery('.voltarAoTopo').click(function(event) {
		event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
	});
});
*/
