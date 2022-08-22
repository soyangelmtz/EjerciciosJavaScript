/*
*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

    - Programacion funcional
    - Programacion imperativa
    - Programacion declarativa


Principios SOLID

Los principios SOLID son consejos y buenas practicas de desarrollo que nos permiten crear mejores proyectos con codigo muy eficiente. 

Algunos objetivos de los principios SOLID:

    - Crear software eficaz, que cumpla su cometido y que sea robusto y estable.
    - Escribir codigo limpio y flexible ante los cambios, que se pueda moficiar facilmente segun la necesidad, que sea reutilizable y mantenible.
    - Permitir la escalabibilidad, que acepte ser amplicado con nuevas funcionalidades de manera agil.


https://profile.es/blog/principios-solid-desarrollo-software-calidad/

    
Principios SOLID

    - Principio de Responsabilidad Unica
    - Principio de Abierto - Cerrado
    - Principio de Liskov Substitution
    - Principio de la segregacion de interfaces
    - Principio de Dependencia Inversa




Elementos de la Programacion Orientada a Objetos

    - Clases: 
    Plantilla que nos sirve para crear objetos. Las clases son una plantilla para crear objetos. Nos ayudan a definir un tipo de objeto y a crear instancias (materializacion) de ese tipo de objeto. Encapsulan datos con codigo que trabaja con esos datos.
    
    - Objetos: 
    Elementos creados a partir de la plantilla.

    - Propiedades o atributos:
    Informacion que tiene un elemento. Es la informacion (datos) almacenados en un objeto. 
        - Color de la casa
        - Material de la casa
        - Dimensiones de la casa
        - Cuantas ventanas tiene

    - Metodos o funciones:
    Lo que hacen y como lo hacen. (acciones que puede realizar). En el ejemplo de la casa, los metodos son:
        - Abrir y cerrar ventanas
        - Abrir y cerrar puertas
        - Encender la luz

    - Constructores:
    Son quienes construyen al objeto tomando en cuanta a la plantilla. Es una funcion o metodo especial de una clase para crear e iniciliar un objeto desde la clase. Como es especial, puedo agregarle parametros a la funcion. 

    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

//Ejemplo de los gatitos

const felix ={
    nombre: "Felix",
    color: "Naranja",
    peso: "10kg",
    edad: "5 anios", 
    colorOjos: "verdes", 
    raza: "fold escoces",
    sexo: "hembra",
    vacunas: true,
    numeroBigotes: 20,
    tipoPelo: "largo",
    manchas: true,
    imagen: "felix.jpg"
};

const bigotes ={
    nombre: "Bigotes",
    color: "Naranja",
    peso: "10kg",
    edad: "5 anios", 
    colorOjos: "verdes", 
    raza: "fold escoces",
    sexo: "hembra",
    vacunas: true,
    numeroBigotes: 20,
    tipoPelo: "largo",
    manchas: true,
    imagen: "bigotes.jpg"
};



console.log(felix);//toda la info del gatito
console.log(felix.nombre);//imprimo nombre
console.log(felix.raza); //imprimo la raza
console.log(felix.vacunas); //imprimo vacunas
console.log(felix.numeroBigotes); //imprimo bigotes


//Plantilla para crear muchos gatitos

//1.- Defino mi plantilla con las propiedades como variables, para despues agregar valores
class gatito {
    nombre = "";
    color = "";
    edad = 0;
    raza = "";


//3. Crear un constructor
constructor(nombre, color, edad, raza) { //Necesitamos pasar los parametros
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza = raza;
    } //fin del constructor


//this (este o esto): Nos va a indicar el lugar donde estamos (ciudad o en el campo). Necesitamos saber que esta palabra es reservada, y nos ayuda a saber el aqui y el ahora.Hace referencia a la clase en la questamos, y los objetos que estamos creado.



//2.- Defino mis metodos COMO FUNCIONES, por que con estas funciones podemos realizar acciones

maullar(maullar){ //Metodo para maullar, NO usamos la palabra reservada FUNCTION, al trabajar en POO solo usamos el nombre del metodo
    maullar = console.log("Miauuuuuu");
}
dormir(dormir){ //Metodo para dormir
    dormir = console.log("Zzzzzzzzz");
}
ronronear(ronronear){ //Metodo para ronronear
    ronronear = console.log("Rrrrrrrrr");
}

imprimirInfo(div,bg){ //OPCIONAL, este metodo me permite imprimir la informacion de nuestros gatitos directamente en el front. Usamos una card de Bootstrap que vamos a insertar con el innerHTML directamente en un div vaciio de nuestro documento .html. Veremos que cierta informacion de esta tarjeta, esta reemplazada con la info que ya declaramos anteriormente dentro de la clase "gatitos"
    div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
    <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.raza}.</p>
    </div>
  </div>`; 
}


} //fin de la clase



//4.- Crear gatitos
let contenido = document.getElementById("contenido"); //OPCIONAL declaro una variable para el contenido, y asi poder usarla para poner la card de mis gatitos en el front (documento .html)
let kitty = new gatito("Kitty", "blanco", 666, "japonesa"); //creo un gatito llamado "Kitty"
let garfield = new gatito ("Garfield", "Chettos", 15, "Persa"); //creo un gatito llamado "Gardfield"

console.log(kitty); //Imprimo TODA la info de Kitty
console.log(garfield); //Imprimo TODA la infor de Gardfield

kitty.maullar(); //Hago que Kitty maulle
garfield.dormir(); //Hago que Gardfield duerma
garfield.ronronear(); //Hago que Gardfield ronronee


//OPCIONAL
//Puedo usar el metodo "imprimirInfo" para poder mostrar la informacion de mis gatitos directamente en el front (documento .html). Para esta funcion, es necesario pasarle dos parametros, el primero es la variable "contenido" que declaramos mas arriba, para poder "aterrizar" ahi la informacion. La segunda variable, es el color de Bootstrap que usamos para los botones, aunque siempre podemos cambiar por otro color.

kitty.imprimirInfo(contenido, "bg-light"); //Imprimo informacion de Kitty en una card de Bootstrap color blanca
garfield.imprimirInfo(contenido, "bg-danger");
garfield.imprimirInfo(contenido, "bg-dark");
garfield.imprimirInfo(contenido, "bg-success");
garfield.imprimirInfo(contenido, "bg-primary");