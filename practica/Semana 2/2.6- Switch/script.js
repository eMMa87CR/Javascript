//Switch
//Ejercicio 1
let clima = prompt("¿Cómo está el clima hoy?Soleado, Lluvioso, Nublado, Nevando, Ventoso");
switch (clima) {
    case "Soleado":
        console.log("Hoy está soleado, no olvides tu bloqueador solar");
        break;
    case "Lluvioso":
        console.log("Hoy está lloviendo, no olvides tu paraguas");
        break;
    case "Nublado":
        console.log("Hoy está nublado, no olvides tu suéter");
        break;
    case "Nevando":
        console.log("Hoy está nevando, no olvides tu gorro y guantes");
        break;
    case "Ventoso":
        console.log("Hoy está ventoso, no olvides tu rompevientos");
        break;
    default:
        console.log("No ingresaste una opción válida");
}
//Case es una estructura de control que permite evaluar una expresión y compararla con diferentes valores, si la expresión coincide con alguno de los valores, se ejecuta el bloque de código correspondiente. Si no coincide con ninguno de los valores, se ejecuta el bloque de código del caso default.