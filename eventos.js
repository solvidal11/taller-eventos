let botonDiv = document.getElementById('saludoDiv');
botonDiv.addEventListener('click', function (){
    alert("Hola! Soy el div");
});
function saludar(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert('¡Hola!');
}