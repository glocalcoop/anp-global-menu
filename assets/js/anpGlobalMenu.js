/**
 * 
 * Injects global nav with jQuery
 * Uses CDATA data made available using wp_localize_script()
 * @vars anpgmVars
 * 
 **/


(function($) {

	'use strict';

	if( anpGlobalMenuVars.status == 'OK' ) {

		// Header container directly beneath opening body tag
		$( '<header id="anpgm-header"></header>' ).prependTo( 'body' );

		// Special wrapper
		var wrapperContainer = $( '<div class="anpgm-wrap">' );
		$( '#anpgm-header' ).html( wrapperContainer );

		// Site title container
		var networkTitleContainer = $( '<h1 id="anpgm-network-title">' );
		$( wrapperContainer ).html( networkTitleContainer );

		// Main site url
		var networkLink = $( '<a>' );
		// Main site url passed from WP
		networkLink.attr( 'href', anpGlobalMenuVars.networkURL );

		$( '#anpgm-network-title' ).html( networkLink );
		// Main site title passed from WP
		networkLink.html( anpGlobalMenuVars.networkName );

		// Global nav container
		var globalNavContainer = $( '<nav id="anpgm-global-nav">' );
		networkTitleContainer.after( globalNavContainer );

		var mobileNavContainer = $( '<a class="mobile mobile-menu-link" href="#menu-main-menu" rel="icon">' );
		$( '#anpgm-global-nav' ).html( mobileNavContainer );

		$( mobileNavContainer ).append( '<span class="hide-text">' + anpGlobalMenuVars.networkName + '</span>' )

		// Nav menu markup passed from WP
		$( mobileNavContainer ).after( anpGlobalMenuVars.globalMenu );


		$( '.mobile' ).click(function ( event ) {
			$('nav').toggleClass( 'active' ); 
		});

		$( '.menu-item-has-children' ).click(function( event ) {
			//event.preventDefault();
			$(this).children( 'a' ).toggleClass( 'active test' );
		});


	    // MULTILEVEL RESPONSIVE MENU  
        // based on codepen.io/bradfrost/pen/qwJvF by Brad Frost
        $('body').addClass('js');

        var $menuToggle = $('#anpgm-global-nav').find('.mobile-menu-link');
        $menuToggle.click(function(e) {
            //e.preventDefault();
        	var $link = $(this),
        		target = $link.attr('href');
            $link.toggleClass('active');
            $(target).toggleClass('active');
            return false;
        });

        var $parents = $('.menu-item-has-children > a');
        $parents.click(function(e) {
        	//e.preventDefault();
        	var $link = $(this);
        	$link.toggleClass('active').next('ul').toggleClass('active');
        });


	} else {

		console.error( 'anpGlobalMenuVars.status returned value other than "OK"', anpGlobalMenuVars.status );

	}

})( jQuery );