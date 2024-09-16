const { Router } = require('express')
const route = Router()
const {controladores} = require ('../constrollers')
const {middlewaresSeries} = require ('../middlewares')


// pedir todas las series
route.get('/series', 
            controladores.traerTodasSeries)

// pedir serie por id 
route.get('/series/:id', 
    middlewaresSeries.validaExisteIdSerie, 
            controladores.traerSerieId)

// agregar
route.post('/series', 
            controladores.subirSerie)

// borrar
route.delete('/series/:id',
    middlewaresSeries.validaExisteIdSerie, 
            controladores.borrarSerieId)
 
// editar segun su id
route.put('/series/:id',   
    middlewaresSeries.validaExisteIdSerie, 
            controladores.modificarSerieId)

module.exports = route 
