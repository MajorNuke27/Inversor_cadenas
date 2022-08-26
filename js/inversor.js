let cadena = 'kayay';

function invertir(begin, end, cadena) {

    if (begin == end || begin > end) {
        return cadena;
    }

    let cache = cadena[begin];
    cadena[end] = cache;
    cadena[begin] = cadena[end];

    cadena = invertir(++begin, --end, cadena);

    return cadena;
}


let cadenaInvertida = invertir(0, cadena.length - 1, cadena);
console.log(cadenaInvertida);
