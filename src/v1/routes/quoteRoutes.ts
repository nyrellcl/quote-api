import express = require("express")
const router = express.Router();
import { QuoteController } from "../../controllers/quoteController";

const quoteController = new QuoteController()

router.get("/", quoteController.getAll)


router.get("/:quoteId", (req,res)=>{
    res.send("Get existing quote")
})

router.post("/", (req,res)=>{
    res.send("Create new quote")
})

router.patch("/:quoteId", (req,res)=>{
    res.send("Update quote")
})

router.delete("/:quoteId", (req,res)=>{
    res.send("Delete quote")
})

module.exports = router