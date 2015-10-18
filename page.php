<?php

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

// echo '<pre>';
// print_r( $context['post'] );
// echo '</pre>';

Timber::render( array( 'template-page-' . $post->post_name . '.twig', 'template-page.twig' ), $context );