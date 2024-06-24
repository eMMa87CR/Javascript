/*2.2: Actividad de Condicionales y operadores
1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.

Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo.*/

const respuestaUsuario = prompt("¿En qué año naciste?");
const anioActual = new Date().getFullYear();//Obtenemos el año actual
const mundialesVividos = Math.floor((anioActual - respuestaUsuario) / 4);
console.log(`Has vivido ${mundialesVividos} mundiales.`);