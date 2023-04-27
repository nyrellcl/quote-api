const DB = require("./db.json")

const {saveToDatabase} = require("./utils")

const getAllQuotes = () =>{
    return DB
}

module.exports = {getAllQuotes}