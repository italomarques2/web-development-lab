export const somar = (a, b) => a + b;
export const subtrair = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;

export function dividir(a, b) {
  if (b === 0) {
    throw new RangeError("Não é possível dividir por zero.");
  }
  return a / b;
}

// A operação é recebida, não executada antecipadamente pelo chamador.
// A validação dos argumentos e do retorno pertence a esta função de entrada.
export function calcular(a, b, operacao) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError("Informe dois números finitos.");
  }
  if (typeof operacao !== "function") {
    throw new TypeError("A operação precisa ser uma função.");
  }

  const resultado = operacao(a, b);
  if (!Number.isFinite(resultado)) {
    throw new RangeError("A operação precisa retornar um número finito.");
  }
  return resultado;
}
