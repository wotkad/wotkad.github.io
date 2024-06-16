<?php

if (isset($_POST['name']) && $_POST['name'] !== '') {
  $name = '<b>Имя:</b><br>' . $_POST["name"] . "<br><br>";
}
if (isset($_POST['phone']) && $_POST['phone'] !== '') {
  $phone = '<b>Телефон:</b><br>' . $_POST["phone"] . "<br><br>";
}
if (isset($_POST['email']) && $_POST['email'] !== '') {
  $email = '<b>Почта:</b><br>' . $_POST["email"] . "<br><br>";
}
if (isset($_POST['message']) && $_POST['message'] !== '') {
  $message = '<b>Сообщение:</b><br>' . $_POST["message"];
}

$title = "Заявка с сайта 'ФСК ЛАБ'";
$subject = "Заявка с сайта 'ФСК ЛАБ'";

if (isset($_POST['phone'])) {

  $to = 'wotkad@gmail.com';
  $from = 'wotkad@gmail.com';

  $mime_boundary="==Multipart_Boundary_x".md5(mt_rand())."x";

  $headers = "From: $from\r\n" .
  "MIME-Version: 1.0\r\n" .
  "Content-Type: multipart/mixed;\r\n" .
  " boundary=\"{$mime_boundary}\"";

  $body = "
    <h2>$title</h2>
    $name
    $phone
    $email
    $message
  ";

  $multipart = "This is a multi-part message in MIME format.\n\n" .
  "--{$mime_boundary}\n" .
  "Content-Type: text/html; charset=\"UTF-8\"\n" .
  "Content-Transfer-Encoding: 7bit\n\n" .
  $body;
  @mail($to, $subject, $multipart, $headers);
}
?>