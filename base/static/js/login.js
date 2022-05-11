$(function() {
	    // Floating label
		$('.form-control').on('focus blur', function(e) {
			$(this).parents('.form-group').toggleClass('focused', (e.type === 'focus'));
		}).trigger('blur');
});