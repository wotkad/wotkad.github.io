<?php 
  if (isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']) {
    $secret = '0000000000000000000000';
    $ip = $_SERVER['REMOTE_ADDR'];
    $response = $_POST['g-recaptcha-response'];
    $rsp = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip");
    $arr = json_decode($rsp, TRUE);
    if ($arr['success']) {
      // ...
      echo 'good!';
    }
  }
?>