const dqsa = args => document.querySelectorAll(args)
const dqs = args => document.querySelector(args)
const apiUrl = "https://infraccionesya.herokuapp.com/api/"


/******************************************************************************
 * Función para crear un mapa.
 */
function crearMapa(nodeId){
    // Ubicación de la UNGS.
    var ungsLocation = [-34.5221554, -58.7000067];
    console.log('estoy creando mapa')
    // Creación del componente mapa de Leaflet.
    var map = L.map(nodeId).setView(ungsLocation, 13);

    // Agregamos los Layers de OpenStreetMap.
    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregamos el control para seleccionar Layers al mapa
    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(map);
    // hack:
    map.layersControl = layersControl;

    return map;
}

