$(document).ready(function() {
	
// CREATE GALLERY ITEMS

	var item = '.galleryItem';
	var itemIdPrefix = 'item';
	var itemContent = 'article';
	var numItems = 0;
	
	createGalleryItems();
	
	// add ID to each gallery item
	// each ID ends with a number which is used to display the correct content
	// when navigating between gallery items 
	function createGalleryItems() {
		var n = 0;
		$(item).each(function() {
			n++;
			$(this).attr('id', itemIdPrefix + n);
			$(this).attr('itemNumber', n);
		});
		numItems = n;
	}	
	
// CREATE GALLERY NAV

	addNav();
	
	function addNav() {		
		for (n = 1; n <= numItems; n++) {
			var itemId = '#' + itemIdPrefix + n;
			var content = itemId + ' ' + itemContent;
			if (n != 1) {					
				$(content).append(
					'<button class="prev">Previous</button>'
				);
			}
			if (n != numItems) {
				$(content).append(
					'<button class="next">Next</button>'
				);	
			}
			$(content).append(
				'<button class="close">Close</button>'
			);
		};
	}
	
// OPEN CONTENT

	var currentItem;
	
	$(item + ' .trigger').on('click', function() {
		currentItem = '#' + $(this).parent(item).attr('id');
		openContent();
	});
	
	function openContent() {
		$(currentItem + ' ' + itemContent).show();
		$(overlay).show();
	}
	
// CLOSE CONTENT
	
	$(item + ' .close').on('click', function() {
		closeContent();
	});

	function closeContent() {
		$(currentItem + ' ' + itemContent).hide();
		$(overlay).hide();
	}
	
// SHOW NEXT AND PREVIOUS CONTENT
	
	$('.next, .prev').on('click', function() {
		var action = $(this).attr('class');
		showPrevOrNext(action);
	});
	
	function showPrevOrNext(action) {
		$(currentItem + ' article').hide();
		
		if (action == 'prev') {
			var change = -1;
		} else {
			var change = 1;
		}
		var n = parseInt(
			$(currentItem).attr('itemNumber')
		) + change;
		
		currentItem = '#' + itemIdPrefix + n;
		$(currentItem + ' article').show();
	}
	
// CREATE BACKGROUND OVERLAY
	
	var overlay = '.overlay';
	createOverlay();
	
	$(overlay).on('click', function() {
		closeContent();
	});
	
	function createOverlay() {
		$('body').append(
			'<div class="overlay" style="display: none;"></div>'
		);
	}
	
	
});

