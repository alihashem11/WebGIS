var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UAAha_3 = new ol.format.GeoJSON();
var features_UAAha_3 = format_UAAha_3.readFeatures(json_UAAha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAAha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAAha_3.addFeatures(features_UAAha_3);
var lyr_UAAha_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UAAha_3, 
                style: style_UAAha_3,
                interactive: true,
    title: 'UAA (ha)<br />\
    <img src="styles/legend/UAAha_3_0.png" /> 4000 - 40000<br />\
    <img src="styles/legend/UAAha_3_1.png" /> 40000 - 134000<br />\
    <img src="styles/legend/UAAha_3_2.png" /> 134000 - 188000<br />\
    <img src="styles/legend/UAAha_3_3.png" /> 188000 - 306000<br />\
    <img src="styles/legend/UAAha_3_4.png" /> 306000 - 413000<br />\
    <img src="styles/legend/UAAha_3_5.png" /> 413000 - 434000<br />\
    <img src="styles/legend/UAAha_3_6.png" /> 434000 - 555000<br />\
    <img src="styles/legend/UAAha_3_7.png" /> 555000 - 691000<br />\
    <img src="styles/legend/UAAha_3_8.png" /> 691000 - 1142000<br />\
    <img src="styles/legend/UAAha_3_9.png" /> 1142000 - 2033000<br />'
        });
var format_Plasticsupport_4 = new ol.format.GeoJSON();
var features_Plasticsupport_4 = format_Plasticsupport_4.readFeatures(json_Plasticsupport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plasticsupport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plasticsupport_4.addFeatures(features_Plasticsupport_4);
var lyr_Plasticsupport_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plasticsupport_4, 
                style: style_Plasticsupport_4,
                interactive: true,
    title: 'Plastic support<br />\
    <img src="styles/legend/Plasticsupport_4_0.png" /> 0 - 4<br />\
    <img src="styles/legend/Plasticsupport_4_1.png" /> 4 - 25<br />\
    <img src="styles/legend/Plasticsupport_4_2.png" /> 25 - 90<br />\
    <img src="styles/legend/Plasticsupport_4_3.png" /> 90 - 160<br />\
    <img src="styles/legend/Plasticsupport_4_4.png" /> 160 - 280<br />\
    <img src="styles/legend/Plasticsupport_4_5.png" /> 280 - 470<br />\
    <img src="styles/legend/Plasticsupport_4_6.png" /> 470 - 1630<br />'
        });
var format_Containers_5 = new ol.format.GeoJSON();
var features_Containers_5 = format_Containers_5.readFeatures(json_Containers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Containers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Containers_5.addFeatures(features_Containers_5);
var lyr_Containers_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Containers_5, 
                style: style_Containers_5,
                interactive: true,
    title: 'Containers<br />\
    <img src="styles/legend/Containers_5_0.png" /> 10 - 80<br />\
    <img src="styles/legend/Containers_5_1.png" /> 80 - 230<br />\
    <img src="styles/legend/Containers_5_2.png" /> 230 - 360<br />\
    <img src="styles/legend/Containers_5_3.png" /> 360 - 530<br />\
    <img src="styles/legend/Containers_5_4.png" /> 530 - 950<br />\
    <img src="styles/legend/Containers_5_5.png" /> 950 - 4370<br />'
        });
var format_Bags_6 = new ol.format.GeoJSON();
var features_Bags_6 = format_Bags_6.readFeatures(json_Bags_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bags_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bags_6.addFeatures(features_Bags_6);
var lyr_Bags_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bags_6, 
                style: style_Bags_6,
                interactive: true,
    title: 'Bags<br />\
    <img src="styles/legend/Bags_6_0.png" /> 0 - 200<br />\
    <img src="styles/legend/Bags_6_1.png" /> 200 - 500<br />\
    <img src="styles/legend/Bags_6_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Bags_6_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Bags_6_4.png" /> 1500 - 1900<br />\
    <img src="styles/legend/Bags_6_5.png" /> 1900 - 2700<br />\
    <img src="styles/legend/Bags_6_6.png" /> 2700 - 3800<br />\
    <img src="styles/legend/Bags_6_7.png" /> 3800 - 6100<br />\
    <img src="styles/legend/Bags_6_8.png" /> 6100 - 8900<br />'
        });
