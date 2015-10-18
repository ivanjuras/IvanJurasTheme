<?php

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();

Timber::render( 'template-search.twig', $context );