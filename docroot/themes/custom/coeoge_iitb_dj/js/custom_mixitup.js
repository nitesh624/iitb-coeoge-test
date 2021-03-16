!function($) {
$(function () {
		
		var filterList = {
		
			init: function () {
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
    		  	// filter: '#portfoliolist div:first-child'
      		  filter: $("#filters div:first-child li span").attr('data-filter')
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
	});	
}(jQuery);