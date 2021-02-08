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
var format_df_gisSheet1_1 = new ol.format.GeoJSON();
var features_df_gisSheet1_1 = format_df_gisSheet1_1.readFeatures(json_df_gisSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_df_gisSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_df_gisSheet1_1.addFeatures(features_df_gisSheet1_1);
var lyr_df_gisSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_df_gisSheet1_1, 
                style: style_df_gisSheet1_1,
                interactive: true,
    title: 'df_gis-Sheet1<br />\
    <img src="styles/legend/df_gisSheet1_1_0.png" /> F_barrio<br />\
    <img src="styles/legend/df_gisSheet1_1_1.png" /> F_paso<br />\
    <img src="styles/legend/df_gisSheet1_1_2.png" /> F_residencial<br />\
    <img src="styles/legend/df_gisSheet1_1_3.png" /> F_rural<br />\
    <img src="styles/legend/df_gisSheet1_1_4.png" /> F_turismo<br />\
    <img src="styles/legend/df_gisSheet1_1_5.png" /> F_ubicacion_especial<br />\
    <img src="styles/legend/df_gisSheet1_1_6.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_df_gisSheet1_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_df_gisSheet1_1];
lyr_df_gisSheet1_1.set('fieldAliases', {'Field1': 'Field1', 'segmentation_parcial': 'segmentation_parcial', 'calle_principal': 'calle_principal', });
lyr_df_gisSheet1_1.set('fieldImages', {'Field1': 'TextEdit', 'segmentation_parcial': 'TextEdit', 'calle_principal': 'TextEdit', });
lyr_df_gisSheet1_1.set('fieldLabels', {'Field1': 'no label', 'segmentation_parcial': 'no label', 'calle_principal': 'no label', });
lyr_df_gisSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});