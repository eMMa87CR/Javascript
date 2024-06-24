//Algoritmo simple
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
alert("Hola " + nombre + " " + apellido);
console.log("Hola " + nombre + " " + apellido);

//Algoritmo condicional
let entrada = prompt("Ingrese su edad");

let edad = parseInt(entrada);
if (edad >= 18) {
  alert("Usted es mayor de edad, bienvenido al sitio");
} else if (edad >= 12) {
  alert("Usted es adolescente si es acompañdo con un mayor, bienvenido al sitio");
} else {
  alert("Usted es menor de edad, no puede ingresar al sitio");
}
console.log("Usted tiene " + edad + " años");

let producto = prompt("Ingrese el nombre del producto. 1.Playstation 5 - 2.Xbox Series X - 3.Nintendo Switch");

switch (producto) {
    case "1":
        alert("El precio de la Playstation 5 es de $500");
        break;
    case "2":
        alert("El precio de la Xbox Series X es de $450");
        break;
    case "3":
        alert("El precio de la Nintendo Switch es de $400");
        break;
    default:
        alert("El producto ingresado no se encuentra en la lista");
        break;
}
console.log("El producto ingresado es: " + producto);

//no olvidar colocar parseInt para que el prompt sea un número.
let repeticiones = parseInt(prompt("Ingrese la cantidad de veces que desea repetir el mensaje"));

let mensaje = prompt("Ingrese el mensaje que desea repetir");

for (let i = 0; i < repeticiones; i++) {
    console.log(mensaje);
}
console.log("El mensaje se repitió " + repeticiones + " veces");
console.log("gracias por usar el programa")
