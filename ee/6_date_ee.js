/* UTILIZANDO DATAS COM EE.DATE() */
var dateServer = ee.Date('2023-01-31');
print('Server date: ', dateServer);

// Obtém a data atual com o objeto JS
var dateClient = Date.now();
print('Milissegundos desde 1 de janeiro de 1970: ', dateClient);

// Instanciando um objeto ee.Date
var eeDate = ee.Date(dateClient);
print('Date now: ', eeDate);