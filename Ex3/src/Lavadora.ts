// Crearemos una subclase llamada Lavadora con las siguientes características:
// ● Su atributo es carga, además de los atributos heredados.
// ● Por defecto, la carga es de 5 kg. Usa una constante para ello.
// Recuerda que debes llamar al constructor de la clase padre.
// Los métodos que se implementara serán:
// ● Método get de carga.
// ● precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así
// no se incrementara el precio. Llama al método padre y añade el código necesario.
// Recuerda que las condiciones que hemos visto en la clase Electrodomestico también
// deben afectar al precio.

class Lavadora extends Electrodomesticos {
    static readonly CARGA_POR_DEFECTO: number = 5;
    private carga: number;

    constructor (carga: number = Lavadora.CARGA_POR_DEFECTO, precioBase: number = Electrodomesticos.PRECIO_BASE,
        color: string = Electrodomesticos.COLOR_BLANCO,
        consumoEnergetico: string = Electrodomesticos.CONSUMO_ENERGETICO_F,
        peso: number = Electrodomesticos.PESO){
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    // Getter
    getCarga(): number {
        return this.carga;
    }

    precioFinal(): number {
        if (this.carga >= 30) {
            this.consumoEnergetico = "D";
        }
        return super.precioFinal();
    }
}