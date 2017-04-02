// LIGHTBOX GALLERY

$(document).ready(function() {
	
	// FIND ALL GALLERY ITEMS AND LINK THEM TOGETHER

	var item = '.galleryItem';
	var content = '.galleryContent';
	var itemIdPrefix = 'item-';
	var contentSuffix = '-content';
	var numItems = 0;

	linkPrevAndNext();
	linkTriggerToContent();

	function linkPrevAndNext() {
		$(item).each(function() {	
			numItems++;
			$(this).attr('id', itemIdPrefix + numItems);
			$(this).attr('prevItem', '#' + itemIdPrefix + (numItems - 1));
			$(this).attr('nextItem', '#' + itemIdPrefix + (numItems + 1));
		});
	}
	function linkTriggerToContent() {
		numItems = 0;
		$(content).each(function() {
			numItems++;
			$(this).attr('id', itemIdPrefix + numItems + contentSuffix);	
		});	
	}
	
	// ADD NAV TO LIGHTWINDOW GALLERY ITEMS

	addNav();
	function addNav() {		
		for (n = 1; n <= numItems; n++) {
			var itemId = '#' + itemIdPrefix + n;
			var content = itemId + contentSuffix;
			if (n != numItems) {
				$(content).prepend(
					'<button id="next" class="galleryNext">' + 
					'	<svg><use xlink:href="#icon-arrow-R"/></svg>' + 
					'</button>'
				);	
			}
			if (n != 1) {		
				$(content).prepend(
					'<button id="prev" class="galleryPrev">' + 
					'	<svg><use xlink:href="#icon-arrow-L"/></svg>' + 
					'</button>'
				);
			}
			$(content).prepend(
				'<button id="close" class="galleryClose" aria-label="Close">' + 
				'	<svg><use xlink:href="#icon-close"/></svg>' +
				'</button>'
			);
		};
	}
	
	// OPEN AND CLOSE LIGHTWINDOW CONTENT

	var currentItem;
	
	$(item + ' .trigger').on('click', function() {
		currentItem = '#' + $(this).parent(item).attr('id');
		currentItemContent = currentItem + contentSuffix;
		$(currentItemContent).show();
		$(overlay).show();
		$('body').css(
			'overflow', 'hidden'
		);
	});
	
	$(content + ' #close').on('click', function() {
		//TODO: create function to use for close button and overlay
		$(currentItemContent).hide();
		$(overlay).hide();
		$('body').css(
			'overflow', 'auto'
		);
	});
	
	// SHOW NEXT AND PREVIOUS LIGHTWINDOW CONTENT
	
	$('#next, #prev').on('click', function() {
		var action = $(this).attr('id');
		showPrevOrNext(action);
	});

	function showPrevOrNext(action) {
		$(currentItemContent).hide();
		
		currentItem = $(currentItem).attr(action + 'Item');
		currentItemContent = currentItem + contentSuffix;
		
		$(currentItemContent).show();
	}
	
	// CREATE BACKGROUND OVERLAY
	
	var overlay = '#overlay';
	createOverlay();
	
	$(overlay).on('click', function() {
		$(currentItemContent).hide();
		$(overlay).hide();
		$('body').css(
			'overflow', 'auto'
		);
	});
	
	function createOverlay() {
		$('body').append(
			'<div class="galleryOverlay" id="overlay" style="display: none;"></div>'
		);
	}
	
});

// PASSWORD PROTECTION

	function testResults(form) {
		var password = 'pass';
		var testVar = form.inputbox.value;

		if(testVar == password) {
			$('.public').hide();
			$('.protected').show();
		}
	}

// SLIDER

$(document).ready(function() {

	var numItems = 0;
	var gridSize = 2;

	// SET UP SLIDER DIMENSIONS

	sliderSetup();
	function sliderSetup() {	
		$('.js-sliderItem').each(function() {
			numItems++;
		});
		$('.js-sliderItem').outerWidth(
			$('#sliderViewport').width() / gridSize
		);
		$('#sliderContent').width(
			$('.js-sliderItem').outerWidth() * numItems
		);
		$('#sliderViewport').height(
			$('.js-sliderItem').outerHeight()
		);
	}

	// SLIDER NAVIGATION

	sliderNav();
	function sliderNav() {
		var n = 0;
		$('#sliderNext').click(function() {
			if (n < numItems - gridSize) {
				$(this).addClass('is-active');
				$('#sliderPrev').addClass('is-active');
				$('#sliderContent').animate({
					left: '+=-' + $('.js-sliderItem').outerWidth()
				});
				n++;
				if (n == numItems - gridSize) {
					$(this).removeClass('is-active');
				}
			}
		});
		$('#sliderPrev').click(function() {
			if (n > 0) {
				$(this).addClass('is-active');
				$('#sliderNext').addClass('is-active');
				$('#sliderContent').animate({
					left: '+=' + $('.js-sliderItem').outerWidth()
				});
				n--;
				if (n == 0) {
					$(this).removeClass('is-active');
				}
			}
		});
	};
});