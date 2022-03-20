<?php
/**
 * Template Name: Личный кабинет тест
 */

session_start();

$is_user = $_SESSION['user_name'];

if (!$is_user) {
    $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    header("Location: /?enter");
    exit();
}

$user_name = $_SESSION['user_name'];
$user_email = $_SESSION['user_email'];

require_once(ABSPATH . 'Scripts/connect.php');

$query = "SELECT `elma_id` FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);
$result = mysqli_fetch_all($result, MYSQLI_ASSOC);
$db->close();

get_header();
?>
    <span style="display: none;" id="elma-id"><?= $result[0]['elma_id']; ?></span>

    <main id="primary" class="site-main">

        <div class="maxwidth-theme">
            <script src="<?= get_template_directory_uri() ?>/assets/flexslider/jquery.flexslider-min.js"></script>

            <script type="text/javascript">

                jQuery(document).ready(function ($) {
                    $('#progs').flexslider({
                        animation: "slide",
                        animationLoop: false,
                        slideshow: false,
                        controlsContainer: $("#controls-progs"),
                        customDirectionNav: $("#nav-progs a"),
                        touch: true,
                        itemWidth: 320,
                        itemMargin: 25,
                        minItems: 1,
                        maxItems: 3
                    });
                });
            </script>


            <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-autocomplete/1.0.7/jquery.auto-complete.min.js"
                    integrity="sha512-TToQDr91fBeG4RE5RjMl/tqNAo35hSRR4cbIFasiV2AAMQ6yKXXYhdSdEpUcRE6bqsTiB+FPLPls4ZAFMoK5WA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/jquery-autocomplete/1.0.7/jquery.auto-complete.css"
                  integrity="sha512-uq8QcHBpT8VQcWfwrVcH/n/B6ELDwKAdX4S/I3rYSwYldLVTs7iII2p6ieGCM13QTPEKZvItaNKBin9/3cjPAg=="
                  crossorigin="anonymous" referrerpolicy="no-referrer"/>
            <link rel="stylesheet" href="https://releases.jquery.com/git/ui/jquery-ui-git.css"/>
            <style>
                .ui-state-active:hover {
                    border: 1px solid #009d9a;
                    background: #009d9a;
                    font-weight: normal;
                    color: #ffffff;
                }

                .ui-menu {
                    background: #EDFFFE;
                    max-width: 530px;
                    max-height: 300px;
                    overflow-y: auto;
                    overflow-x: hidden;
                }

                .ui-menu .ui-menu-item {
                    line-height: 22px;
                    font-size: 16px;
                    color: grey;
                }
            </style>
        </div>

        <div class="maxwidth-theme overfl">
            <div class="heading-article">
                <h1 class="without-p">Личный кабинет</h1>

                <div class="user-info">
                    <p class="user-info__caption">Личные данные</p>
                    <div class="user-info__row">
                        <p>ФИО</p>
                        <p data-info="parent_fullname"></p>
                    </div>
                    <div class="user-info__row">
                        <p>ФИО ребенка</p>
                        <p data-info="child_fullname"></p>
                    </div>
                    <div class="user-info__row">
                        <p>Диагноз</p>
                        <p data-info="pa_diagnosis"></p>
                    </div>
                    <div class="user-info__row">
                        <p>Дата рождения ребенка</p>
                        <p data-info="child_birthdate"></p>
                    </div>
                    <div class="user-info__row">
                        <p>Город</p>
                        <p data-info="city"></p>
                    </div>
                    <div class="user-info__row">
                        <p>Гражданство</p>
                        <p data-info="child_citizenship"></p>
                    </div>
                    <div class="user-info__row">
                        <p>Email</p>
                        <p data-info="email"></p>
                    </div>
                </div>

                <style>
                    .user-info {
                        margin: 20px;
                        max-width: 50%;
                    }

                    .user-info__caption {
                        font-size: 20px;
                        margin-bottom: 20px;
                    }

                    .user-info__row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 15px;
                    }

                    .user-info__row p {
                        margin-bottom: 0 !important;
                        width: auto;
                    }

                    .user-info__row p:first-child {
                        font-weight: bold;
                    }
                </style>
                <a href="<?= get_home_url() . '/custom_auth/exit.php' ?>">Выйти</a>
            </div>
            <div class="lk-container">
                <div class="lk-tabs">
                    <span class="lk-tab active" data-tab="1">Основная информация</span>
                    <span class="lk-tab" data-tab="2">Медицинская анкета</span>
                    <span class="lk-tab" data-tab="3">Документы</span>
                    <span class="lk-tab" data-tab="4">Участие в программах</span>
                    <span class="lk-tab" data-tab="5">Архив мед.анкет</span>
                </div>
                <div class="lk-body">
                    <div class="lk-form active" data-form="1">
                        <section class="lk-form-container">
                            <?php
                            $form_settings = [
                                'caption' => 'Персональные данные Подопечного',
                                'submit_button' => 'Подписать и отправить',
                                'name' => 'main_info',
                                'form_fields' => [
                                    [
                                        'kind' => 'select',
                                        'required' => true,
                                        'with_input' => false,
                                        'elma_name' => 'main_ank_status',
                                        'placeholder' => 'Статус заболевания',
                                        'name' => 'status',
                                        'options' => [
                                            'Клинически подтвержден врачом',
                                            'Генетически подтвержден',
                                            'Мутация не выявлена',
                                            'Затрудняюсь отвеить',
                                        ],
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'type' => 'text',
                                        'elma_name' => 'main_ank_place_of_birth',
                                        'placeholder' => 'Место рождения',
                                        'label' => '',
                                        'name' => 'main_info_place_of_birth'
                                    ],
                                    [
                                        'kind' => 'select',
                                        'required' => true,
                                        'with_input' => false,
                                        'elma_name' => 'main_ank_document_type',
                                        'placeholder' => 'Вид документа',
                                        'question' => 'Вид документа',
                                        'label' => '',
                                        'name' => 'pass_kind',
                                        'options' => [
                                            'Паспорт',
                                            'Свидетельство о рождении',
                                        ],
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'type' => 'text',
                                        'elma_name' => 'main_ank_pass_series',
                                        'placeholder' => 'Серия документа подопечного',
                                        'label' => '',
                                        'name' => 'pass_series'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'type' => 'text',
                                        'elma_name' => 'main_ank_pass_number',
                                        'placeholder' => 'Номер документа подопечного',
                                        'label' => '',
                                        'name' => 'pass_number'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'type' => 'text',
                                        'elma_name' => 'main_ank_pass_issuance',
                                        'placeholder' => 'Дата выдачи',
                                        'label' => '',
                                        'name' => 'pass_issuance'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'type' => 'text',
                                        'elma_name' => 'main_ank_pass_authority',
                                        'placeholder' => 'Кем выдан',
                                        'label' => '',
                                        'name' => 'pass_authority'
                                    ],
                                    [
                                        'kind' => 'text_block',
                                        'caption' => 'Официальный представитель подопечного',
                                        'text' => 'Если Вы старше 18 лет и заполняете анкету самостоятельно, то дальше вы указываете контакты близкого человека, с которым Фонд может поддерживать связь. Если подопечный младше 18 лет, в этом случае заполняет анкету его законный представитель, который оформлял документы с Фондом'
                                    ],
                                    [
                                        'kind' => 'select',
                                        'required' => true,
                                        'elma_name' => 'main_ank_relation',
                                        'with_input' => false,
                                        'placeholder' => 'Кем вы приходитесь подопечному?',
                                        'name' => 'relation',
                                        'options' => [
                                            'Мама',
                                            'Папа',
                                            'Опекун',
                                            'Попечитель',
                                        ],
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'elma_name' => 'main_ank_rel_pass_series',
                                        'type' => 'text',
                                        'placeholder' => 'Серия паспорта представителя',
                                        'label' => '',
                                        'name' => 'rel_pass_series'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'elma_name' => 'main_ank_rel_pass_number',
                                        'type' => 'text',
                                        'placeholder' => 'Номер паспорта представителя',
                                        'label' => '',
                                        'name' => 'rel_pass_number'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'elma_name' => 'main_ank_rel_pass_issuance',
                                        'type' => 'text',
                                        'placeholder' => 'Дата выдачи',
                                        'label' => '',
                                        'name' => 'rel_pass_issuance'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'elma_name' => 'main_ank_rel_pass_authority',
                                        'type' => 'text',
                                        'placeholder' => 'Кем выдан',
                                        'label' => '',
                                        'name' => 'rel_pass_authority'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'elma_name' => 'main_ank_rel_address_act_pred',
                                        'type' => 'text',
                                        'placeholder' => 'Адрес фактического места жительства представителя',
                                        'label' => '',
                                        'name' => 'rel_address_act_pred'
                                    ],
                                    /*[
                                        'kind' => 'input',
                                        'required' => true,
                                        'elma_name' => 'main_ank_fio_pred',
                                        'type' => 'text',
                                        'placeholder' => 'ФИО',
                                        'label' => '',
                                        'name' => 'fio_pred'
                                    ],*/
                                    [
                                        'kind' => 'input',
//                                        'required' => true,
                                        'elma_name' => 'main_ank_phone1',
                                        'type' => 'phone',
                                        'placeholder' => 'Телефон',
                                        'label' => '',
                                        'name' => 'phone1'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'type' => 'phone',
                                        'elma_name' => 'main_ank_phone22',
                                        'placeholder' => 'Резервный телефон',
                                        'label' => '',
                                        'name' => 'phone2'
                                    ],
                                    [
                                        'kind' => 'text_block',
                                        'caption' => 'Адрес:',
                                        'text' => 'В этом окне просим вас ввести адрес регистрации по шаблону. Пожалуйста, очень внимательно заполняйте поле. Если будут допущены ошибки, мы не сможем доставить вам адресную помощь.
<br>
Как заполнять: область, город, улица, дом, корпус, квартира
<br>
Шаблон: Московская область, город Химки, ул. Мира, д.16, корп.1, кв.33'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => true,
                                        'type' => 'address',
                                        'elma_name' => 'main_ank_address_reg_pod',
                                        'placeholder' => 'Адрес регистрации',
                                        'label' => '',
                                        'name' => 'address_reg_pod'
                                    ],
                                    [
                                        'kind' => 'radio',
                                        'question' => 'Указанный адрес регистрации совпадает с адресом проживания?',
                                        'name' => 'reg_same_live',
                                        'items' => [
                                            'Да',
                                            'Нет',
                                        ],
                                        'condition_relation' => 'diff_act_address'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'elma_name' => 'main_ank_address_act_pod',
                                        'type' => 'address',
                                        'placeholder' => 'Адрес фактического проживания',
                                        'label' => '',
                                        'name' => 'address_act_pod',
                                        'condition' => [
                                            'condition_dependency' => 'diff_act_address',
                                            'require_value' => 'false',
                                        ],
                                    ],
                                    [
                                        'kind' => 'radio',
                                        'question' => 'Указанный адрес регистрации совпадает с почтовым адресом?',
                                        'name' => 'reg_same_post',
                                        'items' => [
                                            'Да',
                                            'Нет',
                                        ],
                                        'condition_relation' => 'diff_post_address'
                                    ],
                                    [
                                        'kind' => 'input',
                                        'elma_name' => 'main_ank_address_mail_pod',
                                        'type' => 'address',
                                        'placeholder' => 'Почтовый адрес',
                                        'label' => '',
                                        'name' => 'address_mail_pod',

                                        'condition' => [
                                            'condition_dependency' => 'diff_post_address',
                                            'require_value' => 'false',
                                        ]
                                    ],
                                    [
                                        'kind' => 'checkbox',
                                        'question' => '',
                                        'elma_name' => '',
                                        'required' => true,
                                        'items' => [
                                            [
                                                'label' => 'Данные заполнены верно',
                                                'name' => ''
                                            ],
                                        ],
                                    ],
                                    [
                                        'kind' => 'checkbox',
                                        'question' => '',
                                        'elma_name' => '',
                                        'name' => 'privacy_confirm',
                                        'required'	=> true,
                                        'items' => [
                                            [
                                                'label' => 'Согласен на обработку персональных данных',
                                                'name' => ''
                                            ],
                                        ],
                                    ],
                                ],
                            ];

                            get_template_part('/template-parts/form-template', null, $form_settings); ?>
                        </section>
                    </div>
                    <div class="lk-form" data-form="2">
                        <section class="lk-form-container">

                            <p class="lk-progress">Заполнение мед. анкеты <span class="lk-progress-inner"></span> блоков</p>

                            <div class="lk-form__tabs">
                                <span class="lk-form__tab" data-tab="1">Общая информация о пациенте и заболевании</span>
                                <span class="lk-form__tab" data-tab="2">Неврология</span>
                                <span class="lk-form__tab" data-tab="3">Ортопедия</span>
                                <span class="lk-form__tab" data-tab="4">Реабилитация</span>
                                <span class="lk-form__tab" data-tab="5">Эндокринология</span>
                                <span class="lk-form__tab" data-tab="6">Пульмонология</span>
                                <span class="lk-form__tab" data-tab="7">Гастроэнтерология</span>
                                <span class="lk-form__tab" data-tab="8">Кардиология</span>
                                <span class="lk-form__tab" data-tab="9">Хирургические вмешательства</span>
                                <span class="lk-form__tab" data-tab="10">Социальный/Возможности среды</span>
                                <span class="lk-form__tab" data-tab="11">Социально–психологический блок</span>
                            </div>

                            <div class="lk-form__tab_content" data-form="1">
                                <?php // Общая информация о пациенте и заболевании
                                $form_settings = [
                                    'caption' => 'Общая информация о пациенте и заболевании',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Анкета заполняется законным представителем подопечного. Даже, если Вы наш совершеннолетний подопечный, просим заполнять анкету вместе с представителем. От полноты и правильности данных зависит работа Регистра. Спасибо вам!',
                                    'tab' => '1',
                                    'name' => 'common_info',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Bозраст',
                                            'with_input' => false,
                                            'required' => true,
                                            'question' => 'Возраст постановки диагноза миодистрофия Дюшенна/Беккера',
                                            'name' => 'age',
                                            'elma_name' => 'mank_diagnosis_age_2',
                                            'options' => [
                                                '1',
                                                '2',
                                                '3',
                                                '4',
                                                '5',
                                                '6',
                                                '7',
                                                '8',
                                                '9',
                                                '10',
                                                '11',
                                                '12',
                                                '13',
                                                '14',
                                                '15',
                                                '16',
                                                '17',
                                                '18',
                                                '19',
                                                '20',
                                            ],
                                            'condition_relation' => 'diagnosis_age',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'required' => true,
                                            'with_input' => true,
                                            'placeholder' => 'Выбрать',
                                            'name' => 'find_in',
                                            'question' => 'Где впервые заподозрили(предположили) диагноз миодистрофия Дюшенна/Беккера?<br><span class="contact-form__form-field_note-small">Вам необходимо выбрать учреждение из списка. Если перечисленные варианты Вам не подходят - указжите только свой ответ',
                                            'options' => [
                                                'Поликлиника',
                                                'Региональное медицинское учреждение (больница, КДЦ и др)',
                                                'Федеральное медицинское учреждение (НИКИ Педиатрии, НЦЗД, РДКБ и др)',
                                                'За границей',
                                            ],
                                            'elma_name' => 'mank_first_place_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'required' => true,
                                            'placeholder' => 'Выбрать',
                                            'with_input' => true,
                                            'name' => 'research_place',
                                            'question' => 'Где проводилось генетическое исследование и подтвердился диагноз?',
                                            'options' => [
                                                'МГНЦ имени Н.П. Бочкова',
                                                'Иностранная лаборатария',
                                                'Другая государственная лаборатория (указать)',
                                                'Другая коммерческая лаборатория (указать)',
                                            ],
                                            'elma_name' => 'mank_gen_research_place_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'with_input' => false,
                                            'label_for_input' => '',
                                            'placeholder' => 'Какая мутация выявлена?',
                                            'required' => true,
                                            'name' => 'mutation',
                                            'options' => [
                                                'Делеция',
                                                'Дупликация',
                                                'Миссенс',
                                                'Нонсенс',
                                                'Мутация не найдена',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_mutation_detected_2',
                                        ],
                                        [
                                            'kind' => 'train',
                                            'question' => 'Отметьте конкретный участок гена, где произошла мутация',
                                            'required' => true,
                                            'name' => 'train',
                                            'elma_name' => 'mank_gen_select',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Есть ли среди ваших родственников случаи заболевания миодистрофией Дюшенна/Беккера?',
                                            'required' => true,
                                            'name' => 'disease_parent',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Не знаю',
                                            ],
                                            'elma_name' => 'mank_family_illness_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'name' => 'disease_mother',
                                            'required' => true,
                                            'question' => 'Является ли мама ребенка носительницей мутации?',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Не делали диагностику',
                                            ],
                                            'elma_name' => 'mank_mother_carrier_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'name' => 'is_another_sick_children',
                                            'required' => true,
                                            'question' => 'Есть ли еще в вашей семье дети с миодистрофией Дюшенна?',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_kids_illness_2',
                                        ],
                                        [
                                            'kind' => 'text_block',
                                            'caption' => 'Сопутсвующие диагнозы',
                                            'text' => 'Если у ребенка диагностированы другие заболевания кроме миодистрофии Дюшенна/Беккера, выберите их все в данном пункте'
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'city',
                                            'question' => 'Если вы не знаете точное название заболевания, не ориентируйтесь на подсказки.',
                                            'placeholder' => 'Выбор из МКБ',
                                            'label' => '',
                                            'required' => false,
                                            'name' => 'mkb',
                                            'elma_name' => 'mank_accompanying_diagnosis_2',
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="2">
                                <?php // Неврология
                                $form_settings = [
                                    'caption' => 'Неврология',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Неврология вы заполняете за текущий календарный год.',
                                    'tab' => '2',
                                    'name' => 'neurology',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'required' => true,
                                            'name' => 'neuro_last_visit',
                                            'question' => 'Сколько раз за последний год вы были на приеме у невролога?',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_neuro_last_visit_2',
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'question' => 'Укажите вес ребенка в кг <br>(важно, чтобы данные были актуальными на момент заполнения)',
                                            'placeholder' => 'кг',
                                            'label' => '',
                                            'required' => true,
                                            'name' => 'weight',
                                            'elma_name' => 'mank_weight_2',
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'question' => 'Укажите рост ребенка в см <br>(важно, чтобы данные были актуальными на момент заполнения)',
                                            'placeholder' => 'см',
                                            'label' => '',
                                            'required' => true,
                                            'name' => 'height',
                                            'elma_name' => 'mank_height_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'with_input' => false,
                                            'label_for_input' => '',
                                            'required' => true,
                                            'placeholder' => 'Выбрать',
                                            'name' => 'motor_capabilities_now',
                                            'question' => 'Какаие двигательные возможности у сына на данный момент?',
                                            'options' => [
                                                'Ходит сам',
                                                'Ходит сам (но тяжело) или с поддержкой',
                                                'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                            ],
                                            'elma_name' => 'mank_motor_abilities_2',
                                            'condition_relation' => 'lost_ability',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'required' => false,
                                            'name' => 'mank_neuro_lost_ability',
                                            'question' => 'В каком возрасте ваш сын потерял способность самостоятельной ходьбы?',
                                            'options' => [
                                                '6',
                                                '7',
                                                '8',
                                                '9',
                                                '10',
                                                '11',
                                                '12',
                                                '13',
                                                '14',
                                                '15',
                                                '16',
                                                '17',
                                            ],
                                            'elma_name' => 'mank_neuro_lost_ability',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена'
                                                ],
                                            ]
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'required' => true,
                                            'question' => 'Получает ли ребенок стероидную терапию (преднизолон/дефлазакорт)?',
                                            'name' => 'steroid_therapy',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_neuro_steroids_2',
                                            'condition_relation' => 'neuro_steroids'
                                        ],
                                        [
                                            'kind' => 'textarea',
                                            'required' => false,
                                            'placeholder' => 'Укажите схему приема и дозировку',
                                            'label' => 'Укажите схему приема и дозировку',
                                            'question' => 'Укажите схему приема и дозировку',
                                            'name' => 'steroid_therapy_amount',
                                            'elma_name' => 'mank_neuro_steroids_treatment_2',
                                            'condition' => [
                                                'condition_dependency' => 'neuro_steroids',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Bозраст',
                                            'with_input' => false,
                                            'required' => false,
                                            'question' => 'С какого возраста начали применение терапии?',
                                            'name' => 'steroid_therapy_since',
                                            'options' => [
                                                '2',
                                                '3',
                                                '4',
                                                '5',
                                                '6',
                                                '7',
                                                '8',
                                                '9',
                                                '10',
                                                '11',
                                                '12',
                                                '13',
                                                '14',
                                                '15',
                                            ],
                                            'elma_name' => 'mank_neuro_treatment_start_age_2',
                                            'condition' => [
                                                'condition_dependency' => 'neuro_steroids',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'question' => 'Наблюдаются ли побочные эффекты от стероидной терапии?',
                                            'name' => 'steroid_therapy_side_effects',
                                            'is_input_exist' => true,
                                            'required' => false,
                                            'items' => [
                                                [
                                                    'label' => 'Набор веса и ожирение',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => '"Луннообразное лицо"',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Повышенная волосатость',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Прыщи, грибковые кожные инфекции, бородавки',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Низкий рост',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Задержка полового созревания',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Неблагоприятные поведенческие изменения',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Подавление иммунитета',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Высокое кровяное давление',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Гастрит',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Язвенная болезнь',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Катаракта',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Остеопороз',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Изменение цвета мочи',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Другое (указать)',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_neuro_treatment_side_effects_2',
                                            'condition' => [
                                                'condition_dependency' => 'neuro_steroids',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Есть ли у вас опыт иной (генной или клеточной) терапии?',
                                            'name' => 'mank_neuro_gen_therapy',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_neuro_gen_therapy',
                                            'condition_relation' => 'neuro_gen_therapy'
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'question' => 'Укажите, пожалуйста, вид применяемой терапии',
                                            'placeholder' => 'Вид применяемой терапии',
                                            'label' => 'Вид применяемой терапии',
                                            'required' => false,
                                            'name' => 'mank_neuro_gen_therapy_type',
                                            'elma_name' => 'mank_neuro_gen_therapy_type',
                                            'condition' => [
                                                'condition_dependency' => 'neuro_gen_therapy',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'question' => 'Когда вы начали применение такой терапии? Укажите месяц и год',
                                            'placeholder' => 'Укажите месяц и год',
                                            'label' => 'Укажите месяц и год',
                                            'required' => false,
                                            'name' => 'mank_neuro_gen_therapy_start',
                                            'elma_name' => 'mank_neuro_gen_therapy_start',
                                            'condition' => [
                                                'condition_dependency' => 'neuro_gen_therapy',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Проводилось ли исследование мышечной силы ребенку?',
                                            'name' => 'muscle_strength',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_neuro_muscle_study_2',
                                            'condition_relation' => 'neuro_muscle_study'
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'required' => false,
                                            'with_input' => false,
                                            'question' => 'Укажите балл мышечной силы рук при его наличии',
                                            'name' => 'mank_neuro_muscle_study_ball',
                                            'options' => [
                                                '1',
                                                '2',
                                                '3',
                                                '4',
                                                '5',
                                            ],
                                            'elma_name' => 'mank_neuro_muscle_study_ball',
                                            'condition' => [
                                                'condition_dependency' => 'neuro_muscle_study',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'question' => 'Ребенок говорит о наличии у него болезненных ощущений? Если да, то о каких',
                                            'is_input_exist' => true,
                                            'required' => true,
                                            'name' => 'mank_pain_symptoms_2',
                                            'items' => [
                                                [
                                                    'label' => 'Боль в руках',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Боль в ногах',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Боль в спине',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Болит в груди',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Болит живот',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Не испытывает болезненные ощущения',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Другое (указать)',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_pain_symptoms_2',
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="3">
                                <?php // Ортопедия
                                $form_settings = [
                                    'caption' => 'Ортопедия',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Ортопедия вы заполняете за текущий календарный год.',
                                    'tab' => '3',
                                    'name' => 'orthopedics',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Сколько раз за последний год вы были на приеме у ортопеда?',
                                            'required' => true,
                                            'name' => 'mank_orotho_last_visit_2',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_orotho_last_visit_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'required' => true,
                                            'question' => 'Проводилась ли рентгенография грудного и поясничного отдела позвоночников в боковой проекции за последний год?',
                                            'name' => 'mank_orotho_xray_chest_2',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Не знаю',
                                            ],
                                            'elma_name' => 'mank_orotho_xray_chest_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Есть ли у ребенка сколиоз?',
                                            'required' => true,
                                            'name' => 'is_scoliosis',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Не знаю',
                                            ],
                                            'elma_name' => 'mank_orotho_scoliosis_2',
                                            'condition_relation' => 'orotho_scoliosis'
                                        ],
                                        [
                                            'kind' => 'textarea',
                                            'question' => 'Укажите степень и угол сколиоза при наличии (обычно указывается в выписке от ортопеда)',
                                            'required' => false,
                                            'placeholder' => 'Укажите степень и угол сколиоза',
                                            'label' => 'Укажите степень и угол сколиоза',
                                            'name' => 'scoliosis',
                                            'elma_name' => 'mank_orotho_scoliosis_details_2',
                                            'condition' => [
                                                'condition_dependency' => 'orotho_scoliosis',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Ребёнок используете корсет?',
                                            'name' => 'is_corset',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_orothoscoliosis_corset_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Есть ли у вашего сына контрактуры?',
                                            'name' => 'is_contracture',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_orotho_contracture_2',
                                            'condition_relation' => 'orotho_contracture'
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'name' => 'corset_kind',
                                            'required' => false,
                                            'question' => 'Перечислите, в каких именно местах контрактуры сформировались/ухудшились за последний год',
                                            'items' => [
                                                [
                                                    'label' => 'правая кисть/левая кисть',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'правый локоть/левый локоть',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'правое плечо/левое плечо',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'правая стопа/левая стопа',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'правое колено/левое колено',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'правое бедро/левое бедро',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_orotho_contracture_details_2',
                                            'condition' => [
                                                'condition_dependency' => 'orotho_contracture',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Вы используете ортезы/тутора на голени/на кисти?',
                                            'name' => 'is_orthoses',
                                            'required' => true,
                                            'options' => [
                                                'Да, используем на руки',
                                                'Да, используем на ноги',
                                                'Да, используем на руки и на ноги',
                                                'Нет, не используем',
                                            ],
                                            'elma_name' => 'mank_orotho_orthosis_2',
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="4">
                                <?php //Реабилитация
                                $form_settings = [
                                    'caption' => 'Реабилитация',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Реабилитация вы заполняете за текущий календарный год.',
                                    'tab' => '4',
                                    'name' => 'reabilitation',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Сколько раз ребенок был консультирован физическим терапевтом (вопросы ТСР и физических упражнений\растяжек) за последний год?',
                                            'required' => true,
                                            'name' => 'mank_rehab_consult',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_rehab_consult',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Делаете ли вы с ребенком профилактические растяжки?',
                                            'required' => true,
                                            'name' => 'mank_rehab_stretching',
                                            'options' => [
                                                'Нет, не делаем',
                                                'Делаем редко, не чаще одного раза в месяц',
                                                'Делаем регулярно, 4-6 раз в неделю',
                                                'Ежедневно',
                                            ],
                                            'elma_name' => 'mank_rehab_stretching',
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'required' => true,
                                            'name' => 'tcp_have',
                                            'question' => 'Какие технические средства реабилитации (ТСР) рекомендованы сыну?',
                                            'items' => [
                                                [
                                                    'label' => 'Опора для стояния/вертикализатор',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло–коляска активная (ребенок сам колеса крутит)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло коляска пассивная (предназначены для перевозки людей)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло–коляска с электроприводом',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Подьемник',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло-подставка в ванную',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Санитарное кресло-стул',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Медицинская функциональная кровать',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ортезы (тутора) для рук',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ортезы (тутора) для ног',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Корсет',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ничего из пречисленного',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_rehab_devices',
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'required' => true,
                                            'name' => 'tcp_use',
                                            'question' => 'Какими средствами технической реабилитации (ТСР) ПОЛЬЗУЕТСЯ ваш сын?',
                                            'items' => [
                                                [
                                                    'label' => 'Опора для стояния/вертикализатор',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло–коляска активная (ребенок сам колеса крутит)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло коляска пассивная (предназначены для переевозки людей)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло–коляска с электроприводом',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Подьемник',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Кресло-подставка в ванную',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Санитарное кресло-стул',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Медицинская функциональная кровать',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ортезы (тутора) для рук',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ортезы (тутора) для ног',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Корсет',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ничего из пречисленного',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_rehab_devices_used',
                                        ],
                                    ]
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="5">
                                <?php // Эндокринология
                                $form_settings = [
                                    'caption' => 'Эндокринология',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Эндокринология вы заполняете за текущий календарный год.',
                                    'tab' => '5',
                                    'name' => 'endocrinology',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Сколько раз за последний год вы были на приеме у эндокринолога?',
                                            'required' => true,
                                            'name' => 'endo_last_visit',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_endo_last_visit_2',
                                            'condition_relation' => 'endo_last_visit'
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Проводилась ли ребенку денситометрия (диагностика плотности костной ткани) за последний год?',
                                            'required' => true,
                                            'name' => 'last_densitometry',
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_endo_densio_2',
                                            'condition_relation' => 'endo_densio'
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => true,
                                            'required' => false,
                                            'question' => 'Результат денситометрии',
                                            'name' => 'densitometry_result',
                                            'options' => [
                                                'Остеопороз не выявлен',
                                                'Оостеопороз выявлен, степень не указана',
                                                'Остеопороз/остеопения выявлен, (указать степень)',
                                            ],
                                            'elma_name' => 'mank_endo_densio_result_2',
                                            'condition' => [
                                                'condition_dependency' => 'endo_densio',
                                                'require_value' => [
                                                    'Да, один раз',
                                                    'Да, более одного раза'
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Проводилась ли вашему сыну оценка полового развития за последний год? ',
                                            'name' => 'is_sex_evolve_value',
                                            'required' => false,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_endo_pubert_test_2',
                                            'condition_relation' => 'endo_pubert_test',
                                            'condition' => [
                                                'condition_dependency' => 'diagnosis_age',
                                                'require_value' => ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                                            ],
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Соответсвует половое развитие возрастной норме?',
                                            'name' => 'is_sex_evolve_norm',
                                            'required' => false,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_endo_pubert_test_result_2',
                                            'condition' => [
                                                'condition_dependency' => 'endo_pubert_test',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Проводилось ли измерение роста',
                                            'name' => 'mank_endo_height_measure',
                                            'required' => false,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_endo_height_measure',
                                            'condition' => [
                                                'condition_dependency' => 'endo_last_visit',
                                                'require_value' => [
                                                    'Один раз',
                                                    'Два раза',
                                                    'Более двух раз'
                                                ],
                                            ],
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="6">
                                <?php // Пульмонология
                                $form_settings = [
                                    'caption' => 'Пульмонология',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Пульмонология вы заполняете за текущий календарный год.',
                                    'tab' => '6',
                                    'name' => 'pulmonology',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Сколько раз за последний год вы были на приеме у пульмонолога?',
                                            'required' => true,
                                            'name' => 'pulmo_last_visit',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_pulmo_last_visit_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => true,
                                            'question' => 'Сопровождает ли ребенка специалист по респираторной поддержке на регулярной основе?
<br>
Выберите подходящие варианты. Обычно это пульмонолог или врач-реаниматолог, но у вас может оказаться свой вариант ответа',
                                            'name' => 'is_specialist_support',
                                            'required' => false,
                                            'options' => [
                                                'Нет, т.к. в этом нет необходимости',
                                                'Нуждаемся, но нет специалиста',
                                                'Ребенка сопровождает пульмонолог',
                                                'Ребенка сопровождает врач-реаниматолог',
                                            ],
                                            'elma_name' => 'mank_pulmo_specialist_2',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'За последний год вы проходили исследование функции внешнего дыхания (ФВД)?',
                                            'name' => 'last_fvd',
                                            'required' => true,
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_pulmo_breath_res_last_2',
                                            'condition_relation' => 'pulmo_breath_res_last'
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'placeholder' => 'ФЖЕЛ (%)',
                                            'required' => false,
                                            'question' => 'Введите показатели ФЖЕЛ (форсированная жизненная емкость легких)',
                                            'label' => '',
                                            'name' => 'fjel',
                                            'elma_name' => 'mank_pulmo_breath_res_FJEL_2',
                                            'condition' => [
                                                'condition_dependency' => 'pulmo_breath_res_last',
                                                'require_value' => [
                                                    'Да, один раз',
                                                    'Да, более одного раза',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'required' => false,
                                            'placeholder' => 'ЖЕЛ (%)',
                                            'question' => 'Введите показатели ЖЕЛ (жизненная емкость легких)',
                                            'label' => '',
                                            'name' => 'jel',
                                            'elma_name' => 'mank_pulmo_breath_res_JEL_2',
                                            'condition' => [
                                                'condition_dependency' => 'pulmo_breath_res_last',
                                                'require_value' => [
                                                    'Да, один раз',
                                                    'Да, более одного раза',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'placeholder' => 'ПКС (л/мин)',
                                            'question' => 'Ведители показатели — ПКС (пиковая скорость кашля)',
                                            'label' => '',
                                            'required' => false,
                                            'name' => 'pks',
                                            'elma_name' => 'mank_pulmo_breath_res_PKS_2',
                                            'condition' => [
                                                'condition_dependency' => 'pulmo_breath_res_last',
                                                'require_value' => [
                                                    'Да, один раз',
                                                    'Да, более одного раза',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Проводилось ребенку исследование сна (полисомнография, кардиомониторинг, ночная пульсоксометрия и под.)',
                                            'required' => false,
                                            'name' => 'mank_pulmo_breath_dream_research',
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_pulmo_breath_dream_research',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Наблюдалось ли падение сатурации ниже 95% , если есть информация за прошедший год?',
                                            'required' => false,
                                            'name' => 'mank_pulmo_saturation',
                                            'options' => [
                                                'Да',
                                                'Нет',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_pulmo_saturation',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'question' => 'Жалуется ли ваш ребенок на (отметьте нужное)',
                                            'required' => true,
                                            'name' => 'problems_list',
                                            'items' => [
                                                [
                                                    'label' => 'Чувствует себя более уставшим, чем обычно, или сонным в течение дня',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Не хватает дыхания или с трудом заканчивает предложения',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Утренние головные боли (после пробуждения)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Проблемы со сном, часто просыпается, испытывает трудности с просыпанием или видит ночные кошмары',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Проснувшись, пытается отдышаться или чувствует, как колотится сердце',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'У ребенка проблемы с вниманием в течение дня дома или в школе',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ничего из перечисленного',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_pulmo_symptoms_2',
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'question' => 'Какие медицинские приборы вы используете?',
                                            'is_input_exist' => true,
                                            'required' => true,
                                            'name' => 'use_medical_devices',
                                            'items' => [
                                                [
                                                    'label' => 'Пульсоксиметр',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Мешок Амбу',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Аспиратор',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Откашливатель',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Ничего из перечисленного не используем',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Другое (указать)',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_pulmo_med_devices_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Делаете ли вы дыхательную гимнастику с сыном?',
                                            'name' => 'breath_exercises',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_pulmo_gym',
                                            'condition_relation' => 'pulmo_gym'
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Указать',
                                            'with_input' => true,
                                            'question' => 'Как именно делаете дыхательную гимнастику?',
                                            'required' => false,
                                            'name' => 'mank_pulmo_gym_fact',
                                            'options' => [
                                                'С мешком Амбу',
                                                'На откашливателе',
                                                'Используем ручные техники',
                                            ],
                                            'elma_name' => 'mank_pulmo_gym_fact',
                                            'condition' => [
                                                'condition_dependency' => 'pulmo_gym',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Использует ли ваш сын аппарат вентиляции легких?',
                                            'name' => 'is_ivl',
                                            'required' => false,
                                            'options' => [
                                                'Не использует',
                                                'Да, использует НИВЛ',
                                                'Да, использует ИВЛ',
                                            ],
                                            'elma_name' => 'mank_pulmo_nivl_2',
                                            'condition_relation' => 'pulmo_nivl_2',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => true,
                                            'question' => 'Сколько часов вентиляции требуется вашему сыну?',
                                            'name' => 'mank_pulmo_nivl_time',
                                            'required' => false,
                                            'options' => [
                                                'Дышит всю ночь',
                                                'Дышит немного ночью',
                                                'Дышит ночью и немного днем',
                                            ],
                                            'elma_name' => 'mank_pulmo_nivl_time',
                                            'condition' => [
                                                'condition_dependency' => 'pulmo_nivl_2',
                                                'require_value' => 'Да, использует НИВЛ',
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Может ли сын быть на спонтанном дыхании (когда аппарат выключен)?',
                                            'name' => 'mank_pulmo_breath_ability',
                                            'required' => false,
                                            'options' => [
                                                'Не знаем',
                                                'Не может',
                                                'Может',
                                            ],
                                            'elma_name' => 'mank_pulmo_breath_ability',
                                            'condition' => [
                                                'condition_dependency' => 'pulmo_nivl_2',
                                                'require_value' => 'Да, использует ИВЛ',
                                            ],
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="7">
                                <?php // Гастроэнтерология
                                $form_settings = [
                                    'caption' => 'Гастроэнтерология',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Гастроэнтерология вы заполняете за текущий календарный год.',
                                    'tab' => '7',
                                    'name' => 'gastroenterology',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Сколько раз за последний год вы были на приеме у гастроэнтеролога?',
                                            'required' => true,
                                            'name' => 'gastro_last_visit',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_gastro_last_visit_2',
                                        ],
                                        [
                                            'kind' => 'checkbox',
                                            'required' => true,
                                            'name' => 'is_problems',
                                            'is_input_exist' => true,
                                            'question' => 'Отметьте (если есть жалобы на) гастроэнтерологические проблемы ребенка?',
                                            'items' => [
                                                [
                                                    'label' => 'Запоры',
                                                    'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Гастрит',
                                                    'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Язва желудка',
                                                'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Отрыжка',
'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Запах изо рта',
                                                'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Боли в животе',
                                                    'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Другое (указать)',
                                                    'condition_relation' => 'gastro_symptoms',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_gastro_symptoms_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'is_input_exist' => true,
                                            'question' => 'Как питается сын в настоящий момент?',
                                            'required' => false,
                                            'name' => 'eat',
                                            'options' => [
                                                'Ест обычную пищу',
                                                'Используем блендированную пищу',
                                                'Используем лечебное питание',
                                            ],
                                            'elma_name' => 'mank_gastro_current_diet_2',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => true,
                                            'label_for_input'  => 'Насколько похудел(кг)',
                                            'question' => 'Наблюдается потеря веса за последний год?',
                                            'required' => false,
                                            'name' => 'weight_problem',
                                            'options' => [
                                                'Нет, потери веса не наблюдается',
                                                'Да, незначительно (указать насколько похудел - кг)',
                                                'Да, потеря веса значительна (указать, насколько похудел -кг)',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_gastro_weight_loss_2',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'required' => false,
                                            'with_input' => true,
                                            'question' => 'Увеличилось ли время приема пищи?',
                                            'name' => 'gulp_problems',
                                            'options' => [
                                                'Нет, ест как и прежде',
                                                'Время приема пищи увеличилось, но незначительно',
                                                'Стало гораздо труднее принимать пищу, время значительно увеличилось',
                                            ],
                                            'elma_name' => 'mank_gastro_dinner_time_2',
                                            'condition' => [
                                                'condition_dependency' => 'lost_ability',
                                                'require_value' => [
                                                    'Пользуется инвалидным креслом (скутером или подобным), способен удерживать тело, не нужен подголовник, активно пользуется руками',
                                                    'Использует кресло, требуется поддержка тела и головы. использует руки, но функциональность снижена',
                                                ],
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'required' => true,
                                            'with_input' => false,
                                            'question' => 'Проводилось ли УЗИ органов брюшной полости за последний год?',
                                            'name' => 'mank_gastro_uzi',
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_gastro_uzi',
                                            'condition' => [
                                                'condition_dependency' => 'gastro_symptoms',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="8">
                                <?php // Кардиология
                                $form_settings = [
                                    'caption' => 'Кардиология',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Кардиология вы заполняете за текущий календарный год.',
                                    'tab' => '8',
                                    'name' => 'cardiology',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'Сколько раз за последний год вы были на приеме у кардиолога?',
                                            'required' => true,
                                            'name' => 'mank_cardio_last_visit_2',
                                            'options' => [
                                                'Один раз',
                                                'Два раза',
                                                'Более двух раз',
                                                'Не были',
                                            ],
                                            'elma_name' => 'mank_cardio_last_visit_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Получает ли ребенок кардиологическую терапию сейчас?',
                                            'required' => true,
                                            'name' => 'is_cardio_therapy',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_cardio_therapy_2',
                                            'condition_relation' => 'cardio_therapy',
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'question' => 'Если сын получал кардиологическую терапию раньше, а сейчас она отменена, укажите, пожалуйста, причину',
                                            'placeholder' => 'Выбрать',
                                            'label' => 'Причина',
                                            'required' => false,
                                            'name' => 'mank_cardio_therapy_cancel',
                                            'elma_name' => 'mank_cardio_therapy_cancel',
                                            'condition' => [
                                                'condition_dependency' => 'cardio_therapy',
                                                'require_value' => 'false',
                                            ],
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'За последний год проводилось УЗИ сердца (Эхо-КГ)?',
                                            'required' => true,
                                            'name' => 'heart_ultrasound',
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_cardio_uzi_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'За последний год проводилось ЭКГ сердца?',
                                            'required' => true,
                                            'name' => 'mank_cardio_ekg',
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_cardio_ekg',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'with_input' => false,
                                            'question' => 'За последний год проводилось МРТ сердца?',
                                            'required' => true,
                                            'name' => 'heart_mrt',
                                            'options' => [
                                                'Нет',
                                                'Да, один раз',
                                                'Да, более одного раза',
                                            ],
                                            'elma_name' => 'mank_cardio_mrt_2',
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="9">
                                <?php // Хирургические вмешательства
                                $form_settings = [
                                    'caption' => 'Хирургические вмешательства',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Хирургические вмешательства вы заполняете за текущий календарный год.',
                                    'tab' => '9',
                                    'name' => 'surgery',
                                    'form_fields' => [
                                        [
                                            'kind' => 'radio',
                                            'required' => true,
                                            'name' => 'is_surgery',
                                            'question' => 'Были ли у ребенка операции за последний год?',
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_surgery_state_2',
                                            'condition_relation' => 'surgery_state',
                                        ],
                                        [
                                            'kind' => 'input',
                                            'type' => 'text',
                                            'placeholder' => '',
                                            'question' => 'По какому поводу проводилось хирургическое вмешательство?',
                                            'label' => '',
                                            'name' => 'surgery_reason',
                                            'elma_name' => 'mank_surgery_state_fact_2',
                                            'condition' => [
                                                'condition_dependency' => 'surgery_state',
                                                'require_value' => 'true',
                                            ],
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="10">
                                <?php // Социальный/Возможности среды
                                $form_settings = [
                                    'caption' => 'Социальный/Возможности среды',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по блоку Социальный/Возможности среды вы заполняете за текущий календарный год.',
                                    'tab' => '10',
                                    'name' => 'social_env',
                                    'form_fields' => [
                                        [
                                            'kind' => 'checkbox',
                                            'required' => true,
                                            'name' => 'education_form',
                                            'question' => 'Форма обучения',
                                            'is_input_exist' => true,
                                            'items' => [
                                                [
                                                    'label' => 'Детский сад',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Очное обучение в школе',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Дистанционная форма (занимается с учителем и/или вместе с классом через интернет)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Заочная форма  (изучает дома сам, затем сдает экзамены)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Смешанная форма (очно-заочная, очно-дистанционная)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Домашнее обучение (учителя приходят на дом)',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Не обучается',
                                                    'name' => ''
                                                ],
                                                [
                                                    'label' => 'Другое (указать)',
                                                    'name' => ''
                                                ],
                                            ],
                                            'elma_name' => 'mank_social_studyform_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'question' => 'Насколько часто получется у вашего сына общаться со сверстниками?',
                                            'with_input' => true,
                                            'required' => true,
                                            'name' => 'conversation_frequent',
                                            'options' => [
                                                'Регулярно, проблем с общением не испытывает',
                                                'Бывают отдельные встречи, но не могу сказать, что общение удается поддерживать регулярно',
                                                'Сын почти ни с кем из сверстников не общается',
                                            ],
                                            'elma_name' => 'mank_social_connection_2',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'question' => 'Приспособлено ли место, где вы живете (квартира, дом)  для людей с инвалидностью ?',
                                            'with_input' => true,
                                            'label_for_input' => 'Напишите пожалуйста, что конкретно не приспособлено',
                                            'name' => 'adapted_adapt',
                                            'required' => true,
                                            'options' => [
                                                'Да',
                                                'Нет (указать, что конкретно не приспособлено)',
                                                'Затрудняюсь ответить',
                                            ],
                                            'elma_name' => 'mank_social_adapt_2',
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                            <div class="lk-form__tab_content" data-form="11">
                                <?php // Социально–психологический блок
                                $form_settings = [
                                    'caption' => 'Социально–психологический блок',
                                    'submit_button' => 'Продолжить',
                                    'subcaption' => 'Обратите, пожалуйста, внимание: информацию по Социально–психологическому блоку вы заполняете за текущий календарный год.',
                                    'tab' => '11',
                                    'name' => 'social_block',
                                    'form_fields' => [
                                        [
                                            'kind' => 'select',
                                            'placeholder' => 'Выбрать',
                                            'question' => 'Как вы оцениваете психологическое состояние сына?',
                                            'with_input' => false,
                                            'name' => 'state_valuation',
                                            'required' => true,
                                            'options' => [
                                                'Удовлетворительно',
                                                'Оно меня немного тревожит',
                                                'Я сильно беспокоюсь о его психологическом состоянии',
                                            ],
                                            'elma_name' => 'mank_psy_state_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Получает ли сын поддержку психолога в настоящий момент?',
                                            'name' => 'psychologist_support',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                            ],
                                            'elma_name' => 'mank_psy_support_2',
                                        ],
                                        [
                                            'kind' => 'radio',
                                            'question' => 'Есть ли у вас опыт иной (генной или клеточной) терапии?',
                                            'name' => 'est_li_u_vas_opyt_inoi_gennoi_ili_kletochnoi_terapii',
                                            'required' => true,
                                            'items' => [
                                                'Да',
                                                'Нет',
                                                'Затрудняюсь отвеить',
                                            ],
                                            'elma_name' => 'est_li_u_vas_opyt_inoi_gennoi_ili_kletochnoi_terapii',
                                        ],
                                        [
                                            'kind' => 'select',
                                            'name' => 'psychologist_support_parent',
                                            'placeholder' => 'Выбрать',
                                            'question' => 'Получаете ли вы поддержку от психолога/психотерапевта?',
                                            'with_input' => false,
                                            'options' => [
                                                'Да, я нахожусь в терапии',
                                                'Нет, мне это не нужно',
                                                'Получаю, но мне этого не достаточно',
                                            ],
                                            'elma_name' => 'mank_psy_personal_support_2',
                                        ],
                                    ],
                                ];

                                get_template_part('/template-parts/form-template', null, $form_settings); ?>
                            </div>

                        </section>
                    </div>
                    <div class="lk-form" data-form="3">
                        Документы
                    </div>
                    <div class="lk-form" data-form="4">
                        <section class="lk-form-container">
                            <?php
                            $form_settings = [
                                'caption' => '',
                                'submit_button' => 'Продолжить',
                                'tab' => '4',
                                'name' => 'program_block',
                                'form_fields' => [
                                    [
                                        'kind' => 'select',
                                        'name' => 'help_program',
                                        'placeholder' => 'Выбрать',
                                        'question' => 'Выберите программу, в которой вы хотели бы принять участие',
                                        'options' => [
                                            'Адресная помощь',
                                            'Мы вместе'
                                        ],
                                        'condition_relation' => 'help_program',
                                        'elma_name' => 'help_program',
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => false,
                                        'elma_name' => 'address_help_text',
                                        'type' => 'text',
                                        'question' => 'Какая помощь вам нужна?',
                                        'placeholder' => 'Какая помощь вам нужна?',
                                        'label' => '',
                                        'name' => 'address_help_text',
                                        'condition' => [
                                            'condition_dependency' => 'help_program',
                                            'require_value' => 'Адресная помощь'
                                        ],
                                    ],
                                    [
                                        'kind' => 'select',
                                        'placeholder' => 'Выбрать',
                                        'question' => 'Выберите тип мероприятия, в котором хотите принять участие?',
                                        'with_input' => false,
                                        'name' => 'mv_1',
                                        'required' => false,
                                        'options' => [
                                            'Психолого–реабилитационный лагерь',
                                            'Интеграционный лагерь'
                                        ],
                                        'elma_name' => 'mv_1',
                                    ],
                                    [
                                        'kind' => 'select',
                                        'placeholder' => 'Выбрать',
                                        'question' => 'Когда вы узнали о диагнозе сына?',
                                        'with_input' => false,
                                        'name' => 'mv_2',
                                        'required' => false,
                                        'options' => [
                                            'Менее полугода назад',
                                            'Более года назад',
                                            'Давно знаем о диагнозе',
                                        ],
                                        'elma_name' => 'mv_2',
                                    ],
                                    [
                                        'kind' => 'select',
                                        'placeholder' => 'Выбрать',
                                        'question' => 'Вы были раньше в подобном лагере?',
                                        'with_input' => false,
                                        'name' => 'mv_3',
                                        'required' => false,
                                        'options' => [
                                            'Да',
                                            'Нет',
                                        ],
                                        'elma_name' => 'mv_3',
                                    ],
                                    [
                                        'kind' => 'input',
                                        'required' => false,
                                        'elma_name' => 'mv_4',
                                        'type' => 'text',
                                        'placeholder' => 'Указать год',
                                        'question' => 'В каком году вы принимали участие в психолого–реабилитационном лагере?',
                                        'label' => '',
                                        'name' => 'mv_4'
                                    ],
                                    [
                                        'kind' => 'select',
                                        'placeholder' => 'Выбрать',
                                        'question' => 'Почему вы хотите принять участие в лагере?',
                                        'with_input' => false,
                                        'name' => 'mv_5',
                                        'required' => false,
                                        'options' => [
                                            'Мне важно быть рядом с такими же семьями',
                                            'Хочу получить информацию по особенностям заболевания',
                                            'Нуждаюсь в психологической поддержке',
                                            'Хочу отдохнуть',
                                        ],
                                        'elma_name' => 'mv_5',
                                    ],
                                ],
                            ];

                            get_template_part('/template-parts/form-template', null, $form_settings); ?>
                        </section>
                    </div>
                    <div class="lk-form" data-form="5">
                        <p>Форма 5</p>
                    </div>
                    <div class="lk-form" data-form="6">
                        <p>Форма 6</p>
                    </div>
                </div>
            </div>
        </div>
    </main><!-- #main -->

<?php
get_footer();