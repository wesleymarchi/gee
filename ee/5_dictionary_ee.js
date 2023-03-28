/* CRIANDO UM DICIONÁRIO COM EE.DICTIONARY() */

var dictionary = ee.Dictionary({
    e: Math.E, // // número de Euler
    pi: Math.PI, // PI
    phi: (1 + Math.sqrt(5)) / 2 // proporção aurea
});

print('Euler: ', dictionary.get('e'));
print('PI: ', dictionary.get('pi'));
print('Proporção Áurea: ', dictionary.get('phi'));

// Obtém todos os dados do dicionário
print('Keys: ', dictionary.keys());