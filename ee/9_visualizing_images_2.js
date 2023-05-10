/* PERSONALIZAÇÃO DA VISUALIZAÇÃO */

// Instancia uma imagem com o construtor Image()
var image = ee.Image('CGIAR/SRTM90_V4');

Map.setCenter(-112.8598, 36.2841, 9); // Centraliza o map no Grand Canyon.
Map.addLayer(image, {min: 0, max: 3000}, 'Visualização Personalizada'); // Exibe a imagem no map

print('SRTM image', image);