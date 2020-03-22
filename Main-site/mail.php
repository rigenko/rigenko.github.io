<?php 
// ----проверка на заполняемость полей
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['phone']) AND !empty($_POST['kod'])){

	$headers =	'From: Вестка сайтов\r\n'.
	          	'Reply-to: saka150577@gmail.com\r\n'.
	          	'X-Mailer: PHP/'. phpversion();

	$theme = 'Новое сообщение';

	$letter = 'Даные сообщения:\r\n';
	$letter .= 'Имя: '.$_POST['name'].'\r\n';
	$letter .= 'Email: '.$_POST['email'].'\r\n';
	$letter .= 'Телефон: '.$_POST['phone'].'\r\n';
	$letter .= 'Код товаа: '.$_POST['kod'].'\r\n';

if (mail('saka150577@gmail.com', $theme, $letter, $headers)){
	header('Location:/sent.php');
}
} else {
	header('Location:/eror.php');
	
}
// ...........................


