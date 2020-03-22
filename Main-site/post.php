<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$kod = $_POST['kod'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$kod = htmlspecialchars($kod);

$name = trim($name);
$email = trim($email);
$phone = trim($phone);
$kod = trim($kod);

mail("saka150577@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email."Тел:".$phone.". "код:".$kod.", "From: example2@mail.ru \r\n");

?>



