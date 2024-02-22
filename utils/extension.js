function obtenerExtension(nombreArchivo) {
    const partes = nombreArchivo.split('.');
    if (partes.length === 1) {
        // No hay punto en el nombre del archivo
        return null;
    }
    return partes[partes.length - 1].toLowerCase();
}


module.exports = { obtenerExtension }