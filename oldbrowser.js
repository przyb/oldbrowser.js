(function($) {
	var $div = $('<div></div>'),
		$h1 = $('<h1></h1>'),
		$p = $('<p></p>'),
		$a = $('<a></a>'),
		$close = $('<a></a>'),
		hidden = false;

	$div.css({
		'position' : 'absolute',
		'top' : '0',
		'left' : '0',
		'right' : '0',
		'padding' : '15px 68px 15px 15px',
		'background' : '#f9e9de',
		'border-bottom' : '3px solid #b65919',
		'z-index' : '100000'
	}).appendTo('body');

	$h1.css({
		'color' : '#b65919',
		'font-size' : '14px',
		'line-height' : '16px',
		'font-family' : 'Arial',
		'font-weight' : 'bold',
		'margin' : '0',
		'padding' : '0'
	}).html(
		'Przeglądarka Internet Explorer, której używasz, jest przestarzała.'
	).appendTo($div);

	$p.css({
		'color' : '#562605',
		'font-size' : '12px',
		'line-height' : '14px',
		'font-family' : 'Arial',
		'font-weight' : 'normal',
		'margin' : '5px 0 0 0'
	}).html(
		'Posiada ona udokumentowane luki bezpieczeństwa, inne wady oraz ograniczoną funkcjonalność.'
		+' Tracisz możliwość skorzystania z pełni możliwości oferowanych przez niektóre strony internetowe.'
		+' Także ta strona może wyświetlać się niepoprawnie. '
	).appendTo($div);

	$a.css({
		'color' : '#b65919',
		'font-weight' : 'normal',
		'text-decoration' : 'underline'
	}).hover(function() {
		$(this).css({
			'color': '#ee6303'
		});
	}, function() {
		$(this).css({
			'color': '#b65919'
		});
	}).html(
		'Dowiedz się jak zaktualizować swoją przeglądarkę.'
	).attr(
		'href', 'http://www.browser-update.org/pl/update.html'
	).attr(
		'target', '_blank'
	).appendTo($p);

	$close.css({
		'display' : 'block',
		'color' : '#b65919',
		'font-size' : '16px',
		'line-height' : '36px',
		'font-weight' : 'normal',
		'text-decoration' : 'none',
		'text-align' : 'center',
		'width' : '36px',
		'height' : '36px',
		'background' : '#fff',
		'border' : '1px solid #ebceb9',
		'position' : 'absolute',
		'top' : '50%',
		'right' : '15px',
		'margin-top' : '-19px',
		'font-family' : 'Arial'
	}).hover(function() {
		$(this).css({
			'color': '#ee6303',
			'border-color' : '#e0b699'
		});
	}, function() {
		$(this).css({
			'color': '#b65919',
			'border-color' : '#ebceb9'
		});
	}).html(
		'x'
	).attr(
		'href', '#'
	).click(function() {
		hidden = true;
		$div.animate({
			'top' : -$div.outerHeight()
		}, 300, function() {
			$div.remove();
		});
		return false;
	}).appendTo($div);

	$(window).scroll(function() {
		if (!hidden) {
			$div.css({
			'top' : $(window).scrollTop()
		});
		}
	});

})(window.jQuery);