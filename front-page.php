<?php

$context = Timber::get_context();
$context['post'] = Timber::get_post();

Timber::render( 'template-front-page.twig', $context );