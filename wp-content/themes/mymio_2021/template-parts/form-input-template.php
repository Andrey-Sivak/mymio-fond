<?php
$object = $args['object'];
$form_name = $args['form_name'] ?? null;
$field_type = $object['type'] ?? null;
$elmaName = $object['elma_name'] ?? null;
$field_name = $object['name'] ? $form_name . '_' . $object['name'] : '';
$required = $object['required'] ?? null;
$placeholder = $object['placeholder'] ?? null;
$label = $object['label'] ?? $object['placeholder'];
$question = $object['question'] ?? null;
$validation = $object['validation'] ?? null;
$condition = $object['condition'] ?? null;
$require_value = $condition['require_value'] ?? null;
$value_type = $object['value_type'] ?? null;
$same_fields = $object['same_fields'] ?? null;
$same_dependency = $object['same_dependency'] ?? null;
$max_symbols = $object['max'] ?? null;

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
    case 'year-month':
        $additional_css_class = 'year-month-mask';
        break;
    case 'mkb':
        $additional_css_class = 'mkb';
        break;
}
?>

<div class="contact-form__form-field<?php echo $field_type == 'date' ? ' date' : ''; ?>"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?php echo $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?php echo $condition['condition_dependency']; ?>"
    <?php endif; ?>
    <?php if ($value_type) : ?>
        data-value-type="<?php echo $value_type; ?>"
    <?php endif; ?>
    <?php if ($same_fields) : ?>
        data-same-fields="<?php echo $same_fields; ?>"
    <?php endif; ?>
    <?php if ($same_dependency) : ?>
        data-same-dependency="<?php echo $same_dependency; ?>"
    <?php endif; ?>
>

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?php echo $question; ?></p>
    <?php endif; ?>

    <?php if ($field_type == 'address') : ?>
        <textarea name="<?php echo $field_name; ?>"
                  placeholder="<?php echo $placeholder ?>"
                  data-elma="<?php echo $elmaName; ?>"
                  <?php if ($validation) : ?>
                      data-validation="<?php echo $validation; ?>"
                  <?php endif;
                  if ($required) : ?>
                      data-req="true"
                  <?php endif; ?>
                  class="contact-form__input<?php echo " $additional_css_class"; ?>"
                  id="<?php echo $field_name; ?>"></textarea>
    <?php else : ?>
        <input
            <?php if ($value_type == 'int') : ?>
                type="number"
            <?php else : ?>
                type="text"
            <?php endif; ?>
            <?php if ($required) : ?>
                data-req="true"
            <?php endif; ?>
            <?php if ($max_symbols) : ?>
                maxlength="<?php echo $max_symbols; ?>"
            <?php endif; ?>
            <?php if ($validation) : ?>
                data-validation="<?php echo $validation; ?>"
            <?php endif; ?>
                data-elma="<?php echo $elmaName; ?>"
                name="<?php echo $field_name; ?>"
                id="<?php echo $field_name; ?>"
                placeholder="<?php echo $placeholder ?>"
                class="contact-form__input<?php echo " $additional_css_class"; ?>">
    <?php endif; ?>

    <label for="<?php echo $field_name; ?>" class="contact-form__label"><?php echo $label; ?></label>

    <?php if ($field_type == 'address') : ?>
        <span class="error">Адрес не найден</span>
    <?php elseif ($field_type == 'date') : ?>
        <span class="calendar"></span>
        <div class="datepicker"></div>
    <?php elseif ($field_type == 'city') : ?>
        <div class="tips"></div>
    <?php endif; ?>


</div>