"use strict";
// Haz una clase llamada Password que siga las siguientes condiciones:
// ● Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.
// ● Los constructores serán los siguientes:
// Incluye el método que genere una contraseña aleatoria con esa longitud.
class Password {
    constructor(newLong = 8) {
        this.longitud = newLong;
        this.contrasenya = this.generarContrasenyaAleatoria(newLong);
    }
    generarContrasenyaAleatoria(longitud) {
        let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let contraseña = "";
        for (let i = 0; i < longitud; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres.charAt(indice);
        }
        return contraseña;
    }
}
