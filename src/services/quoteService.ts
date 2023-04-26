interface Quote{
    text: string,
    author: string
}

const quotes = require("../database/Quote")

export class QuoteService{
    public static async getAllQuotes(): Promise<Quote[]>{
        const allQuotes = quotes.text
        return allQuotes
    }
}