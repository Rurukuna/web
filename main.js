// Número de acceso permitido
const accessNumber = 172020;

function checkAccess() {
  // Obtener el valor ingresado por el usuario
  const enteredCode = document.getElementById('accessCode').value;

  // Verificar si el número ingresado es correcto
  if (enteredCode == accessNumber) {
    alert('Acceso permitido. Bienvenido pelado bobo.');
    // Redirigir al usuario a la página deseada (cambia 'pagina_deseada.html' por la URL que desees)
    window.location.href = 'v.html';
  } else {
    alert('Contraseña incorrecta.');
  }
}