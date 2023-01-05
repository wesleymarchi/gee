/* FUNÇÕES */

/**
 * Retorna o quadrado de um número.
 *
 * @param num
 * @returns {number}
 */
function square(num) { // Inicio do bloco de código da função.
    return num * num;
} // Fim do bloco de código da função.

/**
 * Retorna a área de um retângulo.
 *
 * @param width
 * @param height
 * @returns {number}
 */
function calcArea(width, height) {
    var area = width * height; // Variável de escopo.
    return area;
}

/**
 * Expressão de função que retorna a área de um retângulo.
 *
 * @param width
 * @param height
 * @returns {number}
 */
var calculateArea = function(width, height) {
    return width * height;
};

/**
 * Expressão de função chamada imediatamente (IIFE).
 *
 * @param width
 * @param height
 * @return {number}
 */
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