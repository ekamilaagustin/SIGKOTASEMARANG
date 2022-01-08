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
var format_Dataagama_0 = new ol.format.GeoJSON();
var features_Dataagama_0 = format_Dataagama_0.readFeatures(json_Dataagama_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dataagama_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Dataagama_0.addFeatures(features_Dataagama_0);var lyr_Dataagama_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dataagama_0, 
                style: style_Dataagama_0,
    title: 'Data agama<br />\
    <img src="styles/legend/Dataagama_0_0.png" />  (33026 - 77740) Rendah<br />\
    <img src="styles/legend/Dataagama_0_1.png" /> ( 77740 - 122453 ) Sedang<br />\
    <img src="styles/legend/Dataagama_0_2.png" />  (122453 - 167167 ) Tinggi<br />'
        });

lyr_Dataagama_0.setVisible(true);
var layersList = [baseLayer,lyr_Dataagama_0];
lyr_Dataagama_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Islam': 'Islam', });
lyr_Dataagama_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Islam': 'TextEdit', });
lyr_Dataagama_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Islam': 'inline label', });
lyr_Dataagama_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});