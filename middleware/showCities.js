import { cities } from "../model/JSONtoDatabase.js";

export const showCities = (req, res) => {
    cities((err, row) => {
        if(err) res.json({ messageError : err})
        else res.json({Places_to_you_visit : row})
    })    
}