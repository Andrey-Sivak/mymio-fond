<?php

$user_email = $_POST['userEmail'];
$elma_id = $_POST['elmaId'];
$user_name = $_POST['userName'];

$user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);

file_put_contents(__DIR__.'/data.log', "\n" . '-----------------------------------------------------------------' . "\n", FILE_APPEND); // LOG

file_put_contents(__DIR__.'/data.log', date('d-m-Y H:i:s') . ' ' . $elma_id . ' ' . $user_email . ' ' . $user_name . "\n", FILE_APPEND); // LOG

if (!$user_email || !$elma_id) {
    exit();
}

file_put_contents(__DIR__.'/data.log', date('d-m-Y H:i:s') . ' ' . 'success get params' . "\n", FILE_APPEND); // LOG

require_once('../Scripts/connect.php');

$query = "SELECT * FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);

if (!$result->num_rows) {
    $db->close();
    echo false;
    exit();
}

file_put_contents(__DIR__.'/data.log', date('d-m-Y H:i:s') . ' ' . 'success get user' . "\n", FILE_APPEND); // LOG

$query = "UPDATE `custom_users` SET `elma_id` = '$elma_id', `name` = '$user_name' WHERE `email` = '$user_email'";
$db->query($query);

$db->close();

file_put_contents(__DIR__.'/data.log', date('d-m-Y H:i:s') . ' ' . 'success update user elmaId' . "\n", FILE_APPEND); // LOG

echo true;