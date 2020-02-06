var wms_layers = [];

        var lyr_GOOGLESATLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLESATLITE_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Vialidad'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3,
    title: 'LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Unidades_de_Paisaje<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3_0.png" /> Cumbres Montañosas<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3_1.png" /> Depresión<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3_2.png" /> Montaña Baja<br />'
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4,
    title: 'LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Temperatura<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4_0.png" /> 22<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4_1.png" /> 24<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4_2.png" /> 26<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4_3.png" /> 28<br />'
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Recursos_Minerales'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6,
    title: 'LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Precipitacion<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6_0.png" /> 1000 - 1400<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6_1.png" /> 600 - 1000<br />'
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Oronimia'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Isoyetas'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Hidrografia'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Geologicos_Estructural'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11,
    title: 'LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Geologia_Cronoestratigrafia<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11_0.png" /> Cretáceo<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11_1.png" /> Paleogeno<br />'
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12,
    title: 'LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Formaciones_Geologicas<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12_0.png" /> Formación La Luna, Colón, Mito Juán<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12_1.png" /> Formación Mirador<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12_2.png" /> Grupo Orocué<br />'
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Curvas_de_Nivel'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14,
    title: 'LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Capacidad_Uso_Del_Suelo<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14_0.png" /> Clase V<br />\
    <img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14_1.png" /> Clase VI<br />'
        });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Centros_Poblados_Capital'
            });var format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16 = new ol.format.GeoJSON();
var features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16 = format_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.readFeatures(json_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.addFeatures(features_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16);var lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16, 
                style: style_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16,
                title: '<img src="styles/legend/LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.png" /> LIBERTAD_CAPACHOVIEJO Municipio_Capacho_Viejo_Parroquia_Libertad Libertad_Centros_Poblados'
            });

lyr_GOOGLESATLITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.setVisible(true);lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.setVisible(true);
var layersList = [lyr_GOOGLESATLITE_0,lyr_OpenStreetMap_1,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15,lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16];
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'tipo': 'tipo', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3.set('fieldAliases', {'pk': 'pk', 'rowid': 'rowid', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'temperatur': 'temperatur', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'mineral': 'mineral', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'valor_men': 'valor_men', 'valor_may': 'valor_may', 'rango': 'rango', 'valor': 'valor', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'precipitac': 'precipitac', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'n': 'n', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'número': 'número', 'era': 'era', 'período': 'período', 'época': 'época', 'roca': 'roca', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'altitud_ms': 'altitud_ms', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'clase_suel': 'clase_suel', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3.set('fieldImages', {'pk': 'TextEdit', 'rowid': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'temperatur': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'mineral': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'valor_men': 'TextEdit', 'valor_may': 'TextEdit', 'rango': 'TextEdit', 'valor': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'precipitac': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'n': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'número': 'TextEdit', 'era': 'TextEdit', 'período': 'TextEdit', 'época': 'TextEdit', 'roca': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'altitud_ms': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'clase_suel': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Vialidad_2.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Unidades_de_Paisaje_3.set('fieldLabels', {'pk': 'no label', 'rowid': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Temperatura_4.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'temperatur': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Recursos_Minerales_5.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'mineral': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Precipitacion_6.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'valor_men': 'no label', 'valor_may': 'no label', 'rango': 'no label', 'valor': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Oronimia_7.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Isoyetas_8.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'precipitac': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Hidrografia_9.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologicos_Estructural_10.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'n': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Geologia_Cronoestratigrafia_11.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'número': 'no label', 'era': 'no label', 'período': 'no label', 'época': 'no label', 'roca': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Formaciones_Geologicas_12.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Curvas_de_Nivel_13.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'altitud_ms': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Capacidad_Uso_Del_Suelo_14.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'clase_suel': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_Capital_15.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CAPACHOVIEJOMunicipio_Capacho_Viejo_Parroquia_LibertadLibertad_Centros_Poblados_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});