/* Estrutura Switch */

var pi = 3.14; // Declaração de uma constante.
var firstName = 'Rorschach'

switch (pi) {
    case 4.14:
        print('PI não esta aqui.');
    case 3.14:
        print('PI encontrado.');
        break;
    case '3.14':
        print('PI encontrado.');
        break;
    default:
        print('Nenhum item equivale a PI.');
}

// Outro exemplo
switch (firstName) {
    case 'Batman':
        print('Bruce');
    case 'Iron man':
        print('Tony');
    default:
        print(firstName + ' não foi encontrado.');
}

print(pi);