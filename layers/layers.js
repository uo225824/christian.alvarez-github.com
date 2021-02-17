var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Roma_seg_gisSheet1_1 = new ol.format.GeoJSON();
var features_Roma_seg_gisSheet1_1 = format_Roma_seg_gisSheet1_1.readFeatures(json_Roma_seg_gisSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roma_seg_gisSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roma_seg_gisSheet1_1.addFeatures(features_Roma_seg_gisSheet1_1);
var lyr_Roma_seg_gisSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roma_seg_gisSheet1_1, 
                style: style_Roma_seg_gisSheet1_1,
                interactive: true,
                title: '<img src="styles/legend/Roma_seg_gisSheet1_1.png" /> Roma_seg_gis-Sheet1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Roma_seg_gisSheet1_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Roma_seg_gisSheet1_1];
lyr_Roma_seg_gisSheet1_1.set('fieldAliases', {'Field1': 'Field1', 'name': 'name', 'zip_code': 'zip_code', });
lyr_Roma_seg_gisSheet1_1.set('fieldImages', {'Field1': 'TextEdit', 'name': 'TextEdit', 'zip_code': 'TextEdit', });
lyr_Roma_seg_gisSheet1_1.set('fieldLabels', {'Field1': 'no label', 'name': 'no label', 'zip_code': 'no label', });
lyr_Roma_seg_gisSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});