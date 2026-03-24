<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}

 
  
if(empty($_POST['antibot']) === false && $_POST['antibot'] == 1) {
  /* Сюда впишите свою эл. почту */
  $address = "ya.volnitck@yandex.ru";

  /* А здесь прописывается текст сообщения, \n - перенос строки */
  $mes = "Тема: Заказ Свадьба\nИмя: $name\nТелефон: $phone";

  /* А эта функция как раз занимается отправкой письма на указанный вами email */
  $sub='Заявка Свадьба'; //сабж
  $email='Заявка <79856846626@yandex.ru>'; // от кого
  $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
}

header ('Location: thanks.html'); 
exit();   
?>
