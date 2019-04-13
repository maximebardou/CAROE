var wms_layers = [];
var format_CARO_0 = new ol.format.GeoJSON();
var features_CARO_0 = format_CARO_0.readFeatures(json_CARO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARO_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CARO_0.addFeatures(features_CARO_0);var lyr_CARO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARO_0, 
                style: style_CARO_0,
                title: '<img src="styles/legend/CARO_0.png" /> CARO'
            });

lyr_CARO_0.setVisible(true);
var layersList = [lyr_CARO_0];
lyr_CARO_0.set('fieldAliases', {'NOM': 'NOM', });
lyr_CARO_0.set('fieldImages', {'NOM': 'TextEdit', });
lyr_CARO_0.set('fieldLabels', {'NOM': 'no label', });
lyr_CARO_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});