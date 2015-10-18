<?php

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();

// echo '<pre>';
// print_r( $context );
// echo '</pre>';

Timber::render( 'template-home.twig', $context );