<?php
$form_fields = $args['form_fields'];
$form_caption = $args['caption'] ?: '';
$form_subcaption = $args['subcaption'] ?: '';
$submit_button = $args['submit_button'];
$data_tab = $args['tab'] ?: '';
$form_name = $args['name'];
$stage = $args['stage'];
?>

<div class="request-form-container">
    <div class="contact-form">
        <form method="POST" class="contact-form__form"
        <?php if ($stage) : ?>
        data-stage="<?php echo $stage; ?>"
        <?php endif; ?>
        >
            <div class="contact-form__form-text">
                <?php if ($form_caption) : ?>
                <p class="contact-form__caption"><?= $form_caption; ?></p>
                <?php endif; ?>

                <?php if ($form_subcaption) : ?>
                    <p class="contact-form__subcaption"><?= $form_subcaption; ?></p>
                <?php endif; ?>
            </div>

            <?php
            if ($form_fields && count($form_fields) > 0) {

              foreach ($form_fields as $key => $form_field) {
                  $input_kind = $form_field['kind'];

                  if ($input_kind == 'input') {
                      get_template_part('/template-parts/form-input-template', null, [
                          'object' => $form_field,
                          'form_name' => $form_name,
                      ]);
                  } elseif ($input_kind == 'train') {
                      get_template_part('/template-parts/form-train-template', null, [
                          'object' => $form_field,
                          'form_name' => $form_name,
                      ]);
                  } elseif ($input_kind == 'checkbox') {
                      get_template_part('/template-parts/form-checkbox-template', null, [
                          'object' => $form_field,
                          'form_index' => $data_tab,
                          'form_name' => $form_name,
                          'field_idx' => $key,
                      ]);
                  } elseif ($input_kind == 'radio') {
                      get_template_part('/template-parts/form-radio-template', null, [
                          'object' => $form_field,
                          'form_index' => $data_tab,
                          'form_name' => $form_name,
                          'field_idx' => $key,
                      ]);
                  } elseif ($input_kind == 'select') {
                      get_template_part('/template-parts/form-select-template', null, [
                          'object' => $form_field,
                          'form_name' => $form_name,
                      ]);
                  } elseif ($input_kind == 'text_block') {
                      get_template_part('/template-parts/form-text-block-template', null, $form_field);
                  } elseif ($input_kind == 'textarea') {
                      get_template_part('/template-parts/form-textarea-template', null, [
                          'object' => $form_field,
                          'form_name' => $form_name,
                      ]);
                  } elseif ($input_kind == 'phone-confirm') {
                      get_template_part('/template-parts/form-phone-confirm-template');
                  }
              }
            }
            ?>

            <input type="submit" value="<?= $submit_button; ?>">
            <div class="loader">
            <div class="loadingio-spinner-spinner-rl7w6qbl47d"><div class="ldio-4khtpk1mo8v">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </div></div>
            <style type="text/css">
              @keyframes ldio-4khtpk1mo8v {
                0% { opacity: 1 }
                100% { opacity: 0 }
              }
              .ldio-4khtpk1mo8v div {
                left: 98.735px;
                top: 42.315px;
                position: absolute;
                animation: ldio-4khtpk1mo8v linear 2.127659574468085s infinite;
                background: #009D9A;
                width: 19.53px;
                height: 19.53px;
                border-radius: 9.765px / 9.765px;
                transform-origin: 9.765px 66.185px;
              }.ldio-4khtpk1mo8v div:nth-child(1) {
                 transform: rotate(0deg);
                 animation-delay: -1.9342359767891684s;
                 background: #009D9A;
               }.ldio-4khtpk1mo8v div:nth-child(2) {
                  transform: rotate(32.72727272727273deg);
                  animation-delay: -1.7408123791102514s;
                  background: #009D9A;
                }.ldio-4khtpk1mo8v div:nth-child(3) {
                   transform: rotate(65.45454545454545deg);
                   animation-delay: -1.5473887814313347s;
                   background: #009D9A;
                 }.ldio-4khtpk1mo8v div:nth-child(4) {
                    transform: rotate(98.18181818181819deg);
                    animation-delay: -1.3539651837524178s;
                    background: #009D9A;
                  }.ldio-4khtpk1mo8v div:nth-child(5) {
                     transform: rotate(130.9090909090909deg);
                     animation-delay: -1.1605415860735009s;
                     background: #009D9A;
                   }.ldio-4khtpk1mo8v div:nth-child(6) {
                      transform: rotate(163.63636363636363deg);
                      animation-delay: -0.9671179883945842s;
                      background: #009D9A;
                    }.ldio-4khtpk1mo8v div:nth-child(7) {
                       transform: rotate(196.36363636363637deg);
                       animation-delay: -0.7736943907156674s;
                       background: #009D9A;
                     }.ldio-4khtpk1mo8v div:nth-child(8) {
                        transform: rotate(229.0909090909091deg);
                        animation-delay: -0.5802707930367504s;
                        background: #009D9A;
                      }.ldio-4khtpk1mo8v div:nth-child(9) {
                         transform: rotate(261.8181818181818deg);
                         animation-delay: -0.3868471953578337s;
                         background: #009D9A;
                       }.ldio-4khtpk1mo8v div:nth-child(10) {
                          transform: rotate(294.54545454545456deg);
                          animation-delay: -0.19342359767891684s;
                          background: #009D9A;
                        }.ldio-4khtpk1mo8v div:nth-child(11) {
                           transform: rotate(327.27272727272725deg);
                           animation-delay: 0s;
                           background: #009D9A;
                         }
              .loadingio-spinner-spinner-rl7w6qbl47d {
                width: 217px;
                height: 217px;
                display: block;
                overflow: hidden;
                margin: 0 auto;
              }
              .ldio-4khtpk1mo8v {
                width: 100%;
                height: 100%;
                position: relative;
                transform: translateZ(0) scale(1);
                backface-visibility: hidden;
                transform-origin: 0 0; /* see note above */
              }
              .ldio-4khtpk1mo8v div { box-sizing: content-box; }
            </style>
          </div>
            <div class="disabler"></div>
            <p class="result"></p>
        </form>
    </div>
</div>