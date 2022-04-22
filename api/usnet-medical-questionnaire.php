<?php

$user_email = $_POST['user_email'];

$user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);

file_put_contents(__DIR__.'/unset-questionnaire.log', "\n" . '-----------------------------------------------------------------' . "\n", FILE_APPEND); // LOG

file_put_contents(__DIR__.'/unset-questionnaire.log', date('d-m-Y H:i:s') . ' ' .$user_email . "\n", FILE_APPEND); // LOG

if (!$user_email) {
    file_put_contents(__DIR__.'/unset-questionnaire.log', date('d-m-Y H:i:s') . 'failed' . "\n", FILE_APPEND); // LOG
    exit();
}

file_put_contents(__DIR__.'/unset-questionnaire.log', date('d-m-Y H:i:s') . ' ' . 'success get params' . "\n", FILE_APPEND); // LOG

require_once('../Scripts/connect.php');

$query = "SELECT * FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);

if (!$result->num_rows) {
    $db->close();
    file_put_contents(__DIR__.'/unset-questionnaire.log', date('d-m-Y H:i:s') . ' ' . 'failed get user' . "\n", FILE_APPEND); // LOG
    echo false;
    exit();
}

file_put_contents(__DIR__.'/unset-questionnaire.log', date('d-m-Y H:i:s') . ' ' . 'success get user' . "\n", FILE_APPEND); // LOG

$query = "UPDATE `custom_users` SET `elma_id` = '0,' WHERE `email` = '$user_email'";
$db->query($query);

$db->close();

file_put_contents(__DIR__.'/unset-questionnaire.log', date('d-m-Y H:i:s') . ' ' . 'success unset questionnaire' . "\n", FILE_APPEND); // LOG

echo true;

/*session_start();

$_SESSION['user_name'] = $user_name;
$_SESSION['user_email'] = $user_email;
$_SESSION['user_pass'] = $db_user_pass;
$_SESSION['elma_id'] = $elma_id;*/