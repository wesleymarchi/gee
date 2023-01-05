/* Condicionais, Operadores de Comparação e Operadores Lógicos. */

var x = 10;
var y = 7;
var z = 2;
var flag = true;
var pass = x >= y;
var str = '1';

// Instrução if
if (x > y) {
    print(x + " é maior que " + y);
}

if (x < y) {
    print(y + " é maior que " + x);
} else {
    print(x + " é maior que " + y);
}

if (flag) { // true.
    print(flag);
}

if ((x > y) && (x >= z)) {
    print(x + " é maior que " + y + " e maior ou igual a " + z);
} else {
    print(x + " não é maior que " + y + " e maior ou igual a " + z);
}

if ((x > y) || (x < z)) {
    print(x + " é maior que " + y + " ou x é menor que " + z);
}

if (!(x < y)) { // true (foi utilizado o operador lógico NOT)
    print("x é menor que y? ", x);
}

if (str == 1) {
    print(str);
}

print(pass); // true.
print(x < y); // false.
print(x > y); // true.
print(x >= y); // true.
print(x <= y); // false.
print(x !== y); // true.
print(str === '1'); // true.