<?php

function register_user_from_elma_info($email) {
    if (!$email) return;

    $_SESSION['register-email'] = trim($email);

    header('Location: /?register-success');
}