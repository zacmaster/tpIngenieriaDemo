function entrandoVistaDos(){
    var arrayDepositos = []  

    const icono = L.icon({
        iconUrl: './depositoMarker.png',
        iconSize: [38,65],
        iconAnchor: [22,94],
        popupAnchor: [-3,-76]
    
    })

    const depositosUrl = apiUrl + 'depositos'
    var  mapa = crearMapa('map')

    fetch(depositosUrl)
        .then(r => r.json())
        .then(r => cargarArrayDepositos(r.depositos))
        .then(() => dibujarDepositos(mapa))
    function cargarArrayDepositos (depositos){
        depositos.map(d =>{
            arrayDepositos.push(d)
        })
        console.log(arrayDepositos)            
    }
    function dibujarDepositos(mapa){
        let lat = arrayDepositos[0].ubicacion.lat
        let long = arrayDepositos[0].ubicacion.lon
        mapa.setView([lat, long],15)

        arrayDepositos.map(deposito => {
            let lat = deposito.ubicacion.lat
            let long = deposito.ubicacion.lon
            var marker = L.marker([lat,long],{icon: icono})
            
            marker.addTo(mapa)

        })
    }

}
