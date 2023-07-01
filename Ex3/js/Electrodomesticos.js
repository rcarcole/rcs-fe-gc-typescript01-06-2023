"use strict";
// Crearemos una superclase llamada Electrodoméstico con las siguientes características:
// • Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// peso. Indica que se podrán heredar.
// • Por defecto, el color será blanco, el consumo energético será F, el precio Base es de
// 100 € y el peso de 5 kg. Usa constantes para ello.
// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre
// está en mayúsculas o en minúsculas.
class Electrodomesticos {
    constructor(precioBase = Electrodomesticos.PRECIO_BASE, color = Electrodomesticos.COLOR_BLANCO, consumoEnergetico = Electrodomesticos.CONSUMO_ENERGETICO_F, peso = Electrodomesticos.PESO) {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        const consumoFormateado = letra.toUpperCase();
        if (consumoFormateado >= "A" && consumoFormateado <= "F") {
            return consumoFormateado;
        }
        else {
            return Electrodomesticos.CONSUMO_ENERGETICO_F;
        }
    }
    comprobarColor(color) {
        const coloresDisponibles = [
            Electrodomesticos.COLOR_BLANCO,
            Electrodomesticos.COLOR_NEGRO,
            Electrodomesticos.COLOR_ROJO,
            Electrodomesticos.COLOR_AZUL,
            Electrodomesticos.COLOR_GRIS,
        ];
        const colorFormateado = color.toLowerCase();
        if (coloresDisponibles.indexOf(colorFormateado) !== -1) {
            return colorFormateado;
        }
        else {
            return Electrodomesticos.COLOR_BLANCO;
        }
    }
    precioFinal() {
        let precioFinal = this.precioBase;
        switch (this.consumoEnergetico) {
            case "A":
                precioFinal += 100;
                break;
            case "B":
                precioFinal += 80;
                break;
            case "C":
                precioFinal += 60;
                break;
            case "D":
                precioFinal += 50;
                break;
            case "E":
                precioFinal += 30;
                break;
            case "F":
                precioFinal += 10;
                break;
        }
        if (this.peso >= 0 && this.peso < 20) {
            precioFinal += 10;
        }
        else if (this.peso >= 20 && this.peso < 50) {
            precioFinal += 50;
        }
        else if (this.peso >= 50 && this.peso < 100) {
            precioFinal += 80;
        }
        else if (this.peso >= 100) {
            precioFinal += 100;
        }
        return precioFinal;
    }
}
Electrodomesticos.COLOR_BLANCO = "blanco";
Electrodomesticos.COLOR_NEGRO = "negro";
Electrodomesticos.COLOR_ROJO = "rojo";
Electrodomesticos.COLOR_AZUL = "azul";
Electrodomesticos.COLOR_GRIS = "gris";
Electrodomesticos.CONSUMO_ENERGETICO_F = "F";
Electrodomesticos.PRECIO_BASE = 100;
Electrodomesticos.PESO = 5;
