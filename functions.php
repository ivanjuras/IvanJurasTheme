<?php

// Main site class
require get_template_directory() . '/3-Logic/1-Backend/site-class.php';

// Scripts
require get_template_directory() . '/3-Logic/1-Backend/deregister-scripts.php';
require get_template_directory() . '/3-Logic/1-Backend/enqueue-scripts.php';

// Register components
require get_template_directory() . '/3-Logic/1-Backend/register-nav-menus.php';

// Remove actions
require get_template_directory() . '/3-Logic/1-Backend/remove-actions.php';

//  Helper functions
require get_template_directory() . '/3-Logic/1-Backend/helper-functions.php';