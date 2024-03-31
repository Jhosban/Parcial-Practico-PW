const arrayNumeros = [122, 232, 453, 267, 354, 256];

function sumarCuadros(arrayNumeros) {
    let sum = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        let guiones = "";
        const num = arrayNumeros[i].toString();
        for (let j = 0; j < num.length; j++) {
            guiones += "-";
        }
        console.log("+", guiones, "+");
        console.log("|", arrayNumeros[i], "|");
        console.log("+", guiones, "+");
        sum += arrayNumeros[i];
    }
    const suma = sum.toString()
    let iguales = "";
    const num = suma.toString();
    for (let j = 0; j < num.length; j++) {
        iguales += "=";
    }
    console.log("+", iguales, "+");
    console.log("|", sum, "|");
    console.log("+", iguales, "+");
}


console.log(sumarCuadros(arrayNumeros));


