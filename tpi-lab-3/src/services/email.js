import emailjs from 'emailjs-com';

// Configure with your EmailJS credentials. Prefer setting these in your env as:
// REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

let isInitialized = false;
function ensureInitialized() {
  if (!isInitialized && PUBLIC_KEY && PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(PUBLIC_KEY);
    isInitialized = true;
  }
}

export async function sendOrderConfirmation({ toEmail, orderSummary, pickupTimeText, totalPrice }) {
  ensureInitialized();

  const params = {
    // Enviamos varias variantes por compatibilidad con distintos templates
    to_email: toEmail,
    user_email: toEmail,
    reply_to: toEmail,
    from_email: toEmail,
    // Variables separadas para el template
    orderSummary: orderSummary,
    totalPrice: totalPrice,
    pickupTimeText: pickupTimeText || 'No especificado',
    // También enviamos el mensaje completo por si acaso
    message:
      'El mismo estará en espera hasta que recibamos el comprobante de pago. Recordá enviarnos el comprobante de pago a: coffeebakerystore@gmail.com.\n' +
      'Una vez confirmada la transferencia, preparamos y despachamos tu pedido. ¡Gracias!\n\n' +
      'Datos de la cuenta de Coffee&Bakery.\n' +
      'CBU: 123456789 \n' +
      'Alias: Coffee&Bakery \n' +
      'Cuenta: Cuenta Corriente \n' +
      'Moneda: Peso Argentino \n' +
      `Resumen del pedido:\n${orderSummary}\n\nTotal: $${totalPrice}\nHorario de retiro: ${pickupTimeText || 'No especificado'}`,
  };

  if (!SERVICE_ID || SERVICE_ID === 'YOUR_SERVICE_ID' || !TEMPLATE_ID || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || !PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    // Fail gracefully if not configured; mimic success in dev to avoid breaking flow
    return { status: 'skipped', reason: 'EmailJS not configured' };
  }

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
  return response;
}


