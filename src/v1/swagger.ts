const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")

//meta info for API
const options = {
    definition:{
        openapi: "3.0.0",
        info: {title: "Quote API", version: "1.0.0"},
    },
    apis: ["./src/v1/routes/quoteRoutes.ts", "./src/database/Quote.ts"]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) =>{
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    //swagger in JSON format
    app.get("/api/v1/docs.json", (req,res)=>{
        res.setHeader("Content-Type", "application/json")
        res.send(swaggerSpec)
    })
    console.log(`Version 1 Docs are avaialble on http://localhost${port}/api/v1/docs`)
}

module.exports = {swaggerDocs}