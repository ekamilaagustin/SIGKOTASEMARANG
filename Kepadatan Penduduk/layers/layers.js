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
var format_kepadatanpenduduk_0 = new ol.format.GeoJSON();
var features_kepadatanpenduduk_0 = format_kepadatanpenduduk_0.readFeatures(json_kepadatanpenduduk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kepadatanpenduduk_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kepadatanpenduduk_0.addFeatures(features_kepadatanpenduduk_0);var lyr_kepadatanpenduduk_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kepadatanpenduduk_0, 
                style: style_kepadatanpenduduk_0,
    title: 'kepadatan penduduk<br />\
    <img src="styles/legend/kepadatanpenduduk_0_0.png" />  (1033 - 4535) Rendah<br />\
    <img src="styles/legend/kepadatanpenduduk_0_1.png" />  (4535 - 8036 ) Sedang<br />\
    <img src="styles/legend/kepadatanpenduduk_0_2.png" />  (8036 - 11538 ) Tinggi<br />'
        });

lyr_kepadatanpenduduk_0.setVisible(true);
var layersList = [baseLayer,lyr_kepadatanpenduduk_0];
lyr_kepadatanpenduduk_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Kepadatan': 'Kepadatan', });
lyr_kepadatanpenduduk_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Kepadatan': 'TextEdit', });
lyr_kepadatanpenduduk_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Kepadatan': 'inline label', });
lyr_kepadatanpenduduk_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});