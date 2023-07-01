"use strict";
// Crearemos una subclase llamada Televisión con las siguientes características:
// ● Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos
// heredados.
// ● Por defecto, la resolución será de 20 pulgadas y el 4k será false.
// Recuerda que debes llamar al constructor de la clase padre.
// Los métodos que se implementara serán:
// ● Método get de resolución y atributo de 4K.
// ● precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementará el precio
// un 30% y si tiene 4k incorporado, aumentará 50 €. Recuerda que las condiciones que
// hemos visto en la clase Electrodoméstico también deben afectar al precio.
class Television extends Electrodomesticos {
    constructor(resolucion = Television.RESOLUCION_POR_DEFECTO, definicion = Television.DEFINICION_POR_DEFECTO, precioBase = Electrodomesticos.PRECIO_BASE, color = Electrodomesticos.COLOR_BLANCO, consumoEnergetico = Electrodomesticos.CONSUMO_ENERGETICO_F, peso = Electrodomesticos.PESO) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.definicion = definicion;
    }
    // Getters
    getResolucion() {
        return this.resolucion;
    }
    getDefinicion() {
        return this.definicion;
    }
    precioFinal() {
        if (this.definicion) {
            this.consumoEnergetico = "D";
        }
        if (this.resolucion > 40) {
            this.precioBase = this.precioBase * 0.3;
        }
        return super.precioFinal();
    }
}
Television.RESOLUCION_POR_DEFECTO = 20;
Television.DEFINICION_POR_DEFECTO = false;
