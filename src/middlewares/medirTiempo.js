const controlaTiempo = {}

const requestTime = (req, _ , netx) => {
    console.log({url : req.url, fechaYHora : new Date() })
    netx()
}
controlaTiempo.requestTime = requestTime

module.exports = controlaTiempo