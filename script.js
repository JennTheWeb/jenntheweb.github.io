
//------------------//
// LIGHTBOX GALLERY //
//------------------//
	
	var gallery = '.js-gallery';
	var trigger = '.js-trigger';
	var content = '.js-content';
	var triggerPrefix = 'trigger-';
	var contentPrefix = 'content-';
	var numItems = portfolio.length;

// CREATE HTML FOR GALLERY ITEMS

	$(gallery).each(function() {
		generateContent(this);
		linkTriggerToContent();
		linkPrevAndNext();
		createOverlay();
	});

	function generateContent(gallery) {
		let thumb = '';
		let content = '';
		let login = '';

		for (var i = 0; i < numItems; ++i) {
			thumb = portfolio[i].thumbPublic;
			content = portfolio[i].contentPublic;
			if('thumbProtected' in portfolio[i]) {
				login = '<a class="js-trigger js-trigger-authenticate trigger-authenticate" content="authentication">login to view</a>';
			} else {
				login = '';
			}
			$(gallery).append(
				'<div class="galleryItem js-sliderItem">' +
					'<a class="thumb js-trigger">' +  
						'<img src="images/portfolio/' +
							thumb +
						'" />' +
					'</a>' +
					login +
				'</div>' + 
				'<div class="galleryContent js-content js-galleryContent">' + 
					'<div class="galleryContentWrap">' + 
						content + 
					'</div>' +
				'</div>'
			);
		}
	}

	// LINK TRIGGERS AND CONTENT
	function linkTriggerToContent() {	
		let n = 0;
		$('.thumb' + trigger).each(function() {	
			$(this).attr('id', triggerPrefix + n); // needed to reveal protected content
			$(this).attr('content', contentPrefix + n);
			n++;
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

// VIEW PREV/NEXT CONTENT

	$('#next, #prev').on('click', function(event) {
		var action = $(this).attr('id');
		var currentContent = '#' + $(this).parents(content).attr('id');
		event.stopPropagation();
		$(currentContent).hide();
		currentContent = '#' + $(currentContent).attr(action + 'Item');
		$(currentContent).show();
		verticallyCenterContent(currentContent);
	});

// OPEN AND CLOSE CONTENT

	$(trigger).on('click', function() {
		var currentItemContent = '#' + $(this).attr('content');
		openContent(currentItemContent);
	});
	$('#close, ' + content + ', #overlay').on('click', function() {
		closeContent(content);
	});
	$('.galleryContentWrap').on('click', function(event) {
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

// CENTER CONTENT

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

// PASSWORD PROTECTION

	function authenticate(form) {
		var password = 'pass';
		var input = form.inputbox.value;

		var form = '#authentication';

		if(input == password) {
			showProtectedContent();
			closeContent(form);
			$('.js-trigger-authenticate').hide();
		}
	}
	function showProtectedContent() {
		for (var i = 0; i < numItems; ++i) {
			let thumb = '';
			let content = '';
			if ('thumbProtected' in portfolio[i]) {
				thumb = 
					'<img src="images/portfolio/' + 
						portfolio[i].thumbProtected + 
					'" />';
				$('#' + triggerPrefix + i).html(thumb);
			}	
			if ('contentProtected' in portfolio[i]) {
				content = portfolio[i].contentProtected;
				$('#' + contentPrefix + i + ' .galleryContentWrap').html(content);
			}	
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