import { Dataset } from 'data.js'
import fs from 'fs/promises'
import path from 'path';
const path_ = 'https://datahub.io/core/airport-codes/datapackage.json'

export const levantarDadosICAO = async () => { 
  const dataset = await Dataset.load(path_)
  for (const id in dataset.resources) {   
    dataset.resources[id]._descriptor.name
  }
  for (const id in dataset.resources) { 
    if (dataset.resources[id]._descriptor.format === "json") {
      const file = dataset.resources[id] 
      const buffer = await file.buffer
      fs.writeFile(path.resolve('.','database',`./aeroportos${id}.JSON`), buffer,  'utf-8')
    }
  }
}