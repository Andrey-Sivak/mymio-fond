<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package mymio_2021
 */

$register_email = $_GET['eml'] ?: null;
require get_template_directory() . '/includes/register-user-by-elma-info.php';
register_user_from_elma_info($register_email);
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <script>
      let homeUrl = '<?= get_home_url(); ?>';
  </script>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#009d9a" >
	<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">

        <script src="https://api-maps.yandex.ru/2.1/?apikey=38dd7e92-7031-44d8-8dbf-0b7bb9549406&amp;lang=ru_RU"
                type="text/javascript"></script>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
              crossorigin="anonymous">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
                integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
                crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
                integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                crossorigin="anonymous"></script>

        <?php wp_head(); ?>
    </head>

<body <?php body_class(); ?>>
<?php get_template_part('/template-parts/auth-modal'); ?>
<?php /*if (isset($_SESSION['register-email'])) : */?><!--
<div class="modal--register active">
    <div class="modal--window">
        <span class="close" data-close="true">&times;</span>
        <p class="modal--content">Проверка данных..</p>
        <?php /*get_template_part('/template-parts/loade    r', null, ['active' => true]); */?>
    </div>
</div>
--><?php /*endif; */?>
    <div id="page-loading">
        <img id="page-loading-image" src="<? echo get_template_directory_uri() ?>/assets/images/mymio_loader.gif"
             alt="Loading..."/>
    </div>
