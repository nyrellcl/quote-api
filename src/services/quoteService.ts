interface Quote{
    text: string,
    author: string
}

const quotes = require("../database/db")

export class QuoteService{
    public static async getAllQuotes(): Promise<Quote[]>{
        const allQuotes = quotes
        return allQuotes
    }
}