var format_Irrigationpipes_7 = new ol.format.GeoJSON();
var features_Irrigationpipes_7 = format_Irrigationpipes_7.readFeatures(json_Irrigationpipes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irrigationpipes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irrigationpipes_7.addFeatures(features_Irrigationpipes_7);
var lyr_Irrigationpipes_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Irrigationpipes_7, 
                style: style_Irrigationpipes_7,
                interactive: true,
    title: 'Irrigation pipes<br />\
    <img src="styles/legend/Irrigationpipes_7_0.png" /> 0 - 1000<br />\
    <img src="styles/legend/Irrigationpipes_7_1.png" /> 1000 - 2000<br />\
    <img src="styles/legend/Irrigationpipes_7_2.png" /> 2000 - 3000<br />\
    <img src="styles/legend/Irrigationpipes_7_3.png" /> 3000 - 5000<br />\
    <img src="styles/legend/Irrigationpipes_7_4.png" /> 5000 - 7000<br />\
    <img src="styles/legend/Irrigationpipes_7_5.png" /> 7000 - 10000<br />\
    <img src="styles/legend/Irrigationpipes_7_6.png" /> 10000 - 20000<br />\
    <img src="styles/legend/Irrigationpipes_7_7.png" /> 20000 - 85000<br />'
        });
var format_Hightunnels_8 = new ol.format.GeoJSON();
var features_Hightunnels_8 = format_Hightunnels_8.readFeatures(json_Hightunnels_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hightunnels_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hightunnels_8.addFeatures(features_Hightunnels_8);
var lyr_Hightunnels_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hightunnels_8, 
                style: style_Hightunnels_8,
                interactive: true,
    title: 'High tunnels<br />\
    <img src="styles/legend/Hightunnels_8_0.png" /> 0 - 169<br />\
    <img src="styles/legend/Hightunnels_8_1.png" /> 169 - 338<br />\
    <img src="styles/legend/Hightunnels_8_2.png" /> 338 - 507<br />\
    <img src="styles/legend/Hightunnels_8_3.png" /> 507 - 676<br />\
    <img src="styles/legend/Hightunnels_8_4.png" /> 676 - 846<br />'
        });
var format_Lowtunnels_9 = new ol.format.GeoJSON();
var features_Lowtunnels_9 = format_Lowtunnels_9.readFeatures(json_Lowtunnels_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lowtunnels_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowtunnels_9.addFeatures(features_Lowtunnels_9);
var lyr_Lowtunnels_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lowtunnels_9, 
                style: style_Lowtunnels_9,
                interactive: true,
    title: 'Low tunnels<br />\
    <img src="styles/legend/Lowtunnels_9_0.png" /> 0<br />\
    <img src="styles/legend/Lowtunnels_9_1.png" /> 0 - 41<br />\
    <img src="styles/legend/Lowtunnels_9_2.png" /> 41 - 183<br />\
    <img src="styles/legend/Lowtunnels_9_3.png" /> 183 - 791<br />\
    <img src="styles/legend/Lowtunnels_9_4.png" /> 791 - 1699<br />\
    <img src="styles/legend/Lowtunnels_9_5.png" /> 1699 - 36979<br />'
        });
var format_Nets_10 = new ol.format.GeoJSON();
var features_Nets_10 = format_Nets_10.readFeatures(json_Nets_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nets_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nets_10.addFeatures(features_Nets_10);
var lyr_Nets_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nets_10, 
                style: style_Nets_10,
                interactive: true,
    title: 'Nets<br />\
    <img src="styles/legend/Nets_10_0.png" /> 0 - 200<br />\
    <img src="styles/legend/Nets_10_1.png" /> 200 - 1700<br />\
    <img src="styles/legend/Nets_10_2.png" /> 1700 - 3100<br />\
    <img src="styles/legend/Nets_10_3.png" /> 3100 - 5200<br />\
    <img src="styles/legend/Nets_10_4.png" /> 5200 - 13500<br />\
    <img src="styles/legend/Nets_10_5.png" /> 13500 - 16600<br />\
    <img src="styles/legend/Nets_10_6.png" /> 16600 - 35300<br />\
    <img src="styles/legend/Nets_10_7.png" /> 35300 - 148200<br />'
        });
