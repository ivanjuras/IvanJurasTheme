<?php

// Deregister scripts
add_action( 'wp_enqueue_scripts', 'bracewp_deregister_scripts' );
function bracewp_deregister_scripts() {

	// Deregister default jQuery
	wp_deregister_script( 'jquery' );

}

// Remove W3TC comments from the bottom
add_filter( 'w3tc_can_print_comment', function( $w3tc_setting ) { return false; }, 10, 1 );