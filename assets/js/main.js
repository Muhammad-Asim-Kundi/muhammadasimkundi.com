/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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

const site = document.querySelector('#site')
const developer = document.querySelector('#developer')


document.querySelector('#INeedSite').addEventListener('click', DisplaySite)
document.querySelector('#INeedDev').addEventListener('click', DisplayDev)

// making function for andi so called first to toggle the css class="hidden" show only andi
function DisplaySite(){
	site.classList.toggle('hidden')
	developer.classList.add('hidden')
	
}

//making function for claire so that on call it toggle the hidden class of css for pic of claire
function DisplayDev(){
	site.classList.add('hidden')
	developer.classList.toggle('hidden')
}