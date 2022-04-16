<?php
$object = $args['object'];
$field_type = $object['type'];
$required = $object['required'];
$field_name = $object['name'];
$elmaName = $object['elma_name'];
$placeholder = $object['placeholder'];
$label = $object['label'] ?: $object['placeholder'];
$condition = $object['condition'];
$condition_relation = $object['condition_relation'];
$question = $object['question'];
$require_value = $condition['require_value'];

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
}?>

<div class="contact-form__form-field"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?= $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?= $condition['condition_dependency']; ?>"
    <?php endif;
    if ($condition_relation) : ?>
        data-cond-relation="<?= $condition_relation; ?>"
    <?php endif; ?>
>

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?= $question; ?></p>
    <?php endif; ?>

    <textarea name="<?= $field_name; ?>"
              data-elma="<?= $elmaName; ?>"
              id="<?= $field_name; ?>"
              <?php if ($required) : ?>
                  data-req="true"
              <?php endif; ?>
              placeholder="<?= $placeholder ?>"
              class="contact-form__input"></textarea>
    <label for="<?= $field_name; ?>" class="contact-form__label"><?= $label; ?></label>
</div>
