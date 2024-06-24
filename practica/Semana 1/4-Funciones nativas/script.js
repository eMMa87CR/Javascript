let respuesta = prompt("Hola, ¿cómo te llamas?"); //prompt es una función nativa de JavaScript que nos permite pedirle al usuario que ingrese un dato y guardarlo en una variable string.
console.log(`Hola ${respuesta}, bienvenido a la pagina de JavaScript!`);

alert("Gracias por visitar nuestra página!"); //alert es una función nativa de JavaScript que nos permite mostrar un mensaje en una ventana emergente, sin necesidad de que el usuario ingrese un dato.
console.log("Hasta luego!");

let confirmacion = confirm("¿Quieres seguir en la página?"); //confirm es una función nativa de JavaScript que nos permite mostrar un mensaje en una ventana emergente y que el usuario pueda confirmar o cancelar la acción.
console.log(confirmacion); //confirm devuelve un valor booleano, true si el usuario confirmó y false si canceló.

//tanto como prompt y confirm deben ser guardados en una variable para poder utilizar su valor.
