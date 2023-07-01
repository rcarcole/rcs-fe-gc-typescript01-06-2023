const electrodomestico1 = new Electrodomesticos();
const electrodomestico2 = new Electrodomesticos(200, "Negro", "C", 10);
const lavadora = new Lavadora();
const television = new Television();
const app = new mainApp();

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

console.log('Carga:', lavadora.getCarga());
console.log('Precio final:', lavadora.precioFinal());

console.log('Resolución:', television.getResolucion());
console.log('Definición:', television.getDefinicion());
console.log('Precio final:', television.precioFinal());

app.mostrarPrecios();