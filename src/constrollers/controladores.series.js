const series = require ('../../series/series.json')
const controladoresSerie = {}
controladoresSerie.series = series

const traerTodasSeries = (req, res) => {
        res.status(200).json(series)
}
controladoresSerie.traerTodasSeries = traerTodasSeries

const traerSerieId = (req, res) => {
    const id = req.params.id
    const serie = series.find(serie => serie.id == id)
    res.status(200).json(serie)
}
controladoresSerie.traerSerieId = traerSerieId

const borrarSerieId = (req, res) => {
    const id = req.params.id
    const idx = series.findIndex(serie => serie.id == id)
    if (idx >= 0) {
        series.splice(idx,1)
        res.status(200).json(series)   
    } else {
        res.status(404).json({mensaje : `no se encuentra el id ${id}`})
    }
}
controladoresSerie.borrarSerieId = borrarSerieId

const modificarSerieId = (req, res) => {
    const id = req.params.id
    const serieBody = req.body
    const idx = series.findIndex(serie => serie.id == id)
    if (idx >= 0){
        const serie = {id:series[idx].id, ...serieBody}
        series[idx] = serie
        res.status(200).json(serie)
    }
    else
        res.status(404).json({mensaje: `El id ${id} no se encuentra`})
    
}
controladoresSerie.modificarSerieId = modificarSerieId

const subirSerie = (req, res) => {
        const {nombre, plataforma} = req.body
        const idSeries = series.map(serie => serie.id)
        const serie = {
            id: idSeries.length ==  0 ? 1 :  Math.max(...idSeries) + 1,
            nombre,
            plataforma,
            disponible : false
        }
        series.push(serie)
        res.status(201).json(serie)
}
controladoresSerie.subirSerie = subirSerie

module.exports = controladoresSerie