$(function() {
//------------------//
// LIGHTBOX GALLERY //
//------------------//
	
	let gallery = '.js-gallery';
	let trigger = '.js-trigger';
	let content = '.js-content';
	let triggerPrefix = 'trigger-';
	let contentPrefix = 'content-';
	let numItems = 0;

// CREATE HTML FOR GALLERY ITEMS

	$(gallery).each(function() {
		addWrappers();
		linkTriggerToContent();
		linkPrevAndNext();
		createOverlay();
	});

	function addWrappers() {
		$('.js-galleryContent').each(function() {
			$(this).wrapInner(
				'<div class="galleryContentWrap js-galleryContentWrap"></div>'
			);
		})
	}

	// LINK TRIGGERS TO LIGHTWINDOW CONTENT
	function linkTriggerToContent() {	
		$('.thumb' + trigger).each(function() {	
			$(this).attr('id', triggerPrefix + numItems); // needed to reveal protected content
			$(this).attr('content', contentPrefix + numItems);
			numItems++;
		});
	}
	function linkPrevAndNext() {
		let n = 0;
		$('.js-galleryContent' + content).each(function() {
			$(this).attr('id', contentPrefix + n);

			if (n < numItems - 1) {
				$(this).attr('nextItem', contentPrefix + (n + 1) );
				$(this).prepend(
					'<button id="next" class="galleryNext">' + 
					'	<svg><use xlink:href="#icon-arrow-R"/></svg>' + 
					'</button>'
				);	
			}
			if (n > 0) {		
				$(this).attr('prevItem', contentPrefix + (n - 1) );
				$(this).prepend(
					'<button id="prev" class="galleryPrev">' + 
					'	<svg><use xlink:href="#icon-arrow-L"/></svg>' + 
					'</button>'
				);
			}
			$(this).prepend(
				'<button id="close" class="galleryClose" aria-label="Close">' + 
				'	<svg><use xlink:href="#icon-close"/></svg>' +
				'</button>'
			);

			n++;
		});	
	}
	function createOverlay() {
		$('.js-gallery').prepend(
			'<div class="galleryOverlay" id="overlay" style="display: none;"></div>'
		);
	}

// VIEW PREV/NEXT CONTENT IN THE LIGHTWINDOW

	$('#next, #prev').on('click', function(event) {
		event.stopPropagation();
		
		var action = $(this).attr('id');
		var currentContent = '#' + $(this).parents(content).attr('id');
		
		$(currentContent).hide();
		currentContent = '#' + $(currentContent).attr(action + 'Item');
		$(currentContent).show();

		verticallyCenterContent(currentContent);
	});

// OPEN AND CLOSE THE LIGHTWINDOW

	$(trigger).on('click', function() {
		var currentItemContent = '#' + $(this).attr('content');
		openContent(currentItemContent);
	});
	$('#close, ' + content + ', #overlay').on('click', function() {
		closeContent(content);
	});
	$('.js-galleryContentWrap').on('click', function(event) {
		event.stopPropagation();
	});

	function openContent(content) {
		$(content).show();
		verticallyCenterContent(content);
		$('#overlay').show();
		$('body').css(
			'overflow', 'hidden'
		);
	}
	function closeContent(content) {
		$(content).hide();
		$('#overlay').hide();
		$('body').css(
			'overflow', 'auto'
		);
	}
	function verticallyCenterContent(content) {
		var contentHeight = $(content).outerHeight();
		var windowHeight = $(window).height();
		if (contentHeight < windowHeight ) {
			$(content).css({
				'top': '50%',
				'margin-top': '-' + contentHeight / 2 + 'px'
			});
		}
	}

});

//------------------//
// SLIDER --------- //
//------------------//

$(document).ready(function() {

	addWrappers();

	var sliderViewportWidth = 
		$('#sliderViewport').innerWidth() - 
		parseInt($('#sliderViewport').css('padding-left')) - 
		parseInt($('#sliderViewport').css('padding-right'));
	var numItems = 0;
	var gridSize = 2;
	
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
	};
});