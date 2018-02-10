
//------------------//
// SLIDER --------- //
//------------------//

function createSlider(numCols, sliderWidth) {
	addWrappers();

	var sliderViewportWidth;
	if(sliderWidth != 'auto'){
		sliderViewportWidth = sliderWidth;
	} else {
		sliderViewportWidth = $('#sliderViewport').innerWidth()
	}

	var numItems = 0;
	var gridSize = numCols;
	
	calcDimensions();
	addNav();

	function addWrappers() {
		$('#slider').each(function() {
			$(this).wrapInner(
				'<div id="sliderViewport"><div class="js-sliderContent"></div></div>'
			);
			$(this).append( 
				'<div id="sliderNav">' +
				'	<a id="sliderPrev"><svg><use xlink:href="#icon-arrow-L"></use></svg></a>' + 
				'	<a class="is-active" id="sliderNext"><svg><use xlink:href="#icon-arrow-R"></use></svg></a>' +
				'</div>'
			);
		})
	}

	function calcDimensions() {	
		$('.js-sliderItem').each(function() {
			numItems++;
		});
		$('.js-sliderItem').outerWidth(sliderViewportWidth / gridSize);
		$('.js-sliderContent').width(
			$('.js-sliderItem').outerWidth() * numItems
		);
		$('#sliderViewport').height(
			$('.js-sliderItem').outerHeight()
		);
	}

	function addNav() {
		var n = 1;
		$('#sliderNext').click(function() {
			if (n < (numItems / gridSize)) {
				$(this).addClass('is-active');
				$('#sliderPrev').addClass('is-active');
				$('.js-sliderContent').animate({
					left: '+=-' + sliderViewportWidth
				});
				n++;
				if (n == numItems / gridSize) {
					$(this).removeClass('is-active');
				}
			}
		});
		$('#sliderPrev').click(function() {
			if (n > 1) {
				$(this).addClass('is-active');
				$('#sliderNext').addClass('is-active');
				$('.js-sliderContent').animate({
					left: '+=' + sliderViewportWidth
				});
				n--;
				if (n == 1) {
					$(this).removeClass('is-active');
				}
			}
		});
	}
}