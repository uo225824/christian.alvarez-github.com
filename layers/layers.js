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
var format_Milano_seg_gisSheet1_1 = new ol.format.GeoJSON();
var features_Milano_seg_gisSheet1_1 = format_Milano_seg_gisSheet1_1.readFeatures(json_Milano_seg_gisSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Milano_seg_gisSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Milano_seg_gisSheet1_1.addFeatures(features_Milano_seg_gisSheet1_1);
var lyr_Milano_seg_gisSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Milano_seg_gisSheet1_1, 
                style: style_Milano_seg_gisSheet1_1,
                interactive: true,
                title: '<img src="styles/legend/Milano_seg_gisSheet1_1.png" /> Milano_seg_gis-Sheet1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Milano_seg_gisSheet1_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Milano_seg_gisSheet1_1];
lyr_Milano_seg_gisSheet1_1.set('fieldAliases', {'Field1': 'Field1', 'name': 'name', });
lyr_Milano_seg_gisSheet1_1.set('fieldImages', {'Field1': 'TextEdit', 'name': 'TextEdit', });
lyr_Milano_seg_gisSheet1_1.set('fieldLabels', {'Field1': 'no label', 'name': 'no label', });
lyr_Milano_seg_gisSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});