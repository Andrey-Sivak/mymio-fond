<?php
/**
Template Name: Контакты test
 */
get_header();
?>

	<main id="primary" class="site-main">
        <div class="maxwidth-theme">

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

                 <?php
                 $form_settings = [
                     'submit_button' => 'Отправить',
                     'name' => 'contact',
                     'form_fields' => [
                         [
                             'kind' => 'input',
                             'type' => 'text',
                             'placeholder' => 'Ваше ФИО',
                             'label' => '',
                             'validation' => 'name',
                             'required' => true,
                             'name' => 'parent_fio',
                             'elma_name' => 'parent_fullname'
                         ],
                         [
                             'kind' => 'input',
                             'type' => 'text',
                             'validation' => 'name',
                             'placeholder' => 'ФИО ребенка',
                             'label' => '',
                             'required' => true,
                             'name' => 'child_fio',
                             'elma_name' => 'child_fullname'
                         ],
                         [
                             'kind' => 'select',
                             'with_input' => true,
                             'label_for_input' => 'Кем вы приходитесь ребенку?',
                             'placeholder' => 'Кем вы приходитесь ребенку?',
                             'required' => true,
                             'name' => 'relation',
                             'elma_name' => 'pa_relation',
                             'options' => [
                                 'Родитель',
                                 'Опекун',
                             ],
                         ],
                         [
                             'kind' => 'input',
                             'required' => true,
                             'type' => 'date',
                             'placeholder' => 'Дата рождения ребенка',
                             'label' => '',
                             'name' => 'date_of_birth',
                             'elma_name' => 'birthdate',
                         ],
                         [
                             'kind' => 'select',
                             'with_input' => true,
                             'label_for_input' => 'Гражданство ребенка',
                             'placeholder' => 'Гражданство ребенка',
                             'required' => true,
                             'name' => 'citizenship',
                             'elma_name' => 'citizenship',
                             'options' => [
                                 'РФ',
                             ],
                         ],
                         [
                             'kind' => 'select',
                             'with_input' => true,
                             'label_for_input' => 'Укажите диагноз',
                             'placeholder' => 'Диагноз',
                             'required' => true,
                             'name' => 'diagnosis',
                             'elma_name' => 'pa_diagnosis',
                             'options' => [
                                 'Мышечная дистрофия Дюшенна/Беккера',
                             ],
                         ],
                         [
                             'kind' => 'input',
                             'type' => 'city',
                             'placeholder' => 'Город, в котором вы живете',
                             'label' => '',
                             'required' => true,
                             'name' => 'city_actual',
                             'elma_name' => 'city',
                         ],
                         [
                             'kind' => 'input',
                             'required' => true,
                             'type' => 'phone',
                             'placeholder' => 'Телефон',
                             'label' => '',
                             'name' => 'phone',
                             'elma_name' => 'contact_phone',
                         ],
                         [
                             'kind' => 'input',
                             'type' => 'text',
                             'validation' => 'email',
                             'placeholder' => 'Электронная почта',
                             'label' => '',
                             'required' => true,
                             'name' => 'email',
                             'elma_name' => 'email',
                         ],
                         [
                             'kind' => 'textarea',
                             'required' => true,
                             'placeholder' => 'Какая помощь вам нужна сейчас?',
                             'label' => '',
                             'name' => 'description',
                             'elma_name' => 'description',
                         ],
                     ],
                 ];

                 get_template_part('/template-parts/form-template', null, $form_settings); ?>

                <div class="bow-arrows"></div>
                <div class="sword-shield"></div>
                </div>
                </div>
            </div>
        </section> 
        
	</main><!-- #main -->

<?php
get_footer();