/* Funções e Métodos */

// FUNÇÃO QUE RETORNA O QUADRADO DE UM NÚMERO.
function square(num) { // Inicio do bloco de código da função
    return num * num;
} // Fim do bloco de código da função.

// FUNÇÃO QUE RETORNA A ÁREA DE UM RETÂNGULO
function calcArea(width, height) {
    var area = width * height; // Variável de escopo.
    return area;
}

// EXPRESSÃO DE FUNÇÃO QUE RETORNA A ÁREA DE UM RETÂNGULO.
var calculateArea = function(width, height) {
    return width * height;
};

// EXPRESSÃO DE FUNÇÃO CHAMADA IMEDIATAMENTE
var calculateAreaNow = (function() {
    var width = 2;
    var height = 3;
    return width * height;
}());

var x = 2;
var y = 3;
var area = calcArea(x, y);

print("Quadrado de 2: ", square(2));

// Utilizando a mesma função com argumentos definidos através de variáveis.
print("Quadrado de " + x + ": ", square(x));
print("Quadrado de " + y + ": ", square(y));

// Exibe a área de x e y.
print("FUNÇÃO NOMEADA - Área de " + x + " e " + y + ": ", area);
print("EXPRESSÃO DE FUNÇÃO - Área de " + x + " e " + y + ": ", calculateArea(x, y));
print("IIFE - Área de " + x + " e " + y + ": ", calculateAreaNow);