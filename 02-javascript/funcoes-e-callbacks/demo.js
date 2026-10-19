import { calcular, somar, subtrair, multiplicar, dividir } from "./calculadora.js";

console.log("A função calcular recebe a operação como argumento:");
for (const operacao of [somar, subtrair, multiplicar, dividir]) {
  console.log(`${operacao.name}(12, 3) = ${calcular(12, 3, operacao)}`);
}

console.log("Callback definido no momento da chamada:");
console.log("Maior entre 12 e 3:", calcular(12, 3, (a, b) => Math.max(a, b)));

const minutos = [15, 30, 45];
const horas = minutos.map((valor) => valor / 60);
console.log("Minutos originais:", minutos);
console.log("Horas calculadas com map:", horas);

try {
  calcular(12, 0, dividir);
} catch (erro) {
  console.log("Erro esperado:", erro.message);
}
