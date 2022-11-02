import sqlite3 from 'sqlite3'
import fs from 'fs'
import path from 'path'
import { levantarDadosICAOBrasil } from '../js/gerarJSONAeroportosBrasil.js'


const aeroportosBrasileiros = new sqlite3.Database(path.resolve('.', 'database', 'aeroportosPublicosBrasil.db'))

const inserirInDatabase = (iata_code, iso_country, iso_region, municipality, nome, type, cb) => {   
    aeroportosBrasileiros.run(`INSERT or REPLACE INTO aeroportosBrasil (iata_code, iso_country, iso_region, municipality, name, type) VALUES (?, ?, ?, ?, ?, ?)`, [iata_code, iso_country, iso_region, municipality, nome, type], cb)
}

export const databaseAeroportosPublicosBrasil = async () => {
    console.info('Uploading data from ICAO...')
    await levantarDadosICAOBrasil()
    console.info('A JSON file was created.')
    const objetoAeroportosPublicosBrasil = JSON.parse(fs.readFileSync(path.resolve('.','database','aeroportosPublicosBrasil.JSON'), 'utf-8'))
    console.info('Sending information to the database...')
    objetoAeroportosPublicosBrasil.forEach((item) => {
        if (!Object.values(item).includes(null)) {
            inserirInDatabase(item.iata_code, item.iso_country, item.iso_region, item.municipality, item.name, item.type, (err) => {
                if(err) console.log(err, item)
            })
        }
    })
    console.info("Success! Brazilian airports data available!")
    const JSONtemp = fs.readdirSync(path.resolve('.', 'database')).filter(ext => ext.includes(".JSON"))
    JSONtemp.forEach(one => fs.rmSync(path.resolve('.', 'database', one)))
}

export const cities = (callback) => aeroportosBrasileiros.all(`SELECT iso_region, municipality from aeroportosBrasil`, callback)

export const airportOfTheCity = (IATA, callback) => aeroportosBrasileiros.get(`SELECT * from aeroportosBrasil WHERE iata_code = ?`, IATA, callback)