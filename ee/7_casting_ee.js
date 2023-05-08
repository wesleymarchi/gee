/* CASTING */

var serverList = ee.List([1, 2, 3, 4, 5]);
var sequence = ee.List.sequence(1, 5);
var value = sequence.get(0); // Extrai o valor da posição 0

print('Literal list: ', serverList);
print('Sequence: ', sequence);
print('Acessando um item da lista: ', value);

print('Casting: ', ee.Number(value).add(3)); // Soma 3 ao valor atual
print('Erro: ', value.add(3)); // Gera um erro