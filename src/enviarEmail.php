<?php
  require 'mailer/PHPMailer/AutoLoad.php';
  if(isset($_POST['assunto']) && !empty($_POST['assunto'])){
    $assunto = $_POST['assunto'];
  }
  if(isset($_POST['mensagem']) && !empty($_POST['mensagem'])){
    $mensagem = $_POST['mensagem'];
  }

  $mail = new PHPMailer;

  $mail->isSMTP();
  $mail->Host = 'hotmail.com';
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = 'tls';
  $mail->Username='jusleyarley@hotmail.com';
  $mail->Password='Pr0c3ss4m3nt0';
  $mail->Post='587';
  $mail->setForm('jujudu-95@hotmail.com', 'Destinatario');
  $mail->setForm('jusleyarley@hotmail.com', 'Remetente');

  $mail->Subject=utf8_decode($assunto);
  $mail->Body=n12br($mensagem);
  $mail->AltBody=n12br(strip_tags($mensagem));

  if(!$mail->send()){
    echo 'Nao foi possivel enviar';
    echo 'Erro'.$mail->ErroInfo;
  }
  else{
    echo 'mensagem enviada';
  }
?>