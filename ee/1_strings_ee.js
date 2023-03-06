/* DEFINE UMA STRING E, EM SEGUIDA, INSERE A MESMA EM UM CONTAINER PARA O GOOGLE PROCESSAR */
var clientString = 'Google.';
var serverString = ee.String(clientString);

print('Fui ao ' + serverString + ' e voltei.');