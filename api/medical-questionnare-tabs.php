<?php


if ($_GET['user_email'] && !($_POST['tabs_string'])) {
    $user_email = $_GET['user_email'];
    $check_user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);

    echo getTabs($check_user_email);
}

if ($_POST['user_email'] && $_POST['tabs_string']) {
    $user_email = $_POST['user_email'];
    $check_user_email = filter_var(trim($user_email), FILTER_SANITIZE_STRING);
    $tabs_string = $_POST['tabs_string'];

    echo setTabs($check_user_email, $tabs_string);
}

function getTabs($user_email) {

    require_once('../Scripts/connect.php');

    if ($db->connect_errno) {
        return "Соединение не удалось: %s\n $db->connect_error";
    }

    $query = "SELECT * FROM `custom_users` WHERE `email` = '$user_email'";

    if (!$db->query($query)) {
        return "Сообщение ошибки: %s\n $db->error";
    }

    $result = $db->query($query);
    $user = $result->fetch_assoc();

    $db->close();

    return $user['locked_tabs'];
}

function setTabs($user_email, $tabs_string) {

    require_once('../Scripts/connect.php');

    if ($db->connect_errno) {
        return "Соединение не удалось: %s\n $db->connect_error";
    }

    $query = "UPDATE `custom_users` SET `locked_tabs` = '$tabs_string' WHERE `email` = '$user_email'";

    if (!$db->query($query)) {
        return "Сообщение ошибки: %s\n $db->error";
    }

    $db->close();

    return true;
}