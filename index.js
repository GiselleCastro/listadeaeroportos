import express from 'express'
import dotenv from 'dotenv'
import { route } from "./routes.js"
import { databaseAeroportosPublicosBrasil } from './model/JSONtoDatabase.js'

//4 - Adicionar ao sistema todos os aeroportos brasileiros
await databaseAeroportosPublicosBrasil()
console.info('Starting application...')

const app = express()
const { PORT } = dotenv.config().parsed;

app.use(
    route, 
    express.urlencoded({extended: true})
)

app.listen(3000, ()=>{
    console.log(`Acessar http://localhost:${PORT}/flight`)
    console.log(`Servidor executando na porta:${PORT}.`)
})
