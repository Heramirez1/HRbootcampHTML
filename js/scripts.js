
//--- eventos de JavaScript ---//
//--- Inicializar array datos ---//
const datos = {
	nombre: '',
	celular: '',
	correo: '',
	mensaje: ''
}
//--- eventos de los input ---//
//--- método querySelector - Devuelve el primer elemento del document que coincida con el selector

// let nombre = document.querySelector('#nombre');
// let celular = document.querySelector('#celular');
// let correo = document.querySelector('#correo');
// let mensaje = document.querySelector('#mensaje');


// console.log(nombre);
// console.log(celular);



//--- método addEventListener, escucha un evento indicado y ejecuta una función

// nombre.addEventListener('input', funcionprueba);

// function funcionprueba(){
// alert ('Hola');
// }
nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
	// console.log(evento);
	datos[evento.target.id] = evento.target.value;
	// console.log(datos);
}


const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
	evento.preventDefault();
	const {nombre, celular, correo, mensaje} = datos;
	// console.log(nombre);
	// console.log(celular);
	// console.log(correo);
	// console.log(mensaje);
	if (nombre === '' || celular === '' ||correo === '' ||mensaje === ''){
		// console.log('todos los campos son obligatorios');
		mostrarError('todos los campos son obligatorios')
		return; //parar la ejecución del programa
	}

	mostrarMensaje("Enviando datos correctamente")
	
	// console.log('Procesando formulario');
});

function mostrarError(mensaje){

let error = document.createElement('p')
error.textContent = mensaje;
error.classList.add('error');
formulario.appendChild(error);

setTimeout(() =>{
	error.remove();
}, 5000);

// console.log = error

}

function mostrarMensaje(mensaje){

let alerta = document.createElement('p')
alerta.textContent = mensaje;
alerta.classList.add('correcto');
formulario.appendChild(alerta);

setTimeout(() =>{
	alerta.remove();
}, 3000);
}