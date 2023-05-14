/* ORDENANDO IMAGENS COM POUCAS NUVENS */

// Obtém uma coleção do Landsat-8
var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA');

// Filtra a coleção por espaço
var spatialFiltered = l8.filterBounds(point);
print('Filtro Espacial', spatialFiltered);

// Filtra a coleção por tempo
var temporalFiltered = spatialFiltered.filterDate('2023-01-01', '2023-05-10');
print('Filtro Temporal', temporalFiltered);

// Classificando do menos nublado para o mais nublado
var sorted = temporalFiltered.sort('CLOUD_COVER');

// Obtem a primeira imagem na nova coleção (sorted)
var scene = sorted.first();

Map.centerObject(scene, 9);
//Map.addLayer(scene, {}, 'Default'); // Ao deixar o EE definir as bandas padrão

var visParams = {bands: ['B4', 'B3', 'B2'], max: 0.3};
Map.addLayer(scene, visParams, 'True Color');