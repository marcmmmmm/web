// Funcionalidad JavaScript para el sitio web extendido

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evita el comportamiento de envío de formulario predeterminado

    // Obtener los valores del formulario
    const name = document.getElementById('name').value; // Obtener el valor del campo de nombre
    const email = document.getElementById('email').value; // Obtener el valor del campo de correo electrónico
    const message = document.getElementById('message').value; // Obtener el valor del campo de mensaje

    // Mostrar los datos enviados (en este ejemplo, solo registrando en la consola)
    console.log("Datos del formulario enviado:");
    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Mensaje:", message);

    // Aquí puedes agregar código para enviar los datos del formulario a un servidor, etc.
}

// Evento oyente para el envío del formulario
document.getElementById('contact-form').addEventListener('submit', handleSubmit);