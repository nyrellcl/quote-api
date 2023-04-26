import { Request, Response } from "express";
import {QuoteService} from "../services/quoteService"

export class QuoteController{
    public async getAll(req: Request, res: Response): Promise<void>{
        try{
            const quotes = await QuoteService.getAllQuotes();
            res.send({status: "OK", data: quotes})
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Internal server error'})
        }
    }
}