import fs from "fs/promises";

interface Quote {
  text: string;
  author: string;
}

const quotes = require("../database/db");

export class QuoteService {
  public static async getAllQuotes(): Promise<Quote[]> {
    const allQuotes = quotes;

    if (allQuotes.length === 0) {
      try {
        const data = fs.readFile("../database/db.json");
        this.getAllQuotes = JSON.parse((await data).toString());
      } catch (error) {
        console.error(error);
      }
    }
    return allQuotes;
  }
}
