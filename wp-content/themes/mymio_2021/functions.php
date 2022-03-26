<?php
/**
 * mymio_2021 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package mymio_2021
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'mymio_2021_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function mymio_2021_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on mymio_2021, use a find and replace
		 * to change 'mymio_2021' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'mymio_2021', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'mymio_2021' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'mymio_2021_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'mymio_2021_setup' );

add_action( 'after_setup_theme', 'theme_register_nav_menu' );

function theme_register_nav_menu() {
	register_nav_menu( 'top__desktop', 'Верхнее меню' );
    register_nav_menu( 'top__mobile', 'Мобильное меню');
}
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mymio_2021_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'mymio_2021_content_width', 640 );
}
add_action( 'after_setup_theme', 'mymio_2021_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mymio_2021_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'mymio_2021' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'mymio_2021' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'mymio_2021_widgets_init' );

/**
 * Enqueue scripts and styles.
 */

function mymio_2021_scripts() {
	wp_style_add_data( 'mymio_2021-style', 'rtl', 'replace' );
	wp_enqueue_script( 'mymio_2021-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), _S_VERSION, true );  
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', array(), _S_VERSION, true );

    wp_enqueue_script('custom-auth', get_template_directory_uri() . '/assets/js/custom-auth.js', array('jquery'), _S_VERSION, true );

	if (get_the_ID() == 40184) {
        wp_enqueue_script('forms-select', get_template_directory_uri() . '/assets/js/select2.min.js', array(), _S_VERSION, true );
        wp_enqueue_script('forms-mask', get_template_directory_uri() . '/assets/js/jquery.inputmask.min.js', array('forms-select'), _S_VERSION, true );
        wp_enqueue_script('forms-validate', get_template_directory_uri() . '/assets/js/jquery.validate.min.js', array('forms-select'), _S_VERSION, true );
        wp_enqueue_script('forms-script', get_template_directory_uri() . '/assets/js/form.js', array('forms-mask', 'forms-validate', 'forms-select', 'jquery-ui-datepicker'), _S_VERSION, true );
    }

    if (get_the_ID() == 40207) {
        wp_enqueue_script('forms-select', get_template_directory_uri() . '/assets/js/select2.min.js', array(), _S_VERSION, true );
        wp_enqueue_script('forms-mask', get_template_directory_uri() . '/assets/js/jquery.inputmask.min.js', array('forms-select'), _S_VERSION, true );
        wp_enqueue_script('forms-validate', get_template_directory_uri() . '/assets/js/jquery.validate.min.js', array(), _S_VERSION, true );
        wp_enqueue_script('lk-forms-script', get_template_directory_uri() . '/lk-front-bundle/dist/js/lk-forms.js', array('forms-mask', 'forms-validate', 'jquery-ui-datepicker'), _S_VERSION, true );
    }
}
add_action( 'wp_enqueue_scripts', 'mymio_2021_scripts' );

function mymio_2021_css() {
    wp_enqueue_style( 'mymio_2021-style', get_stylesheet_uri(), array(), _S_VERSION );
    wp_enqueue_style ('bootstrap', get_template_directory_uri() .'/bootstrap/css/bootstrap.min.css');
    wp_enqueue_style ('flexslider', get_template_directory_uri() .'/assets/flexslider/flexslider.css');
    wp_enqueue_style ('fancybox_css', get_template_directory_uri() .'/assets/fancybox-master/dist/jquery.fancybox.min.css');
    wp_enqueue_style ('auth-style', get_template_directory_uri() .'/assets/css/auth.css');

    if (get_the_ID() == 40184) {
        wp_enqueue_style ('forms-select', get_template_directory_uri() .'/assets/css/select2.css', array(), _S_VERSION);
        wp_enqueue_style ('forms-style', get_template_directory_uri() .'/assets/css/forms.css', array(), _S_VERSION);
    }

    if (get_the_ID() == 40207) {
        wp_enqueue_style ('forms-select', get_template_directory_uri() .'/assets/css/select2.css', array(), _S_VERSION);
        wp_enqueue_style ('lk-forms-style', get_template_directory_uri() .'/assets/css/lk-styles.css', array(), _S_VERSION);
        wp_enqueue_style ('forms-style', get_template_directory_uri() .'/assets/css/forms.css', array(), _S_VERSION);
    }

    if ( get_page_template_slug() == 'new_index.php' ) {
        wp_enqueue_style('custom_new', get_template_directory_uri() .'/assets/css/custom_new.css' );
    }
    else { 
        wp_enqueue_style ('custom', get_template_directory_uri() .'/assets/css/custom.css');
    }
}
add_action( 'wp_enqueue_scripts', 'mymio_2021_css' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/assets//inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/assets//inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/assets//inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/assets//inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */


if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/assets//inc/jetpack.php';
}

