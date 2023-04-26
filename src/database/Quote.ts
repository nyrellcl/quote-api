const DB = require("./db.json")

const getAllQuotes = () =>{
    return DB.text
}

const getAllAuthors = ()=>{
    return DB.author
}

module.exports = {getAllQuotes, getAllAuthors}