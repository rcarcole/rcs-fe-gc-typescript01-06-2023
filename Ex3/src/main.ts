const electrodomestico1 = new Electrodomesticos();
const electrodomestico2 = new Electrodomesticos(200, "Negro", "C", 10);

console.log(electrodomestico1.getPrecioBase());
console.log(electrodomestico1.getColor());
console.log(electrodomestico1.getConsumoEnergetico());
console.log(electrodomestico1.getPeso());
console.log(electrodomestico1.precioFinal());

console.log(electrodomestico2.getPrecioBase());
console.log(electrodomestico2.getColor());
console.log(electrodomestico2.getConsumoEnergetico());
console.log(electrodomestico2.getPeso());
console.log(electrodomestico2.precioFinal());