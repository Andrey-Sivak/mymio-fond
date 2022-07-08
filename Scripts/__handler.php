<?php

define('_COMPANY', '3mxk6vwcpahuu');
define('_ZONE', 'ru');
define('_NAMESPACE', '_clients');
define('_CODE', '_leads');
define('_TOKEN', 'a9521f77-657f-4830-9c9b-d81c3b6de22d');

$input = $_POST['context'];

if (!empty($input)) {

    file_put_contents(__DIR__.'/data.log', $input."\n\n", FILE_APPEND); // LOG

    $form = json_decode($input, 1);
    $data = $form['context'];

    $funnel = '00000000-0000-0000-0000-000000000000';

    $birtdate = DateTime::createFromFormat('d.m.Y', $data['birthdate']);
    $birtdate = date_format($birtdate,'c');

    $mail = [
        'type' => 'main',
        'email' => $data['email']
    ];

    $phone = [
        'type' => 'main',
        'tel' => $data['contact_phone']
    ];

    $context = [
        '__name' => 'Заявка на попечительство от '.$data['parent_fullname'],
        'parent_fullname' => $data['parent_fullname'],
        'child_fullname' => $data['child_fullname'],
        'birthdate' => $birtdate,
        'city' => $data['city'],
        'email' => [
            $mail
        ],
        'contact_phone' => [
            $phone
        ],
        'description' => $data['description'],
        'citizenship' => $data['citizenship'],
        'pa_diagnosis' => $data['pa_diagnosis'],
        'pa_relation' => $data['pa_relation'],
    ];

    $postfields = [
        'context' => $context,
        'statusGroupId' => $funnel
    ];

    print_r($postfields);
    return;

    $postfields = json_encode($postfields);
    file_put_contents(__DIR__.'/data_out.log', $postfields."\n\n", FILE_APPEND); // LOG

    $URL = 'https://'._COMPANY.'.elma365.'._ZONE.'/pub/v1/app/'._NAMESPACE.'/'._CODE.'/create';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $URL);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-Token: '._TOKEN, 'Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postfields);
    $response = curl_exec($ch);

    print_r($response);
    return;
}





$input = file_get_contents('php://input');

if(!empty($input)) {
	file_put_contents(__DIR__.'/data.log', $input."\n\n", FILE_APPEND); // LOG

	$form = json_decode($input, 1);
	$formID = $form['form_id'];
	$data = $form['form_submit_data'];

	switch ($formID) {
		case '30698':
			$funnel = '00000000-0000-0000-0000-000000000000';
			
			$mail = [
				'type' => 'main',
				'email' => $data['your-email']
			];
			
			$phone = [
				'type' => 'main',
				'tel' => $data['your-number']
			];
			
			$birtdate = DateTime::createFromFormat('d.m.Y',$data['date-birth']);
			
			$context = [
				'__name' => 'Заявка на попечительство от '.$data['parent-name'],
				'parent_fullname' => $data['parent-name'],
				'child_fullname' => $data['child-name'],
				'birthdate' => date_format($birtdate,'c'),
				'city' => $data['your-city'],
				'email' => [
				  $mail
				],
				'contact_phone' => [
				  $phone
				],
				'diagnos' => $data['diagnosis'],
				'description' => $data['your-condition']
			];
			break;
		
		default:
			die('Missing form_id');
			break;
	}

	$postfields = [
		'context' => $context,
		'statusGroupId' => $funnel
	];
	$postfields = json_encode($postfields);
	file_put_contents(__DIR__.'/data_out.log', $postfields."\n\n", FILE_APPEND); // LOG

	$URL = 'https://'._COMPANY.'.elma365.'._ZONE.'/pub/v1/app/'._NAMESPACE.'/'._CODE.'/create';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL, $URL);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-Token: '._TOKEN, 'Content-Type: application/json']);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $postfields);
	$response = curl_exec($ch);

	print_r($response);
}

 ?>