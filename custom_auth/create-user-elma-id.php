<?php
$user_data = json_decode($_POST['user_data'], 2);
$user_data = $user_data['user_data'];

$user_email = $user_data['user_email'];
$elma_id = $user_data['elma_id'];

$user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);

if (!$user_email) {
    exit();
}

if (!$elma_id) {
    exit();
}

require_once('../Scripts/connect.php');

$query = "SELECT * FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);

if (!$result->num_rows) {
    $db->close();
    echo false;
    exit();
}

$query = "UPDATE `custom_users` SET `elma_id` = '$elma_id' WHERE `email` = '$user_email'";
$db->query($query);

$db->close();

echo true;