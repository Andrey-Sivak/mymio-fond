<?php
$form_fields = $args['form_fields'];
$form_caption = $args['caption'] ?? '';
$form_subcaption = $args['subcaption'] ?? '';
$submit_button = $args['submit_button'];
$data_tab = $args['tab'] ?? '';
$form_name = $args['name'];
$stage = $args['stage'] ?? null;
$action = $args['action_url'] ?? '#';
$success_msg = $args['success_msg'] ?? 'Заявка успешно отправлена!';
?>

<div class="request-form-container">
    <div class="contact-form">
        <form method="POST"
              class="contact-form__form"
              data-action="<?php echo $action; ?>"
              data-success="<?php echo $success_msg; ?>"
            <?php if ($stage) : ?>
                data-stage="<?php echo $stage; ?>"
            <?php endif; ?>
        >
            <div class="contact-form__form-text">
                <?php if ($form_caption) : ?>
                    <p class="contact-form__caption"><?php echo $form_caption; ?></p>
                <?php endif; ?>

                <?php if ($form_subcaption) : ?>
                    <p class="contact-form__subcaption"><?php echo $form_subcaption; ?></p>
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
                        get_template_part('/template-parts/form-phone-confirm-template', null, [
                            'object' => $form_field,
                            'form_name' => $form_name,
                        ]);
                    }
                }
            }
            ?>

            <input type="submit" value="<?php echo $submit_button; ?>">
            <?php get_template_part('/template-parts/loader', null, ['active' => false]); ?>
            <div class="disabler"></div>
            <p class="result"></p>
        </form>
    </div>
</div>