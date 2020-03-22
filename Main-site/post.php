<?php 
if (!empty($_POST['name'])){

	$theme = 'Новое сообщение';

	$letter = 'Даные сообщения:\r\n';
	$letter .= 'Имя: '.$_POST['name'].'\r\n';
	$letter .= 'Email: '.$_POST['email'].'\r\n';
	$letter .= 'Телефон: '.$_POST['phone'].'\r\n';
	$letter .= 'Код товара: '.$_POST['kod'].'\r\n';

	if (mail('saka150577@gmail.com', $theme, $letter)){
	
	} 
}
?>



