//ciclo while
let i = 1;
while (i <= 5) {
  console.log("while",i);
  i++;//Es importante incrementar la variable de control para que el ciclo no sea infinito
}

//ciclo do while
let numero = 0;
do {
    //Se repite Do mientrias el usuario ingrese numeros.
    numero = (window.prompt("Ingrese un número"));
    console.log("do while", numero);
} while (parseInt(numero));
//parseInt convierte el string a un número entero, si el usuario ingresa un string vacio o un string que no se pueda convertir a número, se convierte en 0 y el ciclo se detiene.

//while no se ejecuta
let j = 7;
while (j<6){
    console.log("while no se ejecuta",j);
    j++;
}