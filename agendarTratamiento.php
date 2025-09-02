<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'msg' => 'Método no permitido']);
  exit;
}

function get($k){ return isset($_POST[$k]) ? trim((string)$_POST[$k]) : ''; }

$name        = get('name');
$email       = get('email');
$date        = get('date');
$serviceId   = get('service_id');
$serviceName = get('service_name');

if ($name === '' || $email === '' || $date === '' || $serviceId === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'msg' => 'Completá todos los campos obligatorios']);
  exit;
}

// === Cargar PHPMailer (sin composer) ===
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';
require __DIR__ . '/phpmailer/src/Exception.php';

$mail = new PHPMailer(true);

try {
  // CONFIG SMTP
  $mail->isSMTP();
$mail->Host       = 'smtp.hostinger.com';   // Host SMTP de Hostinger
$mail->SMTPAuth   = true;
$mail->Username   = 'consultas@clinicaspadron.com';
$mail->Password   = 'N8f>rheS';             // la contraseña real de la casilla
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // STARTTLS (puerto 587)
$mail->Port       = 587;
$mail->CharSet    = 'UTF-8';

// Remitente coherente con el dominio
$mail->setFrom('consultas@clinicaspadron.com', 'Agenda Web');

// Destino
$mail->addAddress('lucasmagan10@gmail.com', 'Lucas Magán');

  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $mail->addReplyTo($email, $name);
  }

  $svcLabel = $serviceName ?: $serviceId;
  $mail->Subject = "Nueva solicitud de turno — {$svcLabel} — {$date}";

  $html = "
    <h2>Nueva solicitud de turno</h2>
    <p><strong>Nombre:</strong> ".htmlspecialchars($name)."</p>
    <p><strong>Email:</strong> ".htmlspecialchars($email)."</p>
    <p><strong>Fecha solicitada:</strong> ".htmlspecialchars($date)."</p>
    <p><strong>Servicio:</strong> ".htmlspecialchars($svcLabel)."</p>
  ";

  $mail->isHTML(true);
  $mail->Body    = $html;
  $mail->AltBody = strip_tags($html);

  $mail->send();
  echo json_encode(['ok' => true, 'msg' => 'Turno enviado']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'msg' => 'Error: '.$mail->ErrorInfo]);
}