var format_Mulchingfilms_11 = new ol.format.GeoJSON();
var features_Mulchingfilms_11 = format_Mulchingfilms_11.readFeatures(json_Mulchingfilms_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mulchingfilms_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mulchingfilms_11.addFeatures(features_Mulchingfilms_11);
var lyr_Mulchingfilms_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mulchingfilms_11, 
                style: style_Mulchingfilms_11,
                interactive: true,
    title: 'Mulching films<br />\
    <img src="styles/legend/Mulchingfilms_11_0.png" /> 0<br />\
    <img src="styles/legend/Mulchingfilms_11_1.png" /> 0 - 30<br />\
    <img src="styles/legend/Mulchingfilms_11_2.png" /> 30 - 67<br />\
    <img src="styles/legend/Mulchingfilms_11_3.png" /> 67 - 122<br />\
    <img src="styles/legend/Mulchingfilms_11_4.png" /> 122 - 239<br />\
    <img src="styles/legend/Mulchingfilms_11_5.png" /> 239 - 554<br />\
    <img src="styles/legend/Mulchingfilms_11_6.png" /> 554 - 1907<br />\
    <img src="styles/legend/Mulchingfilms_11_7.png" /> 1907 - 17082<br />'
        });
var format_Coveringfilms_12 = new ol.format.GeoJSON();
var features_Coveringfilms_12 = format_Coveringfilms_12.readFeatures(json_Coveringfilms_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coveringfilms_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coveringfilms_12.addFeatures(features_Coveringfilms_12);
var lyr_Coveringfilms_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coveringfilms_12, 
                style: style_Coveringfilms_12,
                interactive: true,
    title: 'Covering films<br />\
    <img src="styles/legend/Coveringfilms_12_0.png" /> 0 - 50<br />\
    <img src="styles/legend/Coveringfilms_12_1.png" /> 50 - 120<br />\
    <img src="styles/legend/Coveringfilms_12_2.png" /> 120 - 250<br />\
    <img src="styles/legend/Coveringfilms_12_3.png" /> 250 - 1140<br />\
    <img src="styles/legend/Coveringfilms_12_4.png" /> 1140 - 1820<br />\
    <img src="styles/legend/Coveringfilms_12_5.png" /> 1820 - 6530<br />\
    <img src="styles/legend/Coveringfilms_12_6.png" /> 6530 - 28800<br />\
    <img src="styles/legend/Coveringfilms_12_7.png" /> 28800 - 116710<br />\
    <img src="styles/legend/Coveringfilms_12_8.png" /> 116710 - 565570<br />'
        });
var format_TotalAPWTonsyr_13 = new ol.format.GeoJSON();
var features_TotalAPWTonsyr_13 = format_TotalAPWTonsyr_13.readFeatures(json_TotalAPWTonsyr_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalAPWTonsyr_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalAPWTonsyr_13.addFeatures(features_TotalAPWTonsyr_13);
var lyr_TotalAPWTonsyr_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalAPWTonsyr_13, 
                style: style_TotalAPWTonsyr_13,
                interactive: true,
    title: 'Total APW (Tons/yr)<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_0.png" /> 300 - 600<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_1.png" /> 600 - 4900<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_2.png" /> 4900 - 5600<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_3.png" /> 5600 - 7900<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_4.png" /> 7900 - 11500<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_5.png" /> 11500 - 21400<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_6.png" /> 21400 - 30100<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_7.png" /> 30100 - 38500<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_8.png" /> 38500 - 101500<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_9.png" /> 101500 - 191200<br />\
    <img src="styles/legend/TotalAPWTonsyr_13_10.png" /> 191200 - 826700<br />'
        });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_ESRIGraylight_2.setVisible(true);lyr_UAAha_3.setVisible(false);lyr_Plasticsupport_4.setVisible(false);lyr_Containers_5.setVisible(false);lyr_Bags_6.setVisible(false);lyr_Irrigationpipes_7.setVisible(false);lyr_Hightunnels_8.setVisible(false);lyr_Lowtunnels_9.setVisible(false);lyr_Nets_10.setVisible(false);lyr_Mulchingfilms_11.setVisible(false);lyr_Coveringfilms_12.setVisible(false);lyr_TotalAPWTonsyr_13.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_ESRIGraylight_2,lyr_UAAha_3,lyr_Plasticsupport_4,lyr_Containers_5,lyr_Bags_6,lyr_Irrigationpipes_7,lyr_Hightunnels_8,lyr_Lowtunnels_9,lyr_Nets_10,lyr_Mulchingfilms_11,lyr_Coveringfilms_12,lyr_TotalAPWTonsyr_13];
