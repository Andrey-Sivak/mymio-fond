<?php
/**
Template Name: Родителям
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
       <script src="<? echo get_template_directory_uri()?>/assets/flexslider/jquery.flexslider-min.js"></script>
            
               <script type="text/javascript">
                <?/*$(document).ready()
                  $('.flexslider').flexslider({
                    animation: "slide"
                    });
            </script>*/?>
            
                   jQuery(document).ready(function($) {
  // The slider being synced must be initialized first
                      $('#carousel').flexslider({
                        animation: "slide",
                        controlNav: false,
                        animationLoop: false,
                        directionNav: false,
                        slideshow: false,
                        itemWidth: 440,
                        asNavFor: '#useful-slider'
                      });
                       
                       $('#useful-slider').flexslider({
                        animation: "slider",
                        controlNav: false,
                        directionNav: false,
                        animationLoop: false,
                        slideshow: false,
                        sync: "#carousel",
                        start: function(slider) {
                            $('#carousel .slides li a').click(function(event){
                                $('#useful-slider').flexslider("play");
                            });
                        }
                      });
                   });
                   
                   jQuery(document).ready(function($) {
  // The slider being synced must be initialized first
                      $('#carousel-veb').flexslider({
                        animation: "slide",
                        animationLoop: false,
                        directionNav: false,
                        controlsContainer: $("#controls-camp"),
                        slideshow: false,
                        itemWidth: 200,
                        itemMargin: 15,
                        minItems: 2,
                        maxItems: 5,
                        asNavFor: '#veb-slider'
                      });
                       
                       $('#veb-slider').flexslider({
                        animation: "slider",
                        controlNav: false,
                        customDirectionNav: $("#nav-progs a"),
                        animationLoop: false,
                        slideshow: false,
                        sync: "#carousel-veb",
                        start: function(slider) {
                            $('#carousel-veb .slides li a').click(function(event){
                                $('#tutorial-slider').flexslider("play");
                            });
                        }
                           
                      });
                   });
                   
            </script>
            
            <script src="<? echo get_template_directory_uri()?>/assets/fancybox-master/dist/jquery.fancybox.min.js"></script>
            
            <script>
            jQuery(".fancybox").fancybox({
                clickOutside: "close"
            });
            </script>
            
        </div>
          
               <div class="maxwidth-theme">
                    <div class="heading-article">
                       <h1>Родителям</h1>
                       <p style="margin-bottom: 30px;">На этой странице вы найдете информационные материалы по болезни</p>
                   </div>
              </div>
            <section id="roditelyam">
                  <div class="maxwidth-theme">
                   <div class="items row parents">
                       <div class="col-xs-12 col-sm-7">
                           <span>Вы не должны оставаться один на один с болезнью. Вместе — мы сильнее. Все программы фонда разработаны с учетом особенностей редкой болезни и нацелены на комплексную и системную помощь детям с миодистрофией Дюшенна и их семьям.</span>
                           <div>
                           <a href="<?php echo get_home_url(); ?>/kontakty/.request-form-container"><span class="btn to-help now">Стать подопечным фонда</span></a>
                               <a href="/lk-test/"><span class="btn to-help now">Личный кабинет</span></a>
                           </div>
                       </div>
                       <img src="<? echo get_template_directory_uri()?>/assets/images/icons/roditelyam.svg" alt="">
                       <?/*<div class="img-abs"></div>*/?>
                   </div>
                   </div>
            
            </section>  
            <section id="useful">
                <div class="maxwidth-theme">
                    <div class="heading-article">
                        <h1>Полезные материалы</h1>
                        <p>Мы подготовили памятки, обучающие видео и вебинары со специалистами по заболеванию, которые помогут разобраться в сложных вопросах и облегчат уход за ребенком с миодистрофией Дюшенна.</p>
                    </div>
                </div>
                <div class="useful-block visible-md visible-lg">
                    <div class="maxwidth-theme">
                       <div id="carousel" class="flexslider">
                        <ul class="slides" id="useful-links">
                           <li><a>Руководство для семей.</a></li>
                            <li>Анестезия и хирургические вмешательства.<br>Правила и рекомендации.</li>
                            <li>Вакцинация. Правила и рекомендации.</li>
                            <li><a>Неотложная помощь. Правила и рекомендации.</a></li>
                            <li><a>ОРВИ. Алгоритм действий.</a></li>
                            <li><a>Температура и признаки дыхательной недостаточности. Алгоритм действий.</a></li>
                            <li><a>Экстренная карта помощи. Карманная памятка.</a></li>
                            <li><a>Технические средства реабилитации. Назначение, подбор и использование.</a></li>
                            <li><a>Технические средства реабилитации. Алгоритм получения от юриста.</a></li>
                            <li><a>Статьи по узким и проблемным темам: от эндокринологии до экстренных ситуаций.</a></li>
                            
                        </ul>
                        </div>
                        <div id="useful-slider" class="flexslider">
                          <ul class="slides">
                           <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/Russian-RUS_FamilyDMDGuide_2018.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/1.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/1_mymio_memos-surgery-anesthesiology.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/2.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/2_mymio_memos-vaccination.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/3.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/3_mymio_memos-emergency.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/4.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/4_Algoritm_ORVI.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/5.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/5_PAMYATKA-po-DN_korrekt.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/6.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/7_mymio_emergencycard.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/7.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/8_tsr.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/8.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/algoritm_polucheniya_tsr.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/9.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            <li>
                              <a class="fancybox" data-fancybox="gallery" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/5_broshyura_a5-avertikal.pdf">
                    <div><img src="<? echo get_template_directory_uri()?>/assets/images/roditelyam/10.jpg"></div><span class="docs-caption open">Открыть</span>
                    </a>
                            </li>
                            
                            <!-- items mirrored twice, total of 12 -->
                          </ul>
                        </div>
                    </div>
                </div>
                <div class="useful-block-sm visible-xs visible-sm">
                    <div class="maxwidth-theme">
                        <ul>
                           <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/Russian-RUS_FamilyDMDGuide_2018.pdf">Руководство для семей.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/1_mymio_memos-surgery-anesthesiology.pdf"> Анестезия и хирургические вмешательства.<br>Правила и рекомендации.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/2_mymio_memos-vaccination.pdf">Вакцинация. Правила и рекомендации.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/3_mymio_memos-emergency.pdf">Неотложная помощь. Правила и рекомендации.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/4_Algoritm_ORVI.pdf">ОРВИ. Алгоритм действий.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/5_PAMYATKA-po-DN_korrekt.pdf">Температура и признаки дыхательной недостаточности. Алгоритм действий.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/7_mymio_emergencycard.pdf">Экстренная карта помощи. Карманная памятка.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/8_tsr.pdf">Технические средства реабилитации. Назначение, подбор и использование.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/algoritm_polucheniya_tsr.pdf">Технические средства реабилитации. Алгоритм получения от юриста.</a></li>
                            <li><a class="fancybox" data-fancybox="gallery2" data-fancybox-type="iframe" href="<? echo get_home_url()?>/ViewerJS/#../wp-content/themes/mymio_2021/assets/docs/roditelyam/5_broshyura_a5-avertikal.pdf">Статьи по узким и проблемным темам: от эндокринологии до экстренных ситуаций.</a></li>
                            
                        </ul>
                    </div>
                </div>
            </section>
            <div class="maxwidth-theme">
              <div class="items row margin0" style="background: #FFEEF8;">
               <div class="advice-vrach">
                  <div>
                   <img src="<? echo get_template_directory_uri()?>/assets/images/icons/advice.svg">
                   <span>Совет</span>
                   </div>
               </div>
                <div class="pre-head-block-vrach">
                   <div>
                    <span>Не бойтесь знакомить лечащего врача, педиатра или невролога с материалами по болезни. Постарайтесь делать это в добром ключе, без претензий и негатива. Если у врача возникнут вопросы или он захочет получить еще больше информации о болезни - можно поделиться контактом фонда.</span>
                    </div>
                </div>
                </div>
            </div>
            <section id="tutorial">
                <div class="maxwidth-theme">
                    <div class="heading-article">
                        <h1>Обучающие видео</h1>
                        <p style="margin-bottom: 50px;">Правила ухода за редкими мальчиками с миодистрофией Дюшенна.</p>
                        <p>Важно, чтобы пациенты и их близкие знали обо всем, что может улучшить здоровье и качество жизни ребят с миодистрофией Дюшенна. Фонд «МойМио» перевел и озвучил 20 видеороликов the World Duchenne Organization о стандартах ухода за пациентами с миодистрофией Дюшенна.</p>
                    <p>Ролики раскрывают разные темы: от психологических – как справляться со стрессами, что происходит в период полового созревания до медицинских – здоровье костей, респираторная поддержка, стероидная терапия, хирургические вмешательства и многое другое.</p>
                    </div>
                    
                </div>
                <script src="https://cdn.jsdelivr.net/gh/thelevicole/youtube-to-html5-loader@2.0.0/dist/YouTubeToHtml5.js"></script>
                <script>
            jQuery(document).ready(function($) {
                
            $('.slides li video').on({
                mouseenter: function () {
                  jQuery('.slides video').attr('controls',"controls")
                },
                mouseleave: function () {
                  jQuery('.slides video').removeAttr('controls');
                }
            });
                });
                </script>
                <div class="useful-block">
                    <div class="maxwidth-theme">
                       
                        <div id="veb-slider" class="flexslider">
                          <ul class="slides">
                            <li>
                             <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/TTEBn-2CQ8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Привыкая к диагнозу</span></div>
                              </div>
                              
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/jNWDaNprIh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Поведение и адаптация</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/AvQ-AuaVaDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Здоровье костей</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/ZSUoGxYmMdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Кардиология</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/h-RDjVI1uFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Кардиологические устройства</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/x5bt1jQXA_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Экстренные ситуации</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/ZXjaL3CoSVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Желудочно-кишечный тракт<br>и мочевыводящая система</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/4SFIY79gx2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Респираторная поддержка</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/CAgo7oM6yI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Рост</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/0ECusHNYkCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Обучение и интеллект</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/MF-thsx8BM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Ортопедические аспекты</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/vbEN-9Fr-04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Физическая терапия. Часть 1.</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/aC1_eqPhYoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Физическая терапия. Часть 2.</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/4SFhPWxfa58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Половое созревание</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/B-waLs75e4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Дыхание</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/t94BxfiDgtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Стероидная терапия. Часть 1.</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/O6q8od_LBG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Стероидная терапия. Часть 2.</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/GyCzUR0BwwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Хирургические вмешательства</span></div>
                              </div>
                            </li>
                            <li>
                              <div class="row margin0">
                              <iframe width="560" height="445" src="https://www.youtube.com/embed/5xfzIEbk2kU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div class="video-caption"><span>Переход во взрослую клинику</span></div>
                              </div>
                            </li>
                            <!-- items mirrored twice, total of 12 -->
                          </ul>
                          <div class="custom-navigation" id="nav-progs"><div class="custom-controls-container" id="controls-progs"></div></div>
                        </div>
                        
                        <div id="carousel-veb" class="flexslider">
                        <ul class="slides" id="useful-links-veb">
                            <li><img src="https://img.youtube.com/vi/TTEBn-2CQ8g/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/jNWDaNprIh0/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/AvQ-AuaVaDU/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/ZSUoGxYmMdI/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/h-RDjVI1uFE/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/x5bt1jQXA_w/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/ZXjaL3CoSVc/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/4SFIY79gx2U/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/_CAgo7oM6yI/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/0ECusHNYkCE/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/MF-thsx8BM4/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/vbEN-9Fr-04/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/aC1_eqPhYoc/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/4SFhPWxfa58/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/B-waLs75e4Q/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/t94BxfiDgtI/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/O6q8od_LBG4/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/GyCzUR0BwwQ/hqdefault.jpg" alt="">
                            <li><img src="https://img.youtube.com/vi/5xfzIEbk2kU/hqdefault.jpg" alt="">
                        </ul>
                        </div>
                        <div class="custom-navigation" id="nav-camp">
                        <div class="custom-controls-container vebinar" id="controls-camp"></div>
                    </div>
                        <a href="https://www.youtube.com/channel/UC1h969MxrGpYW89OQwbTPOw" target="_blank"><span>Смотреть вебинары на YouTube ></span></a>
                    </div>
                </div>
                <script> new YouTubeToHtml5();</script>
                
            </section>  
            <section id="hotline">
                
                    <div class="maxwidth-theme">
                       <div class="heading-article">
                          <h1 style="margin-bottom: 10px;">Важные номера телефонов</h1>
                           <h3 class="without-p" style="margin-top:0;"><b>Куда еще можно обратиться за поддержкой</b></h3>
                        </div>
                        <div class="hotline-block">
                            <div class="col-xs-12 col-lg-6">
                                <span>Горячая линия правовой поддержки</span>
                                <span>8 800 500 82 66</span>
                                <span>Оказывает юридическую поддержку по вопросам нарушения права получения медицинской помощи, помогает добиться реализации нарушенного права или объясняет куда обратиться за дополнительной информацией. Все консультации бесплатные. Горячая линия работает с 12 до 17 часов по московскому времени.</span>
                            </div>
                            <div class="col-xs-12 col-lg-5 col-lg-offset-1">
                                    <span>Горячая линия по паллиативной помощи</span>
                                <span>8 800 700 84 36</span>
                                <span>Оказывает поддержку по информационным, юридическим, медико-социальным, психологическим и духовным вопросам. Все консультации бесплатные. Горячая линия работает круглосуточно.</span>
                            </div>
                            <div class="col-xs-12 col-lg-6">
                                <span>«Горячая линия» Росздравнадзора по соблюдению прав граждан в сфере охраны здоровья</span>
                                <span>8 800 550 99 03</span>
                                <span>Ведет прием обращений и жалоб граждан о нарушении порядка назначения и выписки лекарственных препаратов. Все консультации бесплатные. Горячая линия работает круглосуточно.</span>
                            </div>
                            <div class="col-xs-12 col-lg-5 col-lg-offset-1">
                                    <span>Горячая линия «Ворди» консультации совместной госпитализации и допуску в реанимацию</span>
                                <span>8 800 777 23 47</span>
                                <span>Все консультации бесплатные. Горячая линия работает с 8.00 до 17.00 с понедельника по пятницу.</span>
                            </div>
                            
                        </div>
                    </div>
                
            </section>
	</main><!-- #main -->

<?php
get_footer();