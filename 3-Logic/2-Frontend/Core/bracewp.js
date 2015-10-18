
;( function( global, $, scrollReveal ) {

	// ---------- Global BraceWP variables ---------- //

	var $global = $( global );
	var breakpointMedium = 960;
	var winHeightPadded = $global.height() * 1.1;
	var isTouch = Modernizr.touch;


	// ---------- BraceWP Module ---------- //

	var BraceWP = {

		// Smooth scrolling on click
		smoothScrolling: function() {

			var scrollSpeed = 700;

			$('a[href*=#]:not([href=#]):not([href*=#tab])').on( 'click', function(e) {

				e.preventDefault();

				$('html, body').animate(
					{ scrollTop: $( this.hash ).offset().top },
					scrollSpeed
				);

			});

		},

		// Scroll to top button
		scrollTop: function() {

			var $btnToTop = $('.ToTopButton');
			var fadeInSpeed = 700;
			var fadeOutSpeed = 700;
			var toTopScrollSpeed = 300;

			// Show button on specific viewport size
			$global.scroll( function() {
				if ( $global.scrollTop() > 150 ) {
					$btnToTop.fadeIn( fadeInSpeed );
				} else {
					$btnToTop.fadeOut( fadeOutSpeed );
				}
			});

			//  When the button is clicked, scroll to top
			$btnToTop.on( 'click', function() {
				$('html, body').animate(
					{ scrollTop: 0 },
					toTopScrollSpeed
				);
			});

		},

		// Open menu on click
		hamburgerButtonClick: function() {

			var $btnHamburger = $('.HamburgerButton');
			var $navMenuA = $('.NavbarTop-menuBlock');
			var menuToggleSpeed = 250;

			$btnHamburger.on( 'click', function() {
				$navMenuA.toggle( menuToggleSpeed );
			});

		},

		// Tab menu on click
		tabMenuOnClick: function() {

			var $tabItem = $( '.TabMenu-tabItem' );
			var $tabItemLink = $( '.TabMenu-tabLink' );
			var tabContent = '.TabMenu-tabContent';
			var fadeInSpeed = 400;
			var isActiveClass = 'is-active';

			$tabItemLink.on( 'click', function( e ) {

				var $parentTabItem = $( this ).parent( $tabItem );
				var currentAttr = $( this ).attr( 'href' );

				e.preventDefault();

				$( tabContent + currentAttr )
					.fadeIn( fadeInSpeed )
					.siblings().hide();

				$parentTabItem
					.addClass( isActiveClass )
					.siblings().removeClass( isActiveClass );

			});

		},

		// Show/hide navigation on resize
		showHideNavMenu: function() {

			var $navMenuA = $('.NavbarTop-menuBlock');

			$global.on( 'resize', function() {
				if ( $(this).width() >= breakpointMedium ) {
					$navMenuA.show();
				} else {
					$navMenuA.hide();
				}
			});

		}

	}; // End BraceWP module

	// Instantiate plugins
	var sr = new scrollReveal();

	// Call functions
	BraceWP.smoothScrolling();
	BraceWP.scrollTop();
	BraceWP.hamburgerButtonClick();
	BraceWP.showHideNavMenu();
	BraceWP.tabMenuOnClick();

	// global.BraceWP = BraceWP;

} )( window, jQuery, scrollReveal );