/*

Arrays o arreglos

-- Definicion --

Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar UN solo dato. 
En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos

*/


//Ejemplo 1
let nombre = "Felipe"; //Aqui se almacena un solo dato
array = ["Felipe", "Ivonne", "Briana", "Zabdiel", "Alonso"];

//Ejemplo de un array con diferentes tipos de datos
arrayAnimalitosDelBosque = ["Felipe", 23, true, null, undefined];

/*
-- Formas de crear un array --

1.- Primera Forma

Utilizando la palabra reservada "new Array". En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).
*/

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.


var colores = new Array(5);
var marcaDeColores = new Array("Mapita", "Prismacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola");

/*

2.- Segunda Forma

La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS.

*/
var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

//Ejemplos de Arreglos
listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

/*

-- Acceder a elementos de un array

Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

 - Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

 //Posicion de los elementos de la lista del super
    0: "Leche"
    1: "Papitas"
    2: "Jabon"
    3: "Nachos"
    4: "Huevos"

Numero de elementos NO ES LO MISMO que su posicion.


*/


//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.


/*

Array Asociativo

Son arreglos donde cada elemento esta asociado no solo con su indice, si no que tambien esta asignado a un identificador.

Sintaxis de un arreglo asociativo



*/

//Ejemplo de una Ecommerce
let propiedadesDeMiComputadora = {
    marca: "Asus", //la marca es mi identificador, y "Asus" es mi valor
    modelo: "GL552JX",
    procesador: "Intel Core i7",
    ram: "16 GB",
    almacenamiento: "1 TB",
    precio: "15000"
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);


//Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Agosto",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasagna",
    ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);


/*
Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)

*/
console.log("//////////////////////////////////////");

var arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandia", "Fresas"];

console.log("Este es nuestro arreglo Original de 7 elementos", arrayDeEjemplo);


//Metodos transformadores

//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo: ", arrayDeEjemplo);

//pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): Agregamos uno o mas elementos al princip del arreglo
arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "lichi");
console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);

//shift(): Eliminar el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);


//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 4);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9, -5);
console.log("Imprimimos la rebanada del arreglo original", saludo4);

/*
//splice(): Modificar el arreglo en 3 formas distintas

- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo


Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);


/*
Metodos Accesores
*/

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length():Nos permite saber el numero de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada ", ensalada.length);


//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));


//toString
//valueOf : valor de
console.log(dulces.valueOf());
//includes