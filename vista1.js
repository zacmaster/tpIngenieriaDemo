
const consultarInfraccion = (e) =>{
    e.preventDefault()
    console.log('Consultando patente...')
    const resultado = 'El resultado es '
    //   dqs('#resultado').innerHTML = resultado + dqs('#input').value
    let patente = dqs('#input').value
    getInfracciones(patente)
}

function getInfracciones(patente){
    fetch(apiUrl + patente + '/infracciones/')
    .then(r => r.json())
    .then(r => mostrarInfracciones(r.infracciones)) 
}

function mostrarInfracciones(infracciones){
    var infraccionesHTML = `
    
    <table>
        <thead>
        <tr>
            <th>Direcciones</th>
            <th>Monto</th>
            <th>Tipo</th>
        </tr>
        </thead>
        <tbody>

    `
    
    infracciones.forEach(e => {
        infraccionesHTML += `
        
            <tr>
                <td>${e.direccionRegistrada}</td>
                <td>${e.montoAPagar}</td>
                <td>${e.tipoInfraccion}</td>  
            </tr>
        `
    });
    infraccionesHTML += `</tbody></table>`
    dqs('#infracciones').innerHTML = infraccionesHTML


}