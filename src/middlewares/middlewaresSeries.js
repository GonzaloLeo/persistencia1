const {series} = require("../constrollers/controladores.series")
const middlewares = {}

const validaExisteIdSerie = (req, res, netx) => {
    const id = req.params.id 
    const serie = series.find(serie => serie.id == id)
    if (!serie) {
        return res.status(404).json({mensaje: `el id ${id} es incorrecto`})
    }
    netx()
}
middlewares.validaExisteIdSerie = validaExisteIdSerie


module.exports = middlewares