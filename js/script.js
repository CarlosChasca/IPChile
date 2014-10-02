(function(window, $){
	$(function(){

			var $images = $('[data-svgFallback]');
	    	if(!Modernizr.svg){
			    	$.each($images, function(index, element){
			    		var $element = $(element);
			    		$element.attr('src', $element.attr('data-svgFallback'));
			    	});
	    	}


	    	if($('#place-photo').length){
	    		var slider = $('#place-photo').ninjaSlider({
					auto:0
				}).data('ninjaSlider');

				$('.arrow-ctrl').on('click', function(){
					if( $(this).attr('data-direction') == 'prev' ){
						slider.prev();
					} else {
						slider.next();
					}
				});
	    	}
			

			var $selectNav = $('#select-navigator');
			$selectNav.on('change', function( event ){
				var targetURL = $(this).find('option:selected').val();
				window.location = targetURL;
			});

<<<<<<< HEAD

			var trackData = function( data ){
			    if( !data || typeof(data) !== 'object' || typeof(ga) === 'undefined' ){ return false; }
			    ga('send', data.type, data.tag, data.label, (data.value ? data.value : null));
			};
				  
			$('body').on('click', '[data-track]', function(){
			    var $item = $(this),
			        data = {
			            type : $item.data('track'),
			            tag : $item.data('tag'),
			            label : $item.data('tag-label'),
			            value : $item.data('tag-value')
			        };
			    trackData( data );
			});


	        $('#signup-form').validizr({
	            preValidation : function($form, $input){
	                if($input.prev().is('.error')){$input.prev().remove();}
	            },
	            notValidInputCallback : function($input){
	                $input.before('<span class="error-message">'+$input.attr('data-message')+'</span>');
	            },
	            validFormCallback : function($form){
	            	console.log(submit);
	                var $submitBtn = $form.find('input[type="submit"]');

	                var data = {
				            type : 'event',
				            tag : 'Inscripciones',
				            label : 'BtnRegistrofOK'
				        };
				    trackData( data );

	                $form.data('trigger-submit', true);
	                $form.submit();
	            }
	        });

=======
>>>>>>> origin/Carlos
	});
}(this, jQuery));