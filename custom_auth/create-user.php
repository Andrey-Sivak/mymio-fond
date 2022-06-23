<?php
$user_data = json_decode($_POST['user_data'], 2);
$user_data = $user_data['user_data'];

$user_email = $user_data['user_email'];
$user_name = $user_data['user_name'];

$symbols_to_pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_+!?()[]^%;:";
$symbols_shuffle = str_shuffle($symbols_to_pass);
$user_pass = substr($symbols_shuffle,0,10);

$db_user_pass = md5($user_pass . "asndkasj81329as");

$user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);

if (!$user_email) {
    exit();
}

if (!$user_name) {
    $user_name = '';
}

//MTXYLBxaDw
//a11sda@as.as

require_once('../Scripts/connect.php');

$query = "SELECT * FROM `custom_users` WHERE `email` = '$user_email'";
$result = $db->query($query);

if ($result->num_rows) {
    $db->close();

    $result_object = [
        'status' => false,
    ];

    print_r( json_encode($result_object) );
    exit();
}

$query = "INSERT INTO `custom_users` (`name`, `email`, `pass`) VALUES('$user_name', '$user_email', '$db_user_pass')";
$db->query($query);

$db->close();

$result_object = [
    'status' => true,
    'user_name' => $user_name,
    'user_pass' => $user_pass,
];

print_r( json_encode($result_object) );