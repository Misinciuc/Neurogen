<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exceptions;

require 'phpmailer/src/Exceptions.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->IsHTML(true);

$mail->setFrom("Neurogen client", 'Programare noua');
$mail->addAdress('iuriemisinciuc@gmail.com');
$mail->Subject('Progamare Medic');

if(!$mail->send()){
  $message = 'Some Error';
} else {
  $message = 'Data was sent';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
?>