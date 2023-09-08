jQuery(document).ready(function () {
    if (jQuery('.owl-carousel').length > 0) {
        jQuery('.owl-carousel').owlCarousel({
	    loop: false,
	    margin: 5,
	    nav: true,
	    dots:false,
	    responsiveClass: true,
	    responsive: {
	      0: {
		items: 1,
		nav: true
	      },
	      600: {
		items: 2,
		margin: 15
		
	      },
	      768: {
		items: 2,
		margin: 15
	      },
	      1000: {
		items: 2,
		margin: 15
	      }
	    }
	})
    }
});
