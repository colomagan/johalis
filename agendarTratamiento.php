<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'msg' => 'Método no permitido']);
  exit;
}

// Función helper
function get($k){ return isset($_POST[$k]) ? trim((string)$_POST[$k]) : ''; }

// Captura de datos desde el form
$name      = get('name');
$email     = get('email');
$phone     = get('phone');
$date      = get('date');
$service   = get('service'); // ← ahora coincide con tu <select name="service">

// Validación
if ($name === '' || $email === '' || $phone === '' || $date === '' || $service === '') {
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
  $mail->Host       = 'smtp.hostinger.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'consultas@clinicaspadron.com';
  $mail->Password   = 'N8f>rheS'; // ⚠️ poné la real
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;
  $mail->CharSet    = 'UTF-8';

  // Remitente coherente con el dominio
  $mail->setFrom('consultas@clinicaspadron.com', 'Agenda Web');

  // Destino
  $mail->addAddress('lucasmagan10@gmail.com', 'Lucas Magán');

  // Responder al mail del cliente
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $mail->addReplyTo($email, $name);
  }

  // Asunto
  $mail->Subject = "Nueva solicitud de turno — {$service} — {$date}";

  // Cuerpo
  $html = "
    <h2>Nueva solicitud de turno</h2>
    <p><strong>Nombre:</strong> ".htmlspecialchars($name)."</p>
    <p><strong>Email:</strong> ".htmlspecialchars($email)."</p>
    <p><strong>Teléfono:</strong> ".htmlspecialchars($phone)."</p>
    <p><strong>Fecha solicitada:</strong> ".htmlspecialchars($date)."</p>
    <p><strong>Servicio:</strong> ".htmlspecialchars($service)."</p>
  ";

  $mail->isHTML(true);
  $mail->Body    = $html;
  $mail->AltBody = strip_tags($html);

  // Enviar
  $mail->send();
  echo json_encode(['ok' => true, 'msg' => 'Turno enviado']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'msg' => 'Error: '.$mail->ErrorInfo]);
}
