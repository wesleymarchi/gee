/* UTILIZANDO EE.LIST() para gerar um objeto lista do EE */

// Duas formas de instanciar um objeto lista do EE
var serverList = ee.List([1, 2, 3, 4, 5]);

// Gerando uma sequência a partir do método sequence() do EE
var sequence = ee.List.sequence(1, 5);

print('Literal list: ', serverList);
print('Sequence: ', sequence);