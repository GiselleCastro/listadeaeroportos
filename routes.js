import express from "express"
import { showCities } from "./middleware/showCities.js"
import { checkStart, checkEnd, messageToVisitor } from "./middleware/checkParams.js" 

export const route = express.Router()

route.get('/flight', showCities)

//1 - Implemente a seguinte rota:
// /flight/{FROM}/{TO}
route.get('/flight/:ida/:volta', checkStart, checkEnd, messageToVisitor)



