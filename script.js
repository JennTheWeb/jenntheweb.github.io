// LIGHTBOX GALLERY

$(document).ready(function() {
	
	// CREATE GALLERY ITEMS

	var item = '.galleryItem';
	var content = '.galleryContent';
	var itemIdPrefix = 'item-';
	var contentSuffix = '-content';
	var numItems = 0;
	
	createGalleryItems();
	
	function createGalleryItems() {
		var n = 0;
		$(item).each(function() {
			n++;
			$(this).attr('id', itemIdPrefix + n);
			$(this).attr('prevItem', '#' + itemIdPrefix + (n - 1));
			$(this).attr('nextItem', '#' + itemIdPrefix + (n + 1));
		});
		n = 0;
		$(content).each(function() {
			n++;
			$(this).attr('id', itemIdPrefix + n + contentSuffix);
		})
		numItems = n;
	}	
	
	// ADD NAV TO GALLERY ITEMS

	addNav();
	
	function addNav() {		
		for (n = 1; n <= numItems; n++) {
			var itemId = '#' + itemIdPrefix + n;
			var content = itemId + contentSuffix;
			if (n != numItems) {
				$(content).prepend(
					'<button id="next" class="slideNext">' + 
					'	<svg><use xlink:href="#icon-arrow-R"/></svg>' + 
					'</button>'
				);	
			}
			if (n != 1) {		
				$(content).prepend(
					'<button id="prev" class="slidePrev">' + 
					'	<svg><use xlink:href="#icon-arrow-L"/></svg>' + 
					'</button>'
				);
			}
			$(content).prepend(
				'<button id="close" class="closeWindow" aria-label="Close">' + 
				'	<svg><use xlink:href="#icon-close"/></svg>' +
				'</button>'
			);
		};
	}
	
	// OPEN AND CLOSE CONTENT

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
	
	// SHOW NEXT AND PREVIOUS CONTENT
	
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
			'<div class="overlay" id="overlay" style="display: none;"></div>'
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
		$('.js-item').each(function() {
			numItems++;
		});
		$('.js-item').outerWidth(
			$('#sliderViewport').width() / gridSize
		);
		$('#sliderContent').width(
			$('.js-item').outerWidth() * numItems
		);
		$('#sliderViewport').height(
			$('.js-item').outerHeight()
		);
	}

	// SLIDER NAVIGATION

	sliderNav();
	function sliderNav() {
		var n = 0;
		$('#sliderNext').click(function() {
			if (n < numItems - gridSize) {
				$(this).addClass('is-active');
				$('#sliderContent').animate({
					left: '+=-' + $('.js-item').outerWidth()
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
				$('#sliderContent').animate({
					left: '+=' + $('.js-item').outerWidth()
				});
				n--;
				if (n == 0) {
					$(this).removeClass('is-active');
				}
			}
		});
	};
});