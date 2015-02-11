$(document).ready( function(){

	//START SCRIPT
	$('.start').click(function(){

		var n=prompt('Supply a number!')
		
		if ( $.isNumeric(n) && n%1==0 ) {
			$('.num-sup').html(n);

			var max=n;
			for (var i=1 ; i<=max; i++) {

				if (i%3==0 && i%5==0) {
					$('.list').append('<li>fizzbuzz</li>');
				}

				else if (i%3==0) {
					$('.list').append('<li>fizz</li>');
				}

				else if (i%5==0) {
					$('.list').append('<li>buzz</li>');
				}

				else {
					$('.list').append('<li>'+i+'</li>')

				}; // END IF

			}; // END FOR LOOP

		} 

		else if (n%1!=0) {
			
			alert('The number supplied cannot have decimals value ');
		}

		else {
			alert('The value supplied before is not a number');
		};//END IF .ISNUMERIC CONDITION

	}); //END OF START SCRIPT

	//BACK SCRIPT
	$('.delete').click(function(){
		$('.num-sup').html('');
		$('li').remove();
	}); // END OF BACK SCRIPT

}); //END OF DOCUMENT SCRIPT