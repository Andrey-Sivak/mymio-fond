<?php

$user_data = json_decode($_POST['user_data'], 2);
$user_data = $user_data['user_data'];

$email = $user_data['user_email'];
$user_email = filter_var(trim($email), FILTER_SANITIZE_STRING);

if (!isset($user_email)) {
    echo false;
    return;
}

require_once('../Scripts/connect.php');

$query = "DELETE FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);

$db->close();

$result_object = [
    'status' => true,
];

//print_r( json_encode($result_object) );
//echo $user_email;
print_r($result);
exit();
