function entrandoVistaDos(){
    var arrayDepositos = []    
    const depositosUrl = apiUrl + 'depositos'
    crearMapa('map')

    fetch(depositosUrl)
        .then(r => r.json())
        .then(r => cargarArrayDepositos(r.depositos));
        
    function cargarArrayDepositos (depositos){
        depositos.map(d =>{
            arrayDepositos.push(d)
        })
        console.log(arrayDepositos)            
    }
 }
