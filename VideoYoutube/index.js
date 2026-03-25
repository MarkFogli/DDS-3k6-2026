function suma (a, b){
    return a + b;
}

function resta (a, b){
    return a - b;
}

function multiplicacion (a, b){
    return a * b;
}

function division (a, b){
    if (b ==0)
        return "No se puede dividir por cero";
    else
        return a / b;
}

console.log("Suma: " + suma(1, 2));
console.log("Resta: " + resta(5, 3));
console.log("Multiplicación: " + multiplicacion(2, 4));
console.log("División: " + division(10, 2));