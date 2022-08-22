// // Pedir a Felipe las primeras 60 lineas de codigo

// // Ejemplo de JS asincrono
// console.log("Inicio de asincrono");
// function dos(){
//     setTimeout(function(){
//         console.log("Dos");
//     }, 2000);
// }
// function uno (){
//     setTimeout(function(){
//         console.log("Uno");
//     }, 0);
//     dos();
//     console.log("Tres");
// }
// Uint16Array();
// console.log("Fin de Asincrono");

// //Cual es la salida de este codigo?:

// /*
// Ejemplos de tareas asincronas

// - Fetch a una URL para obtener un archivo JSON
// - Tareas programadas con setTimeout
// - Spotify, al momento de reproducir un .mp3



// Mecanismos asincronos en JAVASCRIPT

// Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

//     - Callbacks
//     - Promises
//     - Async/Await
// Promesas (promises)

// Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas. La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

// Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto el cual puede estar disponible AHORA o en el FUTURO. Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

// Las promesas tienen 3 estados posibles:
//     - Pending: Estado inicial, cuando se crea la promesa. 
//     - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
//     - Rejected: Cuando la operacion asincrona falla (reject)

// Nuestras promesas tiene algunos metodos:

//     - then(function resolve): Ejecuta la funcion resolve cuando la promesa se cumple
//     - catch(function resolve): Ejecuta la funcion reject cuando la promesa no se cumple.
    
//     - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
//     - finally(function end): Ejecutar la funcion end si se cumple o no la promesa.
// */

// //Ejemplo de promesa para saber el nombre
// let nombre = "Felipe";

// const promesaNombre = new Promise((resolve, reject) =>{
//     if (nombre !=="Felipe") reject("Error!!, el nombre no es Felipe");
//     resolve(nombre);
// }
// );
// console.log(promesaNombre);

// //Ejemplo archivos de Felipe

// // - Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
// // - Fullfilled: Cuando Felipe los envia
// // - Rejected: Cuando no los envia o cuando avisa que no los puede enviar.

// //Ejemplo de los archivos de Felipe

// // - then (function archivosEnviados)
// // - catch (function felipeNoCumple)
// // - finally (function promesaTerminada)

// //Promesa de AMOR donde nos dejan en visto un ratito, y luego nos aceptan la invitacion
// var promesaDeAmor = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         resolve ("Si quiero salir contigo, te amo");
//     }, 5000);
// });
// promesaDeAmor.then(function(valor){
//     console.log(valor);
// });
// console.log(promesaDeAmor);

// //Ejemplo de promesa para ir por unas tortas
// let decision = "No";

// const promesaTortas = new Promise((resolve, reject) => {
//     if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
//     resolve(decision);
// }
// );
// console.log(promesaTortas);

// fetch ('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(datos =>{
//         return datos.json();
//     })
//     .then(info =>{
//         console.log("El nombre de nuestro Pokemon es: ", info.name, "y su numero es: ", info.id);
//     });


//     function fetchPokemon(id){
//         fetch('https://pokeapi.co/api/v2/pokeon/${id}/')
//         .then(respuesta => )
//     }

/*
ALMACENAMIENTO LOCAL (LocalStorage)

La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada mediante codigo o bien borrada desde el navegador.

El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.


ALMACENAMIENTO DE SESION (SessionStorage)


La informacion que guardamos en sessionStorage solo se guarda durante la sesion del navegador (es decir, se elimina cuando se cierra el navegador). Si tenemos varias ventanas o pestañas abiertas, la informacion se guarda en cada una de ellas, asi que si cerramos una ventana, la informacion se borra de la misma.

*/

// Session Storage HERE

function guardarDatos(){

localStorage.nombre = document.getElementById("nombre").value; //guardar el valor del nombre en el local Storage

localStorage.password = document.getElementById("password").value; //guardar el valor del password en el local Storage

document.getElementById("datos").innerHTML = ("Datos guardados correctamente :D"); // sobreescribimos el contenidos del parrafo por este nuevo mensaje


//Revisar el correcto funcionamiento del codigo
console.log(typeof localStorage.nombre);
console.log(typeof localStorage.password);

}


function recuperarDatos(){

    // Si en la llave nomber de mi localStorage y ademas en la llave password los datos son diferentes de undefined (significa que si tengo datos), voy a mostrar el mensaje con esa informacion
    if (localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "Password: " + localStorage.password;
    // en caso de que no se cumpla con la condicion, muestro un mensaje de alerta
    }else{
        document.getElementById("datos").innerHTML = "No hay datos para mostrar!!!"
    }



}