<?php wp_body_open(); ?>
    <header class="mymio_2021">
        <div class="visible-lg visible-md">
            <div class="top-block">
                <div class="maxwidth-theme">
                    <div class="top-block-description" style="text-align: center;">Фонд оказывает системную помощь. Под
                        опекой фонда более 700 подопечных.
                    </div>
                </div>
            </div>


            <div class="logo-top-row">
                <div class="maxwidth-theme">
                    <div class="row-block">
                        <div class="logo-block" style="position: relative;max-width: 180px; vertical-align: middle;">
                            <div class="header-wrapper">
                                <div class="logo-main">
                                    <a href="/">
                                        <img src="<? echo get_template_directory_uri() ?>/assets/images/logo_color.png"
                                             title="МойМио"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="slogan">
                            <div class="header-wrapper">
                                <div class="top-description">
                                    <p style="margin-block-end: 4px;margin-block-start: 11px;font-size: 11px;line-height: 1.5em;">
                                        Благотворительный фонд помощи детям с миодистрофией Дюшенна и иными тяжелыми
                                        нервно-мышечными заболеваниями
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="search-block">
                            <div class="header-wrapper">
                                <div id="title-search_fixed">
                                    <form method="get" action="<?php echo home_url('/'); ?>" class="search">
                                        <div class="search-input-div">
                                            <input class="search-input twosmallfont" id="title-search-input_fixed"
                                                   type="text" name="s" id="s" placeholder="Поиск по сайту" size="40"
                                                   maxlength="50" autocomplete="off"/>
                                        </div>
                                        <div class="search-button-div">
                                            <button class="btn-search" type="submit" title="Поиск по сайту"><i
                                                        class="svg svg-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <? /*<div class="search-icon">
                                <img src="<?php bloginfo('template_url');?>/images/icons/search_color.svg">
                            </div>*/ ?>
                            </div>
                        </div>
                        <div class="info">
                            <div class="header-wrapper">
                                <div class="contacts">
                                    <div class="phone">
                                        <span>Телефон:</span>
                                        <a href="tel:+74957905895">8 495 790 58 95</a>
                                    </div>
                                    <div class="email">
                                        <span>По всем вопросам:</span>
                                        <a href="mailto:info@mymiofond.ru">info@mymiofond.ru</a>
                                    </div>
                                </div>
                                <? /*<div class="help-now">
                                <a href="/pomoch/" target="_blank">
                                    <span class="btn">Помочь сейчас</span>
                                </a>
                            </div>*/ ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="maxwidth-theme">
                <div class="nav-menu">
                    <? wp_nav_menu(array(
                        'theme_location' => 'top__desktop',
                        'container' => false,
                        'menu_class' => 'navbar-nav',
                        'menu_id' => 'nav',
                    )); ?>
                    <div class="orange-btn">
                        <a href="<?php echo get_home_url(); ?>/pomoch-sejchas"><span
                                    class="btn help-now">Помочь сейчас</span></a>
                    </div>
                </div>

            </div>
        </div>
        <div class="fixed-menu-block">
            <div class="maxwidth-theme" style="position:relative">
                <div class="logo-fixed">
                    <a href="/"><img src="<? echo get_template_directory_uri() ?>/assets/images/logo_color.png"></a>
                </div>
                <div class="nav-menu">

                    <? wp_nav_menu(array(
                        'theme_location' => 'top__desktop',
                        'container' => false,
                        'menu_class' => 'navbar-nav',
                        'menu_id' => 'nav',
                    )); ?>
                    <div class="orange-btn">
                        <a href="https://mymiofond.ru/pomoch-sejchas"><span class="btn help-now"
                                                                            style="min-width: auto; padding: 6px 17px;">Помочь</span></a>
                    </div>

                </div>
            </div>
        </div>
        <script>jQuery("document").ready(function ($) {

                var fixed_menu = $('.fixed-menu-block');
                var top_block = $('.top-block');


                $(window).scroll(function () {
                    if ($(this).scrollTop() > 195 && window.matchMedia('(min-width: 992px)').matches) {
                        fixed_menu.css('display', 'flex');

                    } else {
                        fixed_menu.css('display', 'none');
                    }

                });


                $(window).scroll(function () {
                    if ($(this).scrollTop() > 48 && window.matchMedia('(min-width: 992px)').matches) {

                        top_block.css('position', 'fixed').css('right', '0').css('left', '0');

                    } else {
                        top_block.removeAttr("style");
                    }

                });

                if ($("body").hasClass("admin-bar")) {
                    fixed_menu.css('top', '80px');

                } else {
                    fixed_menu.css('top', '48px');

                }


            });
        </script>
        <script>jQuery("document").ready(function ($) {

                var fixed_menu = $('.mobileheader-wrapper');


                $(window).scroll(function () {
                    if ($(this).scrollTop() > 62 && window.matchMedia('(max-width: 992px)').matches) {
                        fixed_menu.css('position', 'fixed').css('top', '0').css('right', '0').css('left', '0').css('width', '100%').css('z-index', '9999').css('background-color', '#fff').css('box-shadow', '0 1px 8px rgb(94 189 187 / 54%)');

                    } else {
                        fixed_menu.removeAttr("style");
                    }

                });


                if ($("body").hasClass("admin-bar")) {
                    fixed_menu.css('top', '108px');

                } else {
                    fixed_menu.css('top', '62px');

                }


            });
        </script>
        <script>

            jQuery(function ($) {
                $('a[href*="#"]:not([href="#"])').click(function () {
                    var target = $(this.hash);
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top - 160
                    }, 'linear');
                });
                if (location.hash) {
                    var id = $(location.hash);
                }
                $(window).load(function () {
                    if (location.hash) {
                        $('html,body').animate({scrollTop: id.offset().top - 160}, 'linear')
                    }
                    ;
                });
            });

        </script>

        <!-- #masthead -->
        <div class="mobileheader-wrapper visible-xs visible-sm">
            <div id="mobileheader">

                <div class="burger pull-left">
                    <div class="pull-right">
                        <? wp_nav_menu(array(
                            'theme_location' => 'top__desktop',
                            'container' => false,
                            'menu_class' => 'navbar-nav',
                            'menu_id' => 'nav',
                        )); ?>
                    </div>
                </div>
                <div class="right-icons pull-right">
                    <div class="orange-btn">
                        <a href="<?php echo get_home_url(); ?>/pomoch-sejchas"><span class="btn help-now"
                                                                                     style="min-width: auto; padding: 6px 17px; margin-right: 5px;">Помочь</span></a>
                    </div>
                </div>
                <div class="logo-block">
                    <div class="logo">
                        <a href="/"><img src="<? echo get_template_directory_uri() ?>/assets/images/logo_color.png"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </header>

<?php
if (function_exists('yoast_breadcrumb') && !is_home() && !is_front_page()) {
    yoast_breadcrumb('<div class="maxwidth-theme"><div class="breadcrumbs"><p id="breadcrumbs">', '</p></div></div>');
}
?>