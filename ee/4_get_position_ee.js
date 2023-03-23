/* ACESSANDO O INDICE DE UMA LISTA DO EE */

var serverList = ee.List([1, 2, 3, 4, 5]);
var sequence = ee.List.sequence(1, 5);
var value = sequence.get(0); // Extrai o valor da posição 0

print('List JS: ', serverList);
print('Sequence: ', sequence);
print('Acessando um item da lista: ', value);