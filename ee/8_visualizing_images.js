/* VISUALIZANDO IMAGENS E BANDAS DE IMAGENS */

// Instancia uma imagem com o construtor Image()
var image = ee.Image('CGIAR/SRTM90_V4');

Map.setCenter(-112.8598, 36.2841, 9); // Centraliza o map no Grand Canyon.
Map.addLayer(image); // Exibe a imagem no map

print('SRTM image', image);