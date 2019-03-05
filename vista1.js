
const consultarInfraccion = (e) =>{
    e.preventDefault()
    console.log('Consultando patente...')
    const resultado = 'El resultado es '
    dqs('#resultado').innerHTML = resultado + dqs('#input').value
}
