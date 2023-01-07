/* Loops */

var arr = [];
var k = 0;

// Insere uma sequência de valores em um array.
for (var i = 0; i < 10; i++) {
    arr[i] = i;
    if (i === 5) {
        continue; // Faz a estrutura funcionar naturalmente, ao contrário de break.
    }
}

// Exibe uma sequência de 0 a 9.
while (k < 10) {
    print("\nUtilizando a estrutura while: ", k); // \n é uma quebra de linha.
    k++;
}

// Exibe apenas um valor do array criado.
do {
    print(arr[--k]);
    k++;
} while (k < 1);

print('Lista utilizando a estrutura for: ', arr);
