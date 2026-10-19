import test from "node:test";
import assert from "node:assert/strict";
import { calcular, somar, subtrair, multiplicar, dividir } from "./calculadora.js";

test("executa as quatro operações por meio de callbacks", () => {
  assert.equal(calcular(12, 3, somar), 15);
  assert.equal(calcular(12, 3, subtrair), 9);
  assert.equal(calcular(12, 3, multiplicar), 36);
  assert.equal(calcular(12, 3, dividir), 4);
});

test("aceita zero, negativos e números decimais", () => {
  assert.equal(calcular(0, -4, somar), -4);
  assert.equal(calcular(1.5, 2, multiplicar), 3);
});

test("permite uma operação nova sem modificar calcular", () => {
  let chamadas = 0;
  const maior = (a, b) => {
    chamadas += 1;
    assert.deepEqual([a, b], [7, 2]);
    return Math.max(a, b);
  };
  assert.equal(calcular(7, 2, maior), 7);
  assert.equal(chamadas, 1);
});

test("recusa divisão por zero", () => {
  assert.throws(() => calcular(12, 0, dividir), RangeError);
});

test("recusa entradas não numéricas ou não finitas em ambas as posições", () => {
  for (const valor of ["12", null, undefined, NaN, Infinity, -Infinity]) {
    assert.throws(() => calcular(valor, 3, somar), TypeError);
    assert.throws(() => calcular(3, valor, somar), TypeError);
  }
});

test("distingue passar uma função de passar o resultado da chamada", () => {
  assert.throws(() => calcular(12, 3, somar(12, 3)), TypeError);
});

test("recusa retorno inválido e resultado que excede o limite numérico", () => {
  assert.throws(() => calcular(1, 2, () => "3"), RangeError);
  assert.throws(() => calcular(Number.MAX_VALUE, 2, multiplicar), RangeError);
});
