/* Estatística de Image */

var srtm = ee.Image('CGIAR/SRTM90_V4');

// Obtém o aspecto em graus
var aspect = ee.Terrain.aspect(srtm);

// Converte para radianos e calcula o sin()
var sinImage = aspect.divide(180).multiply(Math.PI).sin();

Map.setCenter(-112.8598, 36.2841, 9);
Map.addLayer(sinImage, {min: -1, max: 1}, 'Algebra de Mapas');

// Calcula a elevação média do polígono
var meanDict = srtm.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: polygon,
    scale: 90
});

// Obtém a média do dicionário
var mean = meanDict.get('elevation');
print('Elevação média', mean);