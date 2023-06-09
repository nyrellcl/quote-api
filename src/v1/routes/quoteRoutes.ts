import express = require("express")
const router = express.Router();
import { QuoteController } from "../../controllers/quoteController";

const quoteController = new QuoteController()

router.get("/", quoteController.getAll)

router.post("/", quoteController.getAll)

router.patch("/:quoteId", (req,res)=>{
    res.send("Update quote")
})

router.delete("/:quoteId", (req,res)=>{
    res.send("Delete quote")
})




module.exports = router