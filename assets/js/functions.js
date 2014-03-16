$(document).ready(function() {

	$('body').addClass('toggle-inactive');

	$('#toggle-main-navigation').click(function() {

	  $('#main-navigation').fadeToggle( 600 ).toggleClass('active');

	  $(this).toggleClass('active');

		if($('body').hasClass('toggle-active')){

			$('body').removeClass('toggle-active').addClass('toggle-inactive');

		} else{

			$('body').removeClass('toggle-inactive').addClass('toggle-active');

		}

	});

});