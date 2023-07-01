"use strict";
// Haz una clase llamada Persona que siga las siguientes condiciones:
// ● Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
// ● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
// (0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
// constante para ello.
// ● Instancia al menos tres objetos
class Persona {
    constructor(newNom, newEdad, newDNI, newSexo, newPeso, newAltura) {
        this.sexo = "H";
        this.nombre = newNom;
        this.edad = newEdad;
        this.DNI = newDNI;
        this.sexo = newSexo;
        this.peso = newPeso;
        this.altura = newAltura;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(newSexo) {
        this.sexo = newSexo;
    }
}
