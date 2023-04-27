import express = require("express");
import bodyParser = require("body-parser");
const app = express()
const v1QuoteRouter = require("./v1/routes/quoteRoutes")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use("/api/v1/quotes", v1QuoteRouter )

app.listen(PORT, () =>{
    console.log(`API is listening on port ${PORT}`)
})