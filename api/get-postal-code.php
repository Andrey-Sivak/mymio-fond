<?php

$address = $_GET['address'];

$ch = curl_init();
$location = curl_escape($ch, $address);
$URL = 'https://api.delivery.yandex.ru/location/postal-code?address=' . $location;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $URL);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: OAuth AQAAAAAVRvWoAAfalxYmEomWdkEBpAEL6shsLUQ', 'Content-Type: application/json']);
$response = curl_exec($ch);

print_r($response);