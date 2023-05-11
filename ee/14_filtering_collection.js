/* COLEÇÔES DE IMAGENS */

// Obtém uma coleção do Landsat-8
var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA');

// Filtra a coleção por espaço
var spatialFiltered = l8.filterBounds(point);
print('Filtro Espacial', spatialFiltered);

// Filtra a coleção por tempo
var temporalFiltered = spatialFiltered.filterDate('2023-01-01', '2023-05-10');
print('Filtro Temporal', temporalFiltered);