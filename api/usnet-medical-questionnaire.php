<?php

$user_email = $_POST['user_email'];
$is_first_year = $_POST['is_first_year'];

$user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);
$is_first_year = filter_var($is_first_year, FILTER_VALIDATE_BOOLEAN);

file_put_contents(__DIR__ . '/unset-questionnaire.log', "\n" . '-----------------------------------------------------------------' . "\n\n", FILE_APPEND); // LOG

file_put_contents(__DIR__ . '/unset-questionnaire.log', date('d-m-Y H:i:s') . ' ' . $user_email . ' ' . $is_first_year . "\n", FILE_APPEND); // LOG

if (!$user_email) {
    file_put_contents(__DIR__ . '/unset-questionnaire.log', date('d-m-Y H:i:s') . ' failed' . "\n", FILE_APPEND); // LOG
    exit();
}

file_put_contents(__DIR__ . '/unset-questionnaire.log', date('d-m-Y H:i:s') . ' success get params' . "\n", FILE_APPEND); // LOG

require_once('../Scripts/connect.php');

$query = "SELECT * FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);

if (!$result->num_rows) {
    $db->close();
    file_put_contents(__DIR__ . '/unset-questionnaire.log', date('d-m-Y H:i:s') . ' failed get user' . "\n", FILE_APPEND); // LOG
    echo false;
    exit();
}

file_put_contents(__DIR__ . '/unset-questionnaire.log', date('d-m-Y H:i:s') . ' success get user' . "\n", FILE_APPEND); // LOG

$unsetted_locked = '0,';

if (isset($is_first_year)) {
    $query = "UPDATE `custom_users` SET `locked_tabs` = '$unsetted_locked', `is_first_year` = '$is_first_year' WHERE `email` = '$user_email'";
} else {
    $query = "UPDATE `custom_users` SET `locked_tabs` = '$unsetted_locked' WHERE `email` = '$user_email'";
}

$db->query($query);

$db->close();

file_put_contents(__DIR__ . '/unset-questionnaire.log', date('d-m-Y H:i:s') . ' success unset questionnaire' . "\n", FILE_APPEND); // LOG

echo true;
