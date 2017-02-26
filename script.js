$(document).ready(function() {
	
// CREATE GALLERY ITEMS

	var item = '.galleryItem';
	var itemIdPrefix = 'item-';
	var itemContent = 'article';
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
		numItems = n;
	}	
	
// ADD NAV TO GALLERY ITEMS

	addNav();
	
	function addNav() {		
		for (n = 1; n <= numItems; n++) {
			var itemId = '#' + itemIdPrefix + n;
			var content = itemId + ' ' + itemContent;
			if (n != numItems) {
				$(content).prepend(
					'<button class="next" aria-label="Next">' + 
					'	<svg aria-hidden="true"><use xlink:href="#icon-arrow-R"/></svg>' + 
					'</button>'
				);	
			}
			if (n != 1) {		
				$(content).prepend(
					'<button class="prev" aria-label="Prev">' + 
					'	<svg aria-hidden="true"><use xlink:href="#icon-arrow-L"/></svg>' + 
					'</button>'
				);
			}
			$(content).prepend(
				'<button class="close">Close</button>'
			);
		};
	}
	
// OPEN AND CLOSE CONTENT

	var currentItem;
	
	$(item + ' .trigger').on('click', function() {
		currentItem = '#' + $(this).parent(item).attr('id');
		currentItemContent = currentItem + ' ' + itemContent;
		$(currentItemContent).show();
		$(overlay).show();
	});
	
	$(item + ' .close').on('click', function() {
		$(currentItemContent).hide();
		$(overlay).hide();
	});
	
// SHOW NEXT AND PREVIOUS CONTENT
	
	$('.next, .prev').on('click', function() {
		var action = $(this).attr('class');
		showPrevOrNext(action);
	});
	
	function showPrevOrNext(action) {
		$(currentItemContent).hide();
		
		currentItem = $(currentItem).attr(action + 'Item');
		currentItemContent = currentItem + ' ' + itemContent;
		
		$(currentItemContent).show();
	}
	
// CREATE BACKGROUND OVERLAY
	
	var overlay = '.overlay';
	createOverlay();
	
	$(overlay).on('click', function() {
		$(currentItemContent).hide();
		$(overlay).hide();
	});
	
	function createOverlay() {
		$('body').append(
			'<div class="overlay" style="display: none;"></div>'
		);
	}
	
});

