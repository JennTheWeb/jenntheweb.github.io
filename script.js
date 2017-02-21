$(document).ready(function() {
	
	var contentWrap = '#content';
	var content;
	var overlay;
	var triggerWrap = '#trigger';
	var openTrigger = '.item';
	var closeTrigger = '.close'; 
	var nextTrigger = '.next';
	var prevTrigger = '.prev';
	
	createOverlay();
	
	$(openTrigger).on('click', function() {
		var id = '#' + $(this).attr('id');
		var n = id.split(triggerWrap).join('');
		content = contentWrap + n;
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
});