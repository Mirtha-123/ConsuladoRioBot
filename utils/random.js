async function generarValorAleatorio() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';

    const generarCaracterAleatorio = (cadena) => cadena[Math.floor(Math.random() * cadena.length)];

    const letra1 = generarCaracterAleatorio(letras);
    const letra2 = generarCaracterAleatorio(letras);
    const numero1 = generarCaracterAleatorio(numeros);
    const numero2 = generarCaracterAleatorio(numeros);
    const letra3 = generarCaracterAleatorio(letras);
    const letra4 = generarCaracterAleatorio(letras);

    const valorAleatorio = `${letra1}${letra2}${numero1}${numero2}${letra3}${letra4}`;

    return valorAleatorio;
}


module.exports = { generarValorAleatorio }