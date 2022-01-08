var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_dataklinik_0 = new ol.format.GeoJSON();
var features_dataklinik_0 = format_dataklinik_0.readFeatures(json_dataklinik_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataklinik_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_dataklinik_0.addFeatures(features_dataklinik_0);var lyr_dataklinik_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dataklinik_0, 
                style: style_dataklinik_0,
    title: 'data klinik<br />\
    <img src="styles/legend/dataklinik_0_0.png" />  (3 - 37 ) Rendah<br />\
    <img src="styles/legend/dataklinik_0_1.png" /> ( 37 - 72 ) Sedang<br />\
    <img src="styles/legend/dataklinik_0_2.png" />  (72 - 106 ) Tinggi<br />'
        });

lyr_dataklinik_0.setVisible(true);
var layersList = [baseLayer,lyr_dataklinik_0];
lyr_dataklinik_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Klinik': 'Klinik', });
lyr_dataklinik_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Klinik': 'TextEdit', });
lyr_dataklinik_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Klinik': 'inline label', });
lyr_dataklinik_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});