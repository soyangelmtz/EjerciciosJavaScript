/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto para representar datos estructurados basados en la sintaxis de objetos de JavaScript.


JSON es una estructura de datos que nos permite guardar datos en formato de objetos. Esto nos permite guardar datos en formato de texto, y luego poder leerlos. Es usando comunmente cuanto queremos transimitir datos entre aplicaciones web, existe como una cadena - util cuando deseamos transmitir datos a traves de una red.

Es importante mencionar que debemos convertirlo a un objeto JavaScript nativo cuando deseemos acceder a los datos, ademas de que es indepentiente del lenguaje.

JSON son iguales a los arrays asociativos en JS (recordemos que un arreglo asociativo es un array que contiene objetos)

*/
// Objeto normal de JAVASCRIPT
objeto = {
    nombre: "Felipe",
    edad: 15,
}
console.log (objeto);


/*
Cuando hablamos de JSON, agregamos comillas a nuestra variable, y luego le damos un valor a la variable, para que cuando enviemos esa informacion a nuestro servidor, tengamos un intercambio de datos de forma correcta. Cuando enviamos datos a un servidor, tienen que estar serializados.
*/


// Objeto JSON
objeto2 = {
    "nombre": "Felipe",
    "edad": 15,
}
console.log (objeto2);


//JSON serializado es una representacion en formato de texto de un objeto

const deserializado = {"nombre": "Felipe","edad": 15};
const serializado = '{"nombre": "Felipe","edad": 15}';

console.log (typeof deserializado);
console.log (typeof serializado);




/*
*Metodo para convertir una cadena de texto a un objeto JSON (JSON.parse)
El metdo parse() convierte una cadena de texto en un objeto JSON. Esto nos ayuda a que podamos leer los datos de una cadena de texto que traemos de un servidor y podamos acceder a ellos.
*/

const deserializado1 = JSON.parse(serializado); 
console.log(deserializado1);

/*
*Metodo para convertir un objeto JSON a una cadena de texto (JSON.stringify)
En cambio, el metodo stringify() convierte un objeto JSON en una cadena de texto. Esto nos ayuda a que podamos enviar los datos de un objeto JSON a un servidor y que podamos leerlos.
*/

const serializado1 = JSON.stringify(deserializado);
console.log(serializado1);

//JSON polyfill (Son funciones que simulan la funcionalidad de JSON en los navegadores que no soportan JSON, como versiones mas antiguas de IE).


//! Si ejecutamos este pedazo de codigo, que obtendremos en consola?
var obj = {"firstName":"John", "lastName":"Doe", "Location":"New York"};
var stringifyed = JSON.stringify(obj);
console.log(stringifyed);