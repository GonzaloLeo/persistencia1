const express = require('express')
const routes = require('./routes')
const {controlaTiempo} = require('./middlewares')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(controlaTiempo.requestTime)
app.use(routes.seriesRoute)

app.listen(PORT, () => {
    console.log(`Aplicacion lista escuchando en: ${PORT}`);  
})
