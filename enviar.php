<?php
// enviar.php
declare(strict_types=1);
session_start();

// --------- CONFIG ---------
// A dónde llegan las consultas
const TO_EMAIL = 'consultas@clinicaspadron.com';
const TO_NAME  = 'Consultorio Clínicas Padrón';

// SMTP Hostinger
const SMTP_HOST = 'smtp.hostinger.com';   // servidor SMTP de Hostinger
const SMTP_PORT = 465;                    // usar SSL (465) o STARTTLS (587)
const SMTP_USER = 'consultas@clinicaspadron.com'; // tu casilla
const SMTP_PASS = 'N8f>rheS';     // la contraseña de ese email
const FROM_EMAIL = SMTP_USER;             // mismo que SMTP_USER
const FROM_NAME  = 'Web Clínicas Padrón';


// Log de errores locales (no públicos)
const LOG_FILE = __DIR__ . '/form.log';
// ---------------------------

error_reporting(E_ALL);
ini_set('log_errors', '1');
ini_set('error_log', LOG_FILE);
mb_internal_encoding('UTF-8');

function csrf_get(): string {
  if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
  }
  return $_SESSION['csrf_token'];
}
function bad_request(string $msg) {
  http_response_code(400);
  render_feedback(false, $msg);
  exit;
}
function render_feedback(bool $ok, string $msg) {
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode([
      'success' => $ok,
      'message' => $msg
    ]);
  }
  

// --- GET: devolver token para el fetch del formulario ---
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Content-Type: text/html; charset=UTF-8');
  header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
  header('Pragma: no-cache');
  // csrf_get() debe iniciar sesión y generar el token si no existe
  $t = htmlspecialchars(csrf_get(), ENT_QUOTES, 'UTF-8');
  echo '<!doctype html><meta charset="utf-8"><meta data-csrf="' . $t . '">';
  exit;
}


// --- POST: procesar envío ---
$honeypot  = trim($_POST['website'] ?? '');
$csrf_post = $_POST['csrf_token'] ?? '';
if ($honeypot !== '') bad_request('Bot detectado.');
if (!$csrf_post || !hash_equals($_SESSION['csrf_token'] ?? '', $csrf_post)) {
  bad_request('CSRF inválido.');
}
unset($_SESSION['csrf_token']); // un solo uso

// Sanitizar
$nombre      = trim((string)($_POST['nombre'] ?? ''));
$email       = trim((string)($_POST['email'] ?? ''));
$telefono    = trim((string)($_POST['telefono'] ?? ''));
$tratamiento = trim((string)($_POST['tratamiento'] ?? ''));
$mensaje     = trim((string)($_POST['mensaje'] ?? ''));

// Validaciones
if ($nombre === '' || $email === '' || $telefono === '' || $tratamiento === '') {
  bad_request('Campos obligatorios incompletos.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  bad_request('Email no válido.');
}
if (strlen($mensaje) > 5000) $mensaje = substr($mensaje, 0, 5000);

// Cuerpo del correo
$subject = 'Nueva consulta desde la web';

$safeMensaje = nl2br(htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8'));
$bodyHtml = <<<HTML
  <h2>Nueva consulta</h2>
  <p><strong>Nombre:</strong> {$nombre}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Teléfono:</strong> {$telefono}</p>
  <p><strong>Tratamiento:</strong> {$tratamiento}</p>
  <p><strong>Mensaje:</strong><br>{$safeMensaje}</p>
HTML;

$bodyText = "Nueva consulta\n"
  . "Nombre: $nombre\n"
  . "Email:  $email\n"
  . "Tel:    $telefono\n"
  . "Tratamiento: $tratamiento\n\n"
  . "Mensaje:\n$mensaje\n";

// Enviar con PHPMailer SMTP
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';
require __DIR__ . '/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  $mail->Host = SMTP_HOST;
  $mail->SMTPAuth = true;
  $mail->Username = SMTP_USER;
  $mail->Password = SMTP_PASS;
  // Elegí SSL ó TLS según tu puerto
  if (SMTP_PORT === 465) {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  } else {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  }
  $mail->Port = SMTP_PORT;

  $mail->setFrom(FROM_EMAIL, FROM_NAME);

  // A quiénes llega
  $mail->addAddress(TO_EMAIL, TO_NAME); // consultas@clinicaspadron.com
  $mail->addAddress('lucasmagan10@gmail.com', 'Lucas Magán');
  $mail->addAddress('Tecnimakinas@gmail.com', 'Tecnimakinas');

  // Responder al que completó el formulario
  $mail->addReplyTo($email, $nombre);

  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body    = $bodyHtml;
  $mail->AltBody = $bodyText;

  if (!$mail->send()) {
    throw new Exception('Mailer error: ' . $mail->ErrorInfo);
  }

  render_feedback(true, 'Te responderemos a la brevedad.');
} catch (Exception $e) {
  error_log('Error al enviar: ' . $e->getMessage());
  render_feedback(false, 'Hubo un problema técnico enviando el correo.');
}
