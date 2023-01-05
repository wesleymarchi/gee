/* OBJETOS */

// CRIANDO UM OBJETO COM A NOTAÇÃO LITERAL.
var book = {}; // Objeto vazio/em branco.
var car = {
    brand: 'Volkswagen',
    model: 'Fusca',
    year: 1939,
    tankSize: 14, // Liters
    gasStatus: 10, // Liters
    checkGas: function() {
        return this.gasStatus;
    }
};

// CRIANDO UM OBJETO COM A NOTAÇÃO CONSTRUTOR.
var motorcycle = new Object(); // Instância um objeto em branco.
motorcycle.brand = 'Honda';
motorcycle.model = 'CB 1000R';
motorcycle.year = 2021;

// ATUALIZANDO UM OBJETO.
motorcycle['year'] = 2020;

// LIMPANDO UMA PROPRIEDADE E DELETANDO UMA PROPRIEDADE
motorcycle.brand = '';
motorcycle.brand;

// ACESSANDO OBJETO COM NOTAÇÃO DE PONTO E COLCHETES
var carModel = car.model; // Notação de ponto.
var carGasStatus = car.checkGas();

print("Modelo: ", carModel);
print("Status de combustivel: ", carGasStatus);
print("Modelo da moto: ", motorcycle['model']); // Colchetes.
print("Ano da moto: ", motorcycle['year']);