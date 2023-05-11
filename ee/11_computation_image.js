/* CALCULO COM IMAGEM */

var srtm = ee.Image('CGIAR/SRTM90_V4');

// Método de inclinação/declive
var slope = ee.Terrain.slope(srtm);

Map.setCenter(-112.8598, 36.2841, 9);
Map.addLayer(slope, {min: 0, max: 60}, 'Slope');