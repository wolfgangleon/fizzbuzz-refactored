$(document).ready( function(){

	//START SCRIPT
	$('.start').click(function(){
		$('li').remove();

		var n=prompt('Give me a number!')
		
		if (n>1000) {
			alert("The entered value is too big, it's going to take a while...");
		}

		else if (n<0) {
			alert('The value has to be bigger than 0');
		}

		else if ( $.isNumeric(n) && n%1==0 ) {
			$('.num-sup').html(n);

			var max=n;
			for (var i=1 ; i<=max; i++) {

				if (i%3==0 && i%5==0) {
					$('.list').append('<li><span class="sign">></span>  fizzbuzz</li>');
				}

				else if (i%3==0) {
					$('.list').append('<li><span class="sign">></span>  fizz</li>');
				} 

				else if (i%5==0) {
					$('.list').append('<li><span class="sign">></span>  buzz</li>');
				}

				else {
					$('.list').append('<li><span class="sign">></span>  '+i+'</li>')

				}; // END IF

			}; // END FOR LOOP

		} 

		else if (n%1!=0) {
			
			alert('It has to be an integer');
		};//END IF .ISNUMERIC CONDITION

	}); //END OF START SCRIPT

	//BACK SCRIPT
	$('.delete').click(function(){
		$('.num-sup').html('');
		$('li').remove();
	}); // END OF BACK SCRIPT

}); //END OF DOCUMENT SCRIPT