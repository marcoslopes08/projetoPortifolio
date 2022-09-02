/* jQuery que faz o Botão Voltar ao Topo aparecer/desaparecer durante a rolagem na página */
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

