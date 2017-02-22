$(document).ready(function() {
	
	var contentWrap = '#content';
	var content;
	var overlay;
	var triggerId = 'trigger';
	var openTrigger = '.galleryItem';
	var closeClass = 'close'; 
	var nextTrigger = '.next';
	var prevTrigger = '.prev';
	var numItems = 0;
	
	createOverlay();
	addItemIds();
	addNav();
	
	$(openTrigger).on('click', function() {
		var id = '#' + $(this).attr('id');
		openContent(id);
	});
	$('.' + closeClass).on('click', function() {
		closeContent();
	});
	$(nextTrigger + ',' + prevTrigger).on('click', function() {
		var action = $(this).attr('class');
		showPrevOrNext(action);
	});
	
	function createOverlay() {
		var overlayClass = 'overlay';
		$('body').append(
			'<div class="' + overlayClass + ' ' + closeClass + 
			'" style="display: none;"></div>'
		);
		overlay = '.' + overlayClass;
	}
	
	
	// add ID to each gallery item
	// each ID ends with a number which is used to display the correct content
	// when navigating between previous and next items
	function addItemIds() {
		var n = 1;
		$(openTrigger).each(function() {
			$(this).attr('id', triggerId + n);
			n++;
		});
		numItems = n - 1;
	}
	
	function addNav() {		
		for (var n = 1; n <= numItems; n++) {
			if (n != numItems) {
				appendBtn('<button class="next">Next</button>',n);
				
			}
			if (n != 1) {					
				appendBtn('<button class="prev">Previous</button>', n);
			}
			appendBtn('<button class="close">Close</button>', n);
		};
	}
	function appendBtn(btn, n) {
		$('article' + n).append(btn);
	}

	function openContent(id) {
		var n = id.split('#' + triggerId).join('');
		content = contentWrap + n;
		$(content).show();
		$(overlay).show();
	}
	function showPrevOrNext(action) {
		$(content).hide();
		
		if (action == 'prev') {
			var change = -1;
		} else {
			var change = 1;
		}
		var n = parseInt(
			content.split(contentWrap).join('')
		) + change;
		
		content = contentWrap + n;
		$(content).show();
	}
	function closeContent() {
		$(content).hide();
		$(overlay).hide();
	}
});