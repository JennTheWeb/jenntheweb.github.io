// LIGHTBOX GALLERY

$(document).ready(function() {
	
	// FIND ALL GALLERY ITEMS AND LINK THEM TOGETHER

	var item = '.galleryItem';
	var content = '.js-galleryContent';
	var itemIdPrefix = 'item-';
	var contentSuffix = '-content';
	var numItems = 0;

	$('.js-gallery').each(function() {
		linkPrevAndNext();
		linkTriggerToContent();
	});

	function linkPrevAndNext() {	
		numItems = 0;
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

// LOAD GALLERY CONTENT FROM OBJECT

function loadThumbContent() {
	let thumb = '';
	let login = '';
	for (var i = 0; i < portfolio.length; ++i) {
		if('thumbProtected' in portfolio[i]) {
			login = '<a class="js-authentication-trigger">login to view</a>';
		}

		thumb = portfolio[i].thumbPublic;
		$('#gallery').append(
			'<div class="galleryItem js-sliderItem">' +
				'<a class="trigger"' + 'id="thumb-' + i + '">' +  
					'<img src="images/portfolio/' +
						thumb +
					'" />' +
				'</a>' +
				login +
			'</div>'
		);
	}
}

function loadContent() {
	let content = '';
	for (var i = 0; i < portfolio.length; ++i) {
		content = portfolio[i].contentPublic;
		$('#gallery').append(
			'<div class="galleryContent js-galleryContent">' + 
				'<div class="galleryContentWrap" id="content-' + i + '">' + 
					content + 
				'</div>' +
			'</div>'
		);
	}
}

// PASSWORD PROTECTION

function testResults(form) {
	var password = 'pass';
	var testVar = form.inputbox.value;

	var content = '#authentication';
	var trigger = '.js-authentication-trigger';
	var overlay = '#overlay2';

	if(testVar == password) {
		showProtectedThumbContent();
		showProtectedContent();
		$(content).hide();
		$(overlay).hide();
		$('body').css(
			'overflow', 'auto'
		);
	}
}

function showProtectedThumbContent() {
	for (var i = 0; i < portfolio.length; ++i) {
		let thumb = '';
		if ('thumbProtected' in portfolio[i]) {
			thumb = 
				'<img src="images/portfolio/' + 
					portfolio[i].thumbProtected + 
				'" />';
			$('#thumb-' + i).html(thumb);
		}	
	}
}

function showProtectedContent() {
	for (var i = 0; i < portfolio.length; ++i) {
		let content = '';
		if ('contentProtected' in portfolio[i]) {
			content = portfolio[i].contentProtected;
			$('#content-' + i).html(content);
		}	
	}
} 

// LOGIN FORM LIGHTWINDOW

$(document).ready(function() {
	var content = '#authentication';
	var trigger = '.js-authentication-trigger';
	var overlay = '#overlay2';
	createOverlay();

	$(trigger).on('click', function() {
		$(content).show();
		$(overlay).show();
		$('body').css(
			'overflow', 'hidden'
		);
	});
	$(overlay).on('click', function() {
		$(content).hide();
		$(overlay).hide();
		$('body').css(
			'overflow', 'auto'
		);
	});	
	
	function createOverlay() {
		$('body').append(
			'<div class="galleryOverlay" id="overlay2" style="display: none;"></div>'
		);
	}
});

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