lyr_UAAha_3.set('fieldAliases', {'Region': 'Region', 'UAA (ha)': 'UAA (ha)', });
lyr_Plasticsupport_4.set('fieldAliases', {'Region': 'Region', 'Plastic support (Tons/yr)': 'Plastic support (Tons/yr)', });
lyr_Containers_5.set('fieldAliases', {'Region': 'Region', 'Containers (Tons/yr)': 'Containers (Tons/yr)', });
lyr_Bags_6.set('fieldAliases', {'Region': 'Region', 'Bags (Tons/yr)': 'Bags (Tons/yr)', });
lyr_Irrigationpipes_7.set('fieldAliases', {'Region': 'Region', 'Irrigation pipes (Tons/yr)': 'Irrigation pipes (Tons/yr)', });
lyr_Hightunnels_8.set('fieldAliases', {'Region': 'Region', 'High Tunnels (Tons/yr)': 'High Tunnels (Tons/yr)', });
lyr_Lowtunnels_9.set('fieldAliases', {'Region': 'Region', 'Low tunnels (Tons/yr)': 'Low tunnels (Tons/yr)', });
lyr_Nets_10.set('fieldAliases', {'Region': 'Region', 'Nets (Tons/yr)': 'Nets (Tons/yr)', });
lyr_Mulchingfilms_11.set('fieldAliases', {'Region': 'Region', 'Mulching films (Tons/yr)': 'Mulching films (Tons/yr)', });
lyr_Coveringfilms_12.set('fieldAliases', {'Region': 'Region', 'Covering films (Tons/yr)': 'Covering films (Tons/yr)', });
lyr_TotalAPWTonsyr_13.set('fieldAliases', {'Region': 'Region', 'Total APW (Tons/yr)': 'Total APW (Tons/yr)', });
lyr_UAAha_3.set('fieldImages', {'Region': 'TextEdit', 'UAA (ha)': 'TextEdit', });
lyr_Plasticsupport_4.set('fieldImages', {'Region': 'TextEdit', 'Plastic support (Tons/yr)': 'TextEdit', });
lyr_Containers_5.set('fieldImages', {'Region': 'TextEdit', 'Containers (Tons/yr)': 'TextEdit', });
lyr_Bags_6.set('fieldImages', {'Region': 'TextEdit', 'Bags (Tons/yr)': 'TextEdit', });
lyr_Irrigationpipes_7.set('fieldImages', {'Region': 'TextEdit', 'Irrigation pipes (Tons/yr)': 'TextEdit', });
lyr_Hightunnels_8.set('fieldImages', {'Region': 'TextEdit', 'High Tunnels (Tons/yr)': 'TextEdit', });
lyr_Lowtunnels_9.set('fieldImages', {'Region': 'TextEdit', 'Low tunnels (Tons/yr)': 'TextEdit', });
lyr_Nets_10.set('fieldImages', {'Region': 'TextEdit', 'Nets (Tons/yr)': 'TextEdit', });
lyr_Mulchingfilms_11.set('fieldImages', {'Region': 'TextEdit', 'Mulching films (Tons/yr)': 'TextEdit', });
lyr_Coveringfilms_12.set('fieldImages', {'Region': 'TextEdit', 'Covering films (Tons/yr)': 'TextEdit', });
lyr_TotalAPWTonsyr_13.set('fieldImages', {'Region': 'TextEdit', 'Total APW (Tons/yr)': 'TextEdit', });
lyr_UAAha_3.set('fieldLabels', {'Region': 'header label', 'UAA (ha)': 'header label', });
lyr_Plasticsupport_4.set('fieldLabels', {'Region': 'header label', 'Plastic support (Tons/yr)': 'header label', });
lyr_Containers_5.set('fieldLabels', {'Region': 'header label', 'Containers (Tons/yr)': 'header label', });
lyr_Bags_6.set('fieldLabels', {'Region': 'header label', 'Bags (Tons/yr)': 'header label', });
lyr_Irrigationpipes_7.set('fieldLabels', {'Region': 'header label', 'Irrigation pipes (Tons/yr)': 'header label', });
lyr_Hightunnels_8.set('fieldLabels', {'Region': 'header label', 'High Tunnels (Tons/yr)': 'header label', });
lyr_Lowtunnels_9.set('fieldLabels', {'Region': 'header label', 'Low tunnels (Tons/yr)': 'header label', });
lyr_Nets_10.set('fieldLabels', {'Region': 'header label', 'Nets (Tons/yr)': 'header label', });
lyr_Mulchingfilms_11.set('fieldLabels', {'Region': 'header label', 'Mulching films (Tons/yr)': 'header label', });
lyr_Coveringfilms_12.set('fieldLabels', {'Region': 'header label', 'Covering films (Tons/yr)': 'header label', });
lyr_TotalAPWTonsyr_13.set('fieldLabels', {'Region': 'header label', 'Total APW (Tons/yr)': 'header label', });
lyr_TotalAPWTonsyr_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});