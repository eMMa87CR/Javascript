var nombre = "Juan"; // Variable global (se puede acceder desde cualquier parte del código)
nombre = "Pedro"; // Se puede reasignar
console.log(nombre);


let apellido = "Perez"; // Variable local (solo se puede acceder desde el bloque donde fue declarada)
/**let apellido = "Gomez"; // Error (ya fue declarada)**/
console.log(apellido);

const edad = 30; // Variable constante (no se puede reasignar)
/**edad = 31; // Error (no se puede reasignar)**/

console.log(edad);