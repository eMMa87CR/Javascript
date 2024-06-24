//2.1- condicionales y operadores

/*
if (true) {
  console.log("Hola como estas");
} //muestra Hola como estas en consola porque la condicion es verdadera

if(false){
  console.log("Hola como estas");
} 
*/ //no muestra nada en consola porque la condicion es falsa

/*
let tiempo = "soleado";//variable tiempo con valor soleado
if(tiempo == "soleado"){
  console.warn("Vamos a la playa");//muestra "Vamos a la playa" en consola
}

if(tiempo == "lluvioso"){
  console.warn("Vamos al cine");
}
*/ // el doble igual (==) es un operador de comparacion que compara si dos valores son iguales

/*
if(tiempo == "soleado"){
  console.warn("Vamos a la playa");
}else{//si no se cumple la condicion anterior
  console.warn("Vamos al cine");
}
*/

//operador de comparacion
// == igual
/*
let edadMinima = 19;

edadMinima = 17;
/*

if (edadMinima < 18) {
  console.warn("anda a jugar a la pelota mejor");
} else if (edadMinima >= 18) {//si el valor de la variable edadMinima es mayor o igual a 18
  console.warn("Puede votar, VIVA LA LIBERTAD CARAJO!!");
} else {
  //si no se cumple ninguna de las condiciones anteriores
}
*/

//operador logico AND (&&)

//ejempo 1

let nivelIngles = "moderado";
let nivelOffice = "avanzado";

/*
//&& es un operador logico que evalua si ambas condiciones son verdaderas
if ((nivelIngles == "moderado") && (nivelOffice == "avanzado")) {
  console.log("Puede aplicar a la vacante"); //muestra Puede aplicar a la vacante en consola
}else{
console.warn("No puede aplicar a la vacante");//si no se cumple la condicion anterior muestra No puede aplicar a la vacante en consola  
}
*/
/*
// || es un operador logico que evalua si alguna de las condiciones es verdadera
if ((nivelIngles == "moderado")||(nivelIngles == "avanzado")) {
  console.log("Puede aplicar a la vacante");
}else{
console.warn("No puede aplicar a la vacante");
}
*/

// cumple las dos condiciones o por lo menos una
if (((nivelIngles == "moderado")&&(nivelOffice == "avanzado"))||(nivelIngles == "avanzado")) {
  console.log("Puede aplicar a la vacante");
}else{
console.warn("No puede aplicar a la vacante");
}