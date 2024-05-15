var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UAAha_1 = new ol.format.GeoJSON();
var features_UAAha_1 = format_UAAha_1.readFeatures(json_UAAha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UAAha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UAAha_1.addFeatures(features_UAAha_1);
var lyr_UAAha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UAAha_1, 
                style: style_UAAha_1,
                popuplayertitle: "UAA (ha)",
                interactive: true,
    title: 'UAA (ha)<br />\
    <img src="styles/legend/UAAha_1_0.png" /> 4287 - 150000<br />\
    <img src="styles/legend/UAAha_1_1.png" /> 150000 - 250000<br />\
    <img src="styles/legend/UAAha_1_2.png" /> 250000 - 500000<br />\
    <img src="styles/legend/UAAha_1_3.png" /> 500000 - 2000000<br />\
    <img src="styles/legend/UAAha_1_4.png" /> 2000000 - 3000000<br />\
    <img src="styles/legend/UAAha_1_5.png" /> 3000000 - 4800000<br />'
        });
var format_SupportTonsyr_2 = new ol.format.GeoJSON();
var features_SupportTonsyr_2 = format_SupportTonsyr_2.readFeatures(json_SupportTonsyr_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupportTonsyr_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupportTonsyr_2.addFeatures(features_SupportTonsyr_2);
var lyr_SupportTonsyr_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupportTonsyr_2, 
                style: style_SupportTonsyr_2,
                popuplayertitle: "Support (Tons/yr)",
                interactive: true,
    title: 'Support (Tons/yr)<br />\
    <img src="styles/legend/SupportTonsyr_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/SupportTonsyr_2_1.png" /> 0 - 100<br />\
    <img src="styles/legend/SupportTonsyr_2_2.png" /> 100 - 300<br />\
    <img src="styles/legend/SupportTonsyr_2_3.png" /> 300 - 500<br />\
    <img src="styles/legend/SupportTonsyr_2_4.png" /> 500 - 1500<br />\
    <img src="styles/legend/SupportTonsyr_2_5.png" /> 1500 - 4100<br />'
        });
var format_BagsTonsyr_3 = new ol.format.GeoJSON();
var features_BagsTonsyr_3 = format_BagsTonsyr_3.readFeatures(json_BagsTonsyr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BagsTonsyr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BagsTonsyr_3.addFeatures(features_BagsTonsyr_3);
var lyr_BagsTonsyr_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BagsTonsyr_3, 
                style: style_BagsTonsyr_3,
                popuplayertitle: "Bags (Tons/yr)",
                interactive: true,
    title: 'Bags (Tons/yr)<br />\
    <img src="styles/legend/BagsTonsyr_3_0.png" /> 11 - 132<br />\
    <img src="styles/legend/BagsTonsyr_3_1.png" /> 132 - 500<br />\
    <img src="styles/legend/BagsTonsyr_3_2.png" /> 500 - 2500<br />\
    <img src="styles/legend/BagsTonsyr_3_3.png" /> 2500 - 3500<br />\
    <img src="styles/legend/BagsTonsyr_3_4.png" /> 3500 - 7000<br />\
    <img src="styles/legend/BagsTonsyr_3_5.png" /> 7000 - 18000<br />\
    <img src="styles/legend/BagsTonsyr_3_6.png" /> 18000 - 30000<br />'
        });
var format_ContainersTonsyr_4 = new ol.format.GeoJSON();
var features_ContainersTonsyr_4 = format_ContainersTonsyr_4.readFeatures(json_ContainersTonsyr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContainersTonsyr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContainersTonsyr_4.addFeatures(features_ContainersTonsyr_4);
var lyr_ContainersTonsyr_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContainersTonsyr_4, 
                style: style_ContainersTonsyr_4,
                popuplayertitle: "Containers (Tons/yr)",
                interactive: true,
    title: 'Containers (Tons/yr)<br />\
    <img src="styles/legend/ContainersTonsyr_4_0.png" /> 4 - 50<br />\
    <img src="styles/legend/ContainersTonsyr_4_1.png" /> 50 - 300<br />\
    <img src="styles/legend/ContainersTonsyr_4_2.png" /> 300 - 500<br />\
    <img src="styles/legend/ContainersTonsyr_4_3.png" /> 500 - 1000<br />\
    <img src="styles/legend/ContainersTonsyr_4_4.png" /> 1000 - 2000<br />\
    <img src="styles/legend/ContainersTonsyr_4_5.png" /> 2000 - 3500<br />\
    <img src="styles/legend/ContainersTonsyr_4_6.png" /> 3500 - 5100<br />'
        });
var format_IrrigationTonsyr_5 = new ol.format.GeoJSON();
var features_IrrigationTonsyr_5 = format_IrrigationTonsyr_5.readFeatures(json_IrrigationTonsyr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationTonsyr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationTonsyr_5.addFeatures(features_IrrigationTonsyr_5);
var lyr_IrrigationTonsyr_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationTonsyr_5, 
                style: style_IrrigationTonsyr_5,
                popuplayertitle: "Irrigation (Tons/yr)",
                interactive: true,
    title: 'Irrigation (Tons/yr)<br />\
    <img src="styles/legend/IrrigationTonsyr_5_0.png" /> 3 - 1000<br />\
    <img src="styles/legend/IrrigationTonsyr_5_1.png" /> 1000 - 3000<br />\
    <img src="styles/legend/IrrigationTonsyr_5_2.png" /> 3000 - 8000<br />\
    <img src="styles/legend/IrrigationTonsyr_5_3.png" /> 8000 - 15000<br />\
    <img src="styles/legend/IrrigationTonsyr_5_4.png" /> 15000 - 30000<br />\
    <img src="styles/legend/IrrigationTonsyr_5_5.png" /> 30000 - 50000<br />\
    <img src="styles/legend/IrrigationTonsyr_5_6.png" /> 50000 - 100000<br />'
        });
var format_NetsTonsyr_6 = new ol.format.GeoJSON();
var features_NetsTonsyr_6 = format_NetsTonsyr_6.readFeatures(json_NetsTonsyr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NetsTonsyr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NetsTonsyr_6.addFeatures(features_NetsTonsyr_6);
var lyr_NetsTonsyr_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NetsTonsyr_6, 
                style: style_NetsTonsyr_6,
                popuplayertitle: "Nets (Tons/yr)",
                interactive: true,
    title: 'Nets (Tons/yr)<br />\
    <img src="styles/legend/NetsTonsyr_6_0.png" /> 1 - 1000<br />\
    <img src="styles/legend/NetsTonsyr_6_1.png" /> 1000 - 3000<br />\
    <img src="styles/legend/NetsTonsyr_6_2.png" /> 3000 - 6000<br />\
    <img src="styles/legend/NetsTonsyr_6_3.png" /> 6000 - 10000<br />\
    <img src="styles/legend/NetsTonsyr_6_4.png" /> 10000 - 30000<br />\
    <img src="styles/legend/NetsTonsyr_6_5.png" /> 30000 - 50000<br />\
    <img src="styles/legend/NetsTonsyr_6_6.png" /> 50000 - 120000<br />'
        });
var format_MulchingfilmsTonsyr_7 = new ol.format.GeoJSON();
var features_MulchingfilmsTonsyr_7 = format_MulchingfilmsTonsyr_7.readFeatures(json_MulchingfilmsTonsyr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MulchingfilmsTonsyr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MulchingfilmsTonsyr_7.addFeatures(features_MulchingfilmsTonsyr_7);
var lyr_MulchingfilmsTonsyr_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MulchingfilmsTonsyr_7, 
                style: style_MulchingfilmsTonsyr_7,
                popuplayertitle: "Mulching films (Tons/yr)",
                interactive: true,
    title: 'Mulching films (Tons/yr)<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_7_0.png" /> 0 - 30<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_7_1.png" /> 30 - 200<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_7_2.png" /> 200 - 1000<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_7_3.png" /> 1000 - 2000<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_7_4.png" /> 2000 - 7000<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_7_5.png" /> 7000 - 12000<br />'
        });
var format_HighTunnelsTonsyr_8 = new ol.format.GeoJSON();
var features_HighTunnelsTonsyr_8 = format_HighTunnelsTonsyr_8.readFeatures(json_HighTunnelsTonsyr_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighTunnelsTonsyr_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighTunnelsTonsyr_8.addFeatures(features_HighTunnelsTonsyr_8);
var lyr_HighTunnelsTonsyr_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighTunnelsTonsyr_8, 
                style: style_HighTunnelsTonsyr_8,
                popuplayertitle: "High Tunnels (Tons/yr)",
                interactive: true,
    title: 'High Tunnels (Tons/yr)<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_0.png" /> 0 - 0<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_1.png" /> 0 - 1<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_2.png" /> 1 - 2<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_3.png" /> 2 - 3<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_4.png" /> 3 - 4<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_5.png" /> 4 - 5<br />\
    <img src="styles/legend/HighTunnelsTonsyr_8_6.png" /> 5 - 7<br />'
        });
var format_LowtunnelsTonsyr_9 = new ol.format.GeoJSON();
var features_LowtunnelsTonsyr_9 = format_LowtunnelsTonsyr_9.readFeatures(json_LowtunnelsTonsyr_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowtunnelsTonsyr_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowtunnelsTonsyr_9.addFeatures(features_LowtunnelsTonsyr_9);
var lyr_LowtunnelsTonsyr_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowtunnelsTonsyr_9, 
                style: style_LowtunnelsTonsyr_9,
                popuplayertitle: "Low tunnels (Tons/yr)",
                interactive: true,
    title: 'Low tunnels (Tons/yr)<br />\
    <img src="styles/legend/LowtunnelsTonsyr_9_0.png" /> 0 - 0<br />\
    <img src="styles/legend/LowtunnelsTonsyr_9_1.png" /> 0 - 200<br />\
    <img src="styles/legend/LowtunnelsTonsyr_9_2.png" /> 200 - 500<br />\
    <img src="styles/legend/LowtunnelsTonsyr_9_3.png" /> 500 - 1500<br />\
    <img src="styles/legend/LowtunnelsTonsyr_9_4.png" /> 1500 - 5000<br />\
    <img src="styles/legend/LowtunnelsTonsyr_9_5.png" /> 5000 - 32691<br />'
        });
