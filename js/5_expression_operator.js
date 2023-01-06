/* Expressões e Operadores */

var price = 10;
var qty = 3;
var total = price * qty;
var num = 100;
var street = 'JK';
var add = street + num; // Agora num é uma string em add.

print("Adição: ", 10 + 2);
print("Subtração: ", 10 - 2);
print("Divisão: ", 10 / 2);
print("Multiplicação: ", 10 * 2);

// Adiciona 1 ao valor atual.
print("Incremento: ", ++price); // pré-incremento.

// Subtrai 1 ao valor atual.
print("Decremento: ", --price); // pré-decremento.

// Adiciona 1 ao valor atual.
print("Incremento (pós-incremento): ", price++);

// Operador de string.
print("Uni as strings: ", add);
print("Hello " + "world!");

// Divide e retorna o resto da divisão.
print("Módulo: ", 10 % 3);

print("5 + 10 * 2 = ?", 5 + 10 * 2);
print("Total de uma compra: ", total);