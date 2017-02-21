$(document).ready(function() {
	
	var content;
	var overlay;
	var openTrigger = '.item';
	var closeTrigger = '.close'; 
	var nextTrigger = '.next';
	var prevTrigger = '.prev';
	
	createOverlay();
	
	$('.item').on('click', function() {
		//TODO: make content value more automatic and scalable
		content = '#content-' + this.id;
		openContent();
	});
	$(closeTrigger).on('click', function() {
		closeContent();
	});
	$(nextTrigger + ',' + prevTrigger).on('click', function() {
		var action = $(this).attr('class');
		showPrevOrNext(action);
	});
	
	function createOverlay() {
		$('body').append(
			'<div class="overlay ' + closeTrigger + 
			'" style="display: none;"></div>'
		);
		overlay = '.overlay';
	}

	function openContent() {
		$(content).show();
		$(overlay).show();
	}
	function closeContent() {
		$(content).hide();
		$(overlay).hide();
	}
	
	function showPrevOrNext(action) {
		$(content).hide();
		var change;
		if (action == 'prev') {
			change = -1;
		} else {
			change = 1;
		}
		//TODO: make content.split scalable, not specific to #content-item
		var n = parseInt(
			content.split('#content-item').join('')
		) + change;
		content = '#content-item' + n;
		$(content).show();
	}
});