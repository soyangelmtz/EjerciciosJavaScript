let anioDeNacimiento = prompt("Ingresa tu año de nacimiento");
let anioActual = new Date().getFullYear();
let mayorDeedad = anioActual - anioDeNacimiento;

if (mayorDeedad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}