var format_TotalAPWTonsyr_10 = new ol.format.GeoJSON();
var features_TotalAPWTonsyr_10 = format_TotalAPWTonsyr_10.readFeatures(json_TotalAPWTonsyr_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalAPWTonsyr_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalAPWTonsyr_10.addFeatures(features_TotalAPWTonsyr_10);
var lyr_TotalAPWTonsyr_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TotalAPWTonsyr_10, 
                style: style_TotalAPWTonsyr_10,
                popuplayertitle: "Total APW (Tons/yr)",
                interactive: true,
    title: 'Total APW (Tons/yr)<br />\
    <img src="styles/legend/TotalAPWTonsyr_10_0.png" /> 50 - 5000<br />\
    <img src="styles/legend/TotalAPWTonsyr_10_1.png" /> 5000 - 40000<br />\
    <img src="styles/legend/TotalAPWTonsyr_10_2.png" /> 40000 - 80000<br />\
    <img src="styles/legend/TotalAPWTonsyr_10_3.png" /> 80000 - 150000<br />\
    <img src="styles/legend/TotalAPWTonsyr_10_4.png" /> 150000 - 230000<br />\
    <img src="styles/legend/TotalAPWTonsyr_10_5.png" /> 230000 - 330000<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_UAAha_1.setVisible(false);lyr_SupportTonsyr_2.setVisible(false);lyr_BagsTonsyr_3.setVisible(false);lyr_ContainersTonsyr_4.setVisible(false);lyr_IrrigationTonsyr_5.setVisible(false);lyr_NetsTonsyr_6.setVisible(false);lyr_MulchingfilmsTonsyr_7.setVisible(false);lyr_HighTunnelsTonsyr_8.setVisible(false);lyr_LowtunnelsTonsyr_9.setVisible(false);lyr_TotalAPWTonsyr_10.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_UAAha_1,lyr_SupportTonsyr_2,lyr_BagsTonsyr_3,lyr_ContainersTonsyr_4,lyr_IrrigationTonsyr_5,lyr_NetsTonsyr_6,lyr_MulchingfilmsTonsyr_7,lyr_HighTunnelsTonsyr_8,lyr_LowtunnelsTonsyr_9,lyr_TotalAPWTonsyr_10];
lyr_UAAha_1.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'UAA (ha)': 'UAA (ha)', });
lyr_SupportTonsyr_2.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Support': 'Support', });
lyr_BagsTonsyr_3.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Bags': 'Bags', });
lyr_ContainersTonsyr_4.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Containers': 'Containers', });
lyr_IrrigationTonsyr_5.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Irrigation': 'Irrigation', });
lyr_NetsTonsyr_6.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Nets': 'Nets', });
lyr_MulchingfilmsTonsyr_7.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Mul_Films': 'Mul_Films', });
lyr_HighTunnelsTonsyr_8.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'High_Tun': 'High_Tun', });
lyr_LowtunnelsTonsyr_9.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Low_Tun': 'Low_Tun', });
lyr_TotalAPWTonsyr_10.set('fieldAliases', {'CNTR_CODE': 'CNTR_CODE', 'Region': 'Region', 'Total_APW': 'Total_APW', });
lyr_UAAha_1.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'UAA (ha)': 'TextEdit', });
lyr_SupportTonsyr_2.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Support': 'TextEdit', });
lyr_BagsTonsyr_3.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Bags': 'TextEdit', });
lyr_ContainersTonsyr_4.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Containers': 'TextEdit', });
lyr_IrrigationTonsyr_5.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Irrigation': 'TextEdit', });
lyr_NetsTonsyr_6.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Nets': 'TextEdit', });
lyr_MulchingfilmsTonsyr_7.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Mul_Films': 'TextEdit', });
lyr_HighTunnelsTonsyr_8.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'High_Tun': 'TextEdit', });
lyr_LowtunnelsTonsyr_9.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Low_Tun': 'TextEdit', });
lyr_TotalAPWTonsyr_10.set('fieldImages', {'CNTR_CODE': 'TextEdit', 'Region': 'TextEdit', 'Total_APW': 'TextEdit', });
lyr_UAAha_1.set('fieldLabels', {'CNTR_CODE': 'hidden field', 'Region': 'inline label - visible with data', 'UAA (ha)': 'inline label - visible with data', });
lyr_SupportTonsyr_2.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Support': 'inline label - visible with data', });
lyr_BagsTonsyr_3.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Bags': 'inline label - visible with data', });
lyr_ContainersTonsyr_4.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Containers': 'inline label - visible with data', });
lyr_IrrigationTonsyr_5.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Irrigation': 'inline label - visible with data', });
lyr_NetsTonsyr_6.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Nets': 'inline label - visible with data', });
lyr_MulchingfilmsTonsyr_7.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Mul_Films': 'inline label - visible with data', });
lyr_HighTunnelsTonsyr_8.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'High_Tun': 'inline label - visible with data', });
lyr_LowtunnelsTonsyr_9.set('fieldLabels', {'CNTR_CODE': 'no label', 'Region': 'inline label - visible with data', 'Low_Tun': 'inline label - visible with data', });
lyr_TotalAPWTonsyr_10.set('fieldLabels', {'CNTR_CODE': 'hidden field', 'Region': 'inline label - visible with data', 'Total_APW': 'header label - visible with data', });
lyr_TotalAPWTonsyr_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});