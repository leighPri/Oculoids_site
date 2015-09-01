//creates lightbox
//removes lightbox class when page goes over a certain size
  //points <a> to next page and its comic when over a certain size

jQuery(document).ready(function($) {

	$('.lightbox_trigger').click(function(e) {

		//prevent default action (hyperlink)
		e.preventDefault();

		//Get clicked link href
		var image_href = $(this).attr("href");

		/*
		If the lightbox window HTML already exists in document,
		change the img src to to match the href of whatever link was clicked
<<<<<<< HEAD
=======

>>>>>>> f7f7ac17de55fcf6a4656b4be5742d684a21773d
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/

		if ($('#lightbox').length > 0) { // #lightbox exists

			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox);
		}

	});

	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').on('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});

});
