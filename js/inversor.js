let cadena = 'kayay radar arenera somos reconocer';

function invertir(begin, end, cadena) {

    if (begin >= end) {
        return cadena;
    }

    let caracteres = cadena.split('');
    let cache = caracteres[end];
    caracteres[end] = caracteres[begin];
    caracteres[begin] = cache;

    cadena = invertir(++begin, --end, caracteres.join(""));

    return cadena;
}


let cadenaInvertida = invertir(0, cadena.length - 1, cadena);
console.log(cadenaInvertida);

