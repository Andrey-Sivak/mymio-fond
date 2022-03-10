<?php
/**
Template Name: Контакты
 */
get_header();
?>

	<main id="primary" class="site-main">
        <div class="maxwidth-theme">
		<?/*php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) :
				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
			endif;*/

			/* Start the Loop */
			/*while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				/*get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		*/?>
        </div>
        <section id="contacts">
            <div class="maxwidth-theme">
                <div class="heading-article">
                   <h1 class="without-p">Контакты</h1>
               </div>
               <div class="items row contacts">
                   <div class="col-xs-12 col-md-6">
                       <div class="wrapper col-md-6">
                           <div class="element-wrap">
                               <span class="theme">Совместные проекты, отчетность и сотрудничество</span>
                               <span class="contacts-email">partners@mymiofond.ru</span>
                               <span class="contacts-person">Татьяна Костенко</span>
                           </div>
                       </div>
                       <div class="wrapper col-md-6">
                           <div class="element-wrap">
                               <span class="theme">Работа с подопечными<br>семьями</span>
                               <span class="contacts-email">ksenia.mymiofond@gmail.com</span>
                               <span class="contacts-person">Ксения Третьюхина</span>
                           </div>
                       </div>
                       <div class="wrapper col-md-6">
                           <div class="element-wrap">
                               <span class="theme">Для СМИ</span>
                               <span class="contacts-email">pr@mymiofond.ru</span>
                               <span class="contacts-person">Юлия Титкова</span>
                           </div>
                       </div>
                       
                       <div class="wrapper col-md-6">
                           <div class="element-wrap">
                               <span class="theme">Программа «Профессия»</span>
                               <span class="contacts-email">education@mymiofond.ru</span>
                               <span class="contacts-person">Никита Горлов</span>
                           </div>
                       </div>
                       <div class="wrapper col-md-6">
                           <div class="element-wrap">
                               <span class="theme">Юридическое сопровождение подопечных</span>
                               <span class="contacts-email">pravo@mymiofond.ru</span>
                               <span class="contacts-person">Светлана Касилова</span>
                           </div>
                       </div>
                   </div>
                   <div class="col-xs-12 col-md-5 col-md-offset-1">
                       <div class="wrap">
                           <h1>Почтовый адрес</h1>
                           <span>117218, г. Москва, ул. Кржижановского, дом 17, к.1,<br>абонементный почтовый ящик № 93</span>
                           <h1>Офис</h1>
                           <span>г. Москва, улица Большая Черемушкинская, дом 34,<br>офис 330</span>
                           <div class="map">
                           <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A81ad9b0c3d20500f5a6a71213e6eb326313c00fd3319fe36b1c7a8e85ad7f60f&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true"></script>
                           </div>
                       </div>
                   </div>
               </div>
               
            </div>
        </section>
        <section class="request-form-container">
            <div class="maxwidth-theme">
             <div class="heading-article">
                   <h1>Как стать подопечными фонда</h1>
                   <p>
                   Фонд оказывает помощь только семьям, проживающим на территории Российской Федерации. Все программы фонда разработаны с учетом особенностей редкой болезни и нацелены на комплексную и системную помощь ребятам с миодистрофией Дюшенна. Пациентам с другими тяжелыми нервно-мышечными заболеваниями фонд может оказать консультационную помощь при наличии ресурсов.<br><br>Заполните форму и координатор подопечных свяжется с вами в течение 3-4 дней</p>
               </div>
              <div class="contact-wrapper">
               <div class="request-block col-md-12 col-lg-6">
                <?php echo do_shortcode( '[contact-form-7 id="41310" title="Контакты"]' ); ?>
                <div class="bow-arrows"></div>
                <div class="sword-shield"></div>
                </div>
                </div>
            </div>
        </section> 
        
	</main><!-- #main -->

<?php
get_footer();