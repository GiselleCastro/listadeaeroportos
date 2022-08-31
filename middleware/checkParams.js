import { airportOfTheCity } from "../model/JSONtoDatabase.js"

// 2 - A partir da sigla informada, descubra qual aeroporto se trata. 
export const messageToVisitor = (req, res) => {
    const { ida, volta } = req.params
    airportOfTheCity(ida.toUpperCase(), (err01, row01) => {
        airportOfTheCity(volta.toUpperCase(), (err02, row02) => {
// 3 - Exibir um JSON no seguinte formato:
            res.status(200).json(
                {
                    origem: row01.iata_code,
                    destino: row02.iata_code,
                    descricao: `Flight from ${row01.name} (${row01.municipality}) to ${row02.name} (${row02.municipality})`
                }
            )
        })
    })
}
export const checkStart = (req, res, next) => {
    const { ida, volta } = req.params
    airportOfTheCity(ida.toUpperCase(), (err, row) => {
        if(!err && !row){
            return res.status(404).json({ message: "Inexistent airport of flight start."})
        }
        if (err) return res.status(500).json({ message: "Internal error"})
        next()
    })
}

export const checkEnd = (req, res, next) => {
    const { ida, volta } = req.params
    airportOfTheCity(volta.toUpperCase(), (err, row) => {
        if(!err && !row){
            return res.status(404).json({ message: "Inexistent airport of flight end."})
        } 
        if (err) return res.status(500).json({ message: "Internal error"})
        next()
    })   
}