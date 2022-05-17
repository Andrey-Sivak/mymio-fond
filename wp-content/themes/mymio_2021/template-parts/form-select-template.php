<?php
$object = $args['object'];
$is_input_exist = $object['with_input'] ?? null;
$placeholder = $object['placeholder'] ?? null;
$required = $object['required'] ?? null;
$elmaName = $object['elma_name'] ?? null;
$field_name = $object['name'] ?? null;
$input_label = null;
$options = $object['options'] ?? null;
if ($is_input_exist) {
    $input_label = $object['label_for_input'] ?? 'Указать';
}
$question = $object['question'] ?? null;
$condition = $object['condition'] ?? null;
$condition_relation = $object['condition_relation'] ?? null;
$require_value = $condition['require_value'] ?? null;

if (is_array($require_value)) {
    $require_value = implode('|,|', $require_value);
} ?>

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

    <div class="select">
        <select name="<?php echo $field_name; ?>"
                data-elma="<?php echo $elmaName; ?>"
            <?php if ($required) : ?>
                data-req="true"
            <?php endif; ?>
                data-placeholder="<?php echo $placeholder; ?>"
                id="<?php echo $field_name; ?>">
            <option value=""></option>
            <?php foreach ($options as $option) : ?>
                <option value="<?php echo $option; ?>"><?php echo $option; ?></option>
            <?php endforeach;

            if ($is_input_exist) : ?>
                <option value="Другое (указать)">Другое (указать)</option>
            <?php endif; ?>
        </select>
    </div>
    <?php if ($is_input_exist) : ?>
        <div class="select-input">
            <input type="text"
                   class="select-input__input">
            <label class="contact-form__label"><?php echo $input_label; ?></label>
        </div>
    <?php endif; ?>
</div>