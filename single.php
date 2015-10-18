<?php

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['comment_form'] = TimberHelper::get_comment_form();

// echo '<pre>';
// print_r( $context['post'] );
// echo '</pre>';

Timber::render( array( 'single-' . $post->post_type . '.twig', 'template-single.twig' ), $context );
