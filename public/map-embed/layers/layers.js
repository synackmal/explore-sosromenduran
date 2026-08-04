var wms_layers = [];


        var lyr_MapzenGlobalTerrain_0 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kampung_2 = new ol.format.GeoJSON();
var features_Kampung_2 = format_Kampung_2.readFeatures(json_Kampung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kampung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kampung_2.addFeatures(features_Kampung_2);
var lyr_Kampung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kampung_2, 
                style: style_Kampung_2,
                popuplayertitle: 'Kampung',
                interactive: true,
                title: '<img src="styles/legend/Kampung_2.png" /> Kampung'
            });
var format_Fasum_3 = new ol.format.GeoJSON();
var features_Fasum_3 = format_Fasum_3.readFeatures(json_Fasum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasum_3.addFeatures(features_Fasum_3);
var lyr_Fasum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasum_3, 
                style: style_Fasum_3,
                popuplayertitle: 'Fasum',
                interactive: true,
                title: '<img src="styles/legend/Fasum_3.png" /> Fasum'
            });
var format_Tempat_Ibadah_4 = new ol.format.GeoJSON();
var features_Tempat_Ibadah_4 = format_Tempat_Ibadah_4.readFeatures(json_Tempat_Ibadah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempat_Ibadah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempat_Ibadah_4.addFeatures(features_Tempat_Ibadah_4);
var lyr_Tempat_Ibadah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempat_Ibadah_4, 
                style: style_Tempat_Ibadah_4,
                popuplayertitle: 'Tempat_Ibadah',
                interactive: true,
    title: 'Tempat_Ibadah<br />\
    <img src="styles/legend/Tempat_Ibadah_4_0.png" /> Gereja<br />\
    <img src="styles/legend/Tempat_Ibadah_4_1.png" /> Masjid<br />\
    <img src="styles/legend/Tempat_Ibadah_4_2.png" /> <br />' });
var format_Transportasi_5 = new ol.format.GeoJSON();
var features_Transportasi_5 = format_Transportasi_5.readFeatures(json_Transportasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_5.addFeatures(features_Transportasi_5);
var lyr_Transportasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transportasi_5, 
                style: style_Transportasi_5,
                popuplayertitle: 'Transportasi',
                interactive: true,
    title: 'Transportasi<br />\
    <img src="styles/legend/Transportasi_5_0.png" /> Halte<br />\
    <img src="styles/legend/Transportasi_5_1.png" /> Parkiran<br />\
    <img src="styles/legend/Transportasi_5_2.png" /> Sewa kendaraan<br />\
    <img src="styles/legend/Transportasi_5_3.png" /> Stasiun<br />\
    <img src="styles/legend/Transportasi_5_4.png" /> <br />' });
var format_Wisata_6 = new ol.format.GeoJSON();
var features_Wisata_6 = format_Wisata_6.readFeatures(json_Wisata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wisata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisata_6.addFeatures(features_Wisata_6);
var lyr_Wisata_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wisata_6, 
                style: style_Wisata_6,
                popuplayertitle: 'Wisata',
                interactive: true,
    title: 'Wisata<br />\
    <img src="styles/legend/Wisata_6_0.png" /> Jasa<br />\
    <img src="styles/legend/Wisata_6_1.png" /> Kesenian<br />\
    <img src="styles/legend/Wisata_6_2.png" /> Kuliner<br />\
    <img src="styles/legend/Wisata_6_3.png" /> Oleh-oleh<br />\
    <img src="styles/legend/Wisata_6_4.png" /> Situs Budaya<br />\
    <img src="styles/legend/Wisata_6_5.png" /> Toko<br />\
    <img src="styles/legend/Wisata_6_6.png" /> <br />' });

lyr_MapzenGlobalTerrain_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Kampung_2.setVisible(true);lyr_Fasum_3.setVisible(true);lyr_Tempat_Ibadah_4.setVisible(true);lyr_Transportasi_5.setVisible(true);lyr_Wisata_6.setVisible(true);
var layersList = [lyr_MapzenGlobalTerrain_0,lyr_OpenStreetMap_1,lyr_Kampung_2,lyr_Fasum_3,lyr_Tempat_Ibadah_4,lyr_Transportasi_5,lyr_Wisata_6];
lyr_Kampung_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kampung': 'Kampung', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Fasum_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Fasum': 'Fasum', 'Jenis': 'Jenis', });
lyr_Tempat_Ibadah_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tempat_Ibadah': 'Tempat_Ibadah', 'Jenis': 'Jenis', });
lyr_Transportasi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Transportasi': 'Transportasi', 'Jenis': 'Jenis', });
lyr_Wisata_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama': 'Wisata', 'Jenis': 'Jenis', 'Deskripsi': 'Deskripsi', });
lyr_Kampung_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kampung': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Fasum_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Fasum': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Tempat_Ibadah_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Tempat_Ibadah': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Transportasi_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Transportasi': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Wisata_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_Kampung_2.set('fieldLabels', {'OBJECTID': 'no label', 'Kampung': 'inline label - always visible', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Fasum_3.set('fieldLabels', {'OBJECTID': 'no label', 'Fasum': 'inline label - always visible', 'Jenis': 'no label', });
lyr_Tempat_Ibadah_4.set('fieldLabels', {'OBJECTID': 'no label', 'Tempat_Ibadah': 'inline label - always visible', 'Jenis': 'no label', });
lyr_Transportasi_5.set('fieldLabels', {'OBJECTID': 'no label', 'Transportasi': 'header label - always visible', 'Jenis': 'hidden field', });
lyr_Wisata_6.set('fieldLabels', {'OBJECTID': 'no label', 'Nama': 'header label - always visible', 'Jenis': 'hidden field', 'Deskripsi': 'header label - visible with data', });
lyr_Wisata_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});