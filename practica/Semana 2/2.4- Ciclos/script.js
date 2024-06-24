
//for(donde arranca; hasta donde llega; como avanza)
for(let i=0; i<10;i++){
    console.log("Intento N°" + i);
}
// en programacion arranca en 0
// ++ es igual variable +1
//el ciclo va a dar 10 vueltas y va a imprimir 10 veces "Intento N°" + i


//sentencia break
for(let i=0; i<10;i++){
//Si la varible i es igual a 8 se va a detener el ciclo
    if(i==3){
        console.warn("se detuvo el ciclo", i, "por la clausa de detencion");
        break;//break es para detener el ciclo
    }
    console.log("Intento N°" + i);
}


//sentencia continue
for (let i = 0; i < 10; i++) {
    //Si la variable i es igual a 8 se va a detener el ciclo
    if (i == 5) {
        console.warn("se detuvo el ciclo", i, "por la clausa de CONTINUAR");
        continue; //continue es para saltar la iteracion
    }
    console.log(i);
}
