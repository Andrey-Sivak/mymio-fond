<?php
$object = $args['object'];
$field_type = $object['type'] ?? null;
$required = $object['required'] ?? null;
$field_name = $object['name'] ?? null;
$elmaName = $object['elma_name'] ?? null;
$placeholder = $object['placeholder'] ?? null;
$label = $object['label'] ?? $object['placeholder'];
$condition = $object['condition'] ?? null;
$condition_relation = $object['condition_relation'] ?? null;
$question = $object['question'] ?? null;
$require_value = $condition['require_value'] ?? null;

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
}?>

<div class="contact-form__form-field"
    <?php if ($require_value) : ?>
        data-cond-dep-value="<?php echo $require_value; ?>"
    <?php endif;
    if ($condition['condition_dependency']) : ?>
        data-cond-dep-name="<?php echo $condition['condition_dependency']; ?>"
    <?php endif;
    if ($condition_relation) : ?>
        data-cond-relation="<?php echo $condition_relation; ?>"
    <?php endif; ?>
>

    <?php if ($question) : ?>
        <p class="contact-form__form-field_note"><?php echo $question; ?></p>
    <?php endif; ?>

    <textarea name="<?php echo $field_name; ?>"
              data-elma="<?php echo $elmaName; ?>"
              id="<?php echo $field_name; ?>"
              <?php if ($required) : ?>
                  data-req="true"
              <?php endif; ?>
              placeholder="<?php echo $placeholder ?>"
              class="contact-form__input"></textarea>
    <label for="<?php echo $field_name; ?>" class="contact-form__label"><?php echo $label; ?></label>
</div>
