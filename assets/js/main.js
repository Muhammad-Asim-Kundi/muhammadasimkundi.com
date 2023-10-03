//js work for my porfolio
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

let site = document.querySelector('#site')
let developer = document.querySelector('#developer')


document.querySelector('#INeedSite').addEventListener('click', DisplaySite)
document.querySelector('#INeedDev').addEventListener('click', DisplayDev)

function DisplaySite(){

	site.style.display = 'block'
	developer.style.display = 'none'

	


}

function DisplayDev(){
	
	developer.style.display = 'block'
	site.style.display = 'none'

	

}