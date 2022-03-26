<?php
$object = $args['object'];
$form_name = $args['form_name'];
$field_type = $object['type'];
$elmaName = $object['elma_name'];
$field_name = $object['name'] ? $form_name . '_' . $object['name'] : '';
$required = $object['required'];
$placeholder = $object['placeholder'];
$label = $object['label'] ?: $object['placeholder'];
$question = $object['question'];
$validation = $object['validation'];
$condition = $object['condition'];
$require_value = $condition['require_value'];

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
}

$additional_css_class = '';

switch ($field_type) {
    case 'address':
        $additional_css_class = 'address';
        break;
    case 'date':
        $additional_css_class = 'date-mask';
        break;
    case 'phone':
        $additional_css_class = 'phone-mask';
        break;
    case 'year':
        $additional_css_class = 'year-mask';
        break;
    case 'city':
        $additional_css_class = 'city';
        break;
}
?>

<div class="contact-form__form-field<?= $field_type == 'date' ? ' date' : ''; ?>"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?= $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?= $condition['condition_dependency']; ?>"
    <?php endif; ?>
>

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?= $question; ?></p>
    <?php endif; ?>

    <input type="text"
        <?php if ($required) : ?>
            data-req="true"
        <?php endif; ?>
        <?php if ($validation) : ?>
            data-validation="<?= $validation; ?>"
        <?php endif; ?>
           data-elma="<?= $elmaName; ?>"
           name="<?= $field_name; ?>"
           id="<?= $field_name; ?>"
           placeholder="<?= $placeholder ?>"
           class="contact-form__input<?= " $additional_css_class"; ?>">
    <label for="<?= $field_name; ?>" class="contact-form__label"><?= $label; ?></label>

    <?php if ($field_type == 'address') : ?>
        <span class="error">Адрес не найден</span>
    <?php elseif ($field_type == 'date') : ?>
        <span class="calendar"></span>
        <div class="datepicker"></div>
    <?php elseif ($field_type == 'city') : ?>
        <div class="tips"></div>
    <?php endif; ?>


</div>