$(document).ready(function() {
	
	var content;
	var openTrigger = 'item';
	var closeTrigger = 'close'; 
	
	createOverlay();
	
	$('.' + openTrigger).on('click', function() {
		content = 'content-' + this.id;
		openContent(content);
	});
	$('.' + closeTrigger).on('click', function() {
		closeContent(content);
	});
	
	function createOverlay() {
		$('body').append(
			'<div class="overlay ' + closeTrigger + 
			'" style="display: none;"></div>'
		);
	}

	function openContent(content) {
		$('#' + content).show();
		showOverlay();
	}
	function closeContent(content) {
		$('#' + content).hide();
		hideOverlay();
	}
	
	function showOverlay() {
		$('.overlay').show();
	};
	function hideOverlay() {
		$('.overlay').hide();
	};
	
	
});