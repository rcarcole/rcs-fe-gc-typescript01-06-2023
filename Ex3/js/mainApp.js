"use strict";
// Ahora crea una clase mainApp que realice lo siguiente:
// • Crea un array de Electrodomésticos de 10 posiciones.
// • Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
// • Ahora, recorre este array y ejecuta el método precioFinal().
// • Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por
// un lado, el de las lavadoras por otro y la suma de los Electrodomésticos (puedes crear
// objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son
// electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final de
// 300, una lavadora de 200 y una televisión de 500, el resultado final será de 1000
// (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.
class mainApp {
    constructor() {
        this.electrodomesticos = new Array(10);
        this.electrodomesticos[0] = new Electrodomesticos(200, Electrodomesticos.COLOR_AZUL, "A", 30);
        this.electrodomesticos[1] = new Electrodomesticos(300, Electrodomesticos.COLOR_GRIS, "B", 40);
        this.electrodomesticos[2] = new Electrodomesticos(400, Electrodomesticos.COLOR_ROJO, "C", 50);
        this.electrodomesticos[3] = new Lavadora(30, 200, Electrodomesticos.COLOR_AZUL, "A", 30);
        this.electrodomesticos[4] = new Lavadora(40, 300, Electrodomesticos.COLOR_GRIS, "B", 40);
        this.electrodomesticos[5] = new Lavadora(50, 400, Electrodomesticos.COLOR_ROJO, "C", 50);
        this.electrodomesticos[6] = new Television(30, true, 200, Electrodomesticos.COLOR_AZUL, "A", 30);
        this.electrodomesticos[7] = new Television(40, false, 300, Electrodomesticos.COLOR_GRIS, "B", 40);
        this.electrodomesticos[8] = new Television(50, true, 400, Electrodomesticos.COLOR_ROJO, "C", 50);
        this.electrodomesticos[9] = new Television(65, false, 500, Electrodomesticos.COLOR_BLANCO, "D", 60);
    }
    mostrarPrecios() {
        let precioElectrodomesticos = 0;
        let precioLavadoras = 0;
        let precioTelevisiones = 0;
        for (let i = 0; i < this.electrodomesticos.length; i++) {
            if (this.electrodomesticos[i] instanceof Electrodomesticos) {
                precioElectrodomesticos += this.electrodomesticos[i].precioFinal();
            }
            if (this.electrodomesticos[i] instanceof Lavadora) {
                precioLavadoras += this.electrodomesticos[i].precioFinal();
            }
            if (this.electrodomesticos[i] instanceof Television) {
                precioTelevisiones += this.electrodomesticos[i].precioFinal();
            }
        }
        console.log("El precio de los electrodomesticos es de: " + precioElectrodomesticos);
        console.log("El precio de las lavadoras es de: " + precioLavadoras);
        console.log("El precio de las televisiones es de: " + precioTelevisiones);
    }
}
