import fs from 'fs'
import path from 'path'
import { levantarDadosICAO } from './searchAirports.js'

export const levantarDadosICAOBrasil = async () => {
    await levantarDadosICAO();
    const listaAtualizadaAeroportosMundo = path.resolve('.','database', 'aeroportos2.JSON')
    const listaAtualizadaAeroportosMundoObjeto = JSON.parse(fs.readFileSync(listaAtualizadaAeroportosMundo, {encoding:'utf-8'}))
    const minInfoListaAtualizadaAeroportosBrasil = []
    listaAtualizadaAeroportosMundoObjeto.forEach((item) =>{
        if(item.iata_code && item.type.includes("airport") && item.iso_country === "BR"){
            delete item.continent
            delete item.coordinates
            delete item.elevation_ft
            delete item.gps_code
            delete item.ident
            delete item.local_code
            minInfoListaAtualizadaAeroportosBrasil.push(item)
        }
    })
    fs.writeFileSync(fs.openSync(path.resolve('.','database','aeroportosPublicosBrasil.JSON'), 'w+'), JSON.stringify(minInfoListaAtualizadaAeroportosBrasil))
}