const buttonBackToTop = document.getElementById('backToTop');

window.onscroll = () => { scrollFunction() };

function scrollFunction() {
    if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ){
        buttonBackToTop.style.display = "flex";
    }
    else {
        buttonBackToTop.style.display = "none";
    }
}

// Scroll suave para link interno
$('.menu-nav a[href^="#"]').on('touchstart click', function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.superinfo-bg').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// Scroll suave para o topo
$('#backToTop